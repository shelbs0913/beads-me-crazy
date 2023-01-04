import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"


const PUBLIC_Key = "pk_test_51MHyDkElQQfPYa4lddXZxnykWbItJlpd01O24xapXoIWddjbjK8YUGj5SbZGBexJo6d0hsEnsAePfskG4jrs5HxY00rqH3Khqb";

const stripeTestPromis = loadStripe(PUBLIC_Key);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromis}>
        <PaymentForm />
    </Elements>
  )
}
