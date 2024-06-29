import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
// import from emailjs
// import emailjs from "@emailjs/browser";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: NextRequest, res: NextResponse) {
  export async function POST(req: NextRequest) {
  const payload = await req.text();
  const res = JSON.parse(payload);
  const sig = req.headers.get("Stripe-Signature");
  const dateTime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleDateString();
  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    console.log("event", event?.type);
    console.log("res", res);

    return NextResponse.json({ status: "Success", event: event.type });
  } catch (error) {
    return NextResponse.json({ status: "Failed", error });
  }
}
