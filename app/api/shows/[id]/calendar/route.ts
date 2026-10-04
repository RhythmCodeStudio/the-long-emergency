import { getCalendarEvents } from "@/actions/actions";

function chicagoTimeToUtc(date: string, time: string) {
  const [year, month, day] = date.slice(0, 10).split("-").map(Number);
  const [hour, minute, second = 0] = time.split(":").map(Number);
  const desiredUtc = Date.UTC(year, month - 1, day, hour, minute, second);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });

  let timestamp = desiredUtc;

  for (let attempt = 0; attempt < 3; attempt++) {
    const parts = formatter.formatToParts(new Date(timestamp)).reduce<
      Record<string, string>
    >((result, part) => {
      if (part.type !== "literal") result[part.type] = part.value;
      return result;
    }, {});

    const representedUtc = Date.UTC(
      Number(parts.year),
      Number(parts.month) - 1,
      Number(parts.day),
      Number(parts.hour),
      Number(parts.minute),
      Number(parts.second),
    );

    const adjustment = desiredUtc - representedUtc;
    timestamp += adjustment;

    if (adjustment === 0) break;
  }

  return new Date(timestamp);
}

function escapeIcsText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function formatIcsDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const events = await getCalendarEvents();
  const event = events.find((item) => String(item.id) === id);

  if (!event) {
    return new Response("Event not found", { status: 404 });
  }

  const date =
    event.date instanceof Date
      ? event.date.toISOString().slice(0, 10)
      : String(event.date).slice(0, 10);
  const start = chicagoTimeToUtc(date, String(event.time));
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  const location = [
    event.venue_name,
    event.venue_street_address,
    event.venue_city,
    event.venue_state,
    event.venue_zip,
  ]
    .filter(Boolean)
    .join(", ");

  const calendarFile = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Long Emergency//Shows//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:show-${id}@thelongemergency.com`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${escapeIcsText(String(event.title))}`,
    `DESCRIPTION:${escapeIcsText(String(event.description ?? ""))}`,
    `LOCATION:${escapeIcsText(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(calendarFile, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="show-${id}.ics"`,
    },
  });
}