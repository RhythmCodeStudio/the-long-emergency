"use client";
// import data
// import { getPage } from "../lib/data";
// import components
import CheckoutForm from "@/components/checkout-form";
import convertToSubcurrency from "../lib/convert-to-sub-currency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default  function CheckoutPage() {
  const amount = 1000;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-2">
        <h2 className="text-center text-2xl lg:text-4xl">Checkout</h2>
      </div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutForm amount={amount} />
      </Elements>
    </div>
  );
}
