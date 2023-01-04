import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"

export default function PaymentForm() {
  
    const [success, setSuccess] = useState(false);
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    

        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("hhtp://localhost:3000/payment", {
                    amount: 1000,
                    id
                })

                if(response.data.success) {
                    console.log("Successful Payment");
                    setSuccess(true);
                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
  
        return <>
            <div>
    
            </div>
        
        </>

    }
}
