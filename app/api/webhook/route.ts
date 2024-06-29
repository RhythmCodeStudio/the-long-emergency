import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
// import from emailjs
import emailjs from "@emailjs/browser";

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
    console.log("event", event.type);
    console.log("res", res);
    // Handle the event
    const customerEmail = res?.data?.object?.billing_details?.email;
    console.log("customerEmail", customerEmail);
    
    const emailFilesToCustomer = (email: string) => {
      try {
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_I35_PURCHASE|| '',
            {} // Fix: Pass an empty object as the last argument
        )
      } catch (error) {
        console.log("error", error);
      }
    }

    if (event.type === "checkout.session.completed") {
      console.log("checkout.session.completed");
      // Fulfill the purchase...
      // Send email to customer
      emailFilesToCustomer(customerEmail);
    }


    return NextResponse.json({ status: "Success", event: event.type });
  } catch (error) {
    return NextResponse.json({ status: "Failed", error });
  }
}
