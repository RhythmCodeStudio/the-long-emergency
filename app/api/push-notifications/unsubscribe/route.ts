import { NextResponse } from "next/server";
// import { removeSubscription } from "@/lib/push-notification-subscriptions";
import { removeSubscriptionFromDB } from "@/actions/push-notifications/notification-subscriptions-db";

export async function POST(req: Request) {
  const { endpoint } = await req.json();
  if (!endpoint) {
    return NextResponse.json({ error: "Missing endpoint" }, { status: 400 });
  }
  await removeSubscriptionFromDB(endpoint);
  return NextResponse.json({ success: true });
}