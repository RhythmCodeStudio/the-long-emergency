"use client";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const cardElement = elements.getElement(CardElement)

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement
      })

      if (error) {
        console.error(error)
      } else {
        console.log("Payment Method:", paymentMethod)
        // Process the payment here: send paymentMethod.id to your server, create a PaymentIntent, etc.
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}

export default CheckoutForm