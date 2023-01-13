import React, { useState, useEffect } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MHyDkElQQfPYa4lddXZxnykWbItJlpd01O24xapXoIWddjbjK8YUGj5SbZGBexJo6d0hsEnsAePfskG4jrs5HxY00rqH3Khqb');

export default function App() {
    const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
    {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
         <CheckoutForm />
         </Elements>
        )}
    </div>
 
  );
};