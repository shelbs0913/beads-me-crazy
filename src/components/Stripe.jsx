import React, { useState, useEffect } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import axios from 'axios';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MHyDkElQQfPYa4lddXZxnykWbItJlpd01O24xapXoIWddjbjK8YUGj5SbZGBexJo6d0hsEnsAePfskG4jrs5HxY00rqH3Khqb');

export default function App() {
    const [clientSecret, setClientSecret] = useState("");

    const cartList = useContext(CartContext);

    // const handleCheckout = async () => {
    //   const req = await fetch('/api/payment/session',{
    //   method : "POST",
    //   body : JSON.stringify({
    //      email : user_email,
    //      priceId : item_price_id
    //   })
    //  });
    //  const {id} = await req.json();
    //  // client side stripe package!
    //     const stripe = await loadStripe(
    //        process.env.NEXT_PUBLIC_STRIPE_PUBLISHED
    //      );
    //    if (stripe) {
    //        // method which redirect user to stripe checkout page.
    //        stripe.redirectToCheckout({
    //          sessionId: id, // id come from our api response
    //        });
    //      }
    //  }

  useEffect(() => {
      console.log("here")
    console.log(cartList.cartList);
    // Create PaymentIntent as soon as the page loads
    axios.post("http://localhost:5000/create-payment-intent", {
      cartList: cartList.cartList
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  });

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {/* add form */}
    {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
         <CheckoutForm />
         </Elements>
        )}
    </div>
 
  );
};