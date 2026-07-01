import { NextResponse } from "next/server";
import {
  initializeDB,
  saveSubscriptionToDB,
} from "@/actions/push-notifications/notification-subscriptions-db";

export async function POST(req: Request) {
  try {
    const sub = await req.json();

    if (!sub?.endpoint || !sub?.keys) {
      return NextResponse.json(
        { error: "Invalid subscription payload" },
        { status: 400 },
      );
    }

    await initializeDB();
    await saveSubscriptionToDB(sub);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe route error:", error);
    return NextResponse.json(
      { error: "Failed to save subscription" },
      { status: 500 },
    );
  }
}