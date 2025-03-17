
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';
import React from 'react'
import "../OnlinePayment/OnlinePayment.css"
function Payment() {

    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [orderId, setOrderId] = useState(false)

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: 'This is the Book Worth 100$',
                    amount: {
                        currency_code: 'USD',
                        value: 10
                    },
                },
            ],
            application_context: {
                shipping_preference: 'NO_SHIPPING'
            }
        })
            .then((orderID) => {
                setOrderId(orderID)
                return orderID
            })
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details
            setSuccess(true)
        })
    }

    const onError = (data, actions) => {
        setErrorMessage("An error occured with your payment")
    }

    return (
        <div class="AmmaNanna">
            <div class="paymentbutton">
            <PayPalScriptProvider
                options={{
                    "client-id":
                        "AYgPbTbILRJz-rOh9VPSf7KcdFUoV4o_7DgenmdUezDLDp-ghaeCcRQ19qD_9RXk3GBn5tMN2OVXlCEd"
                }}
            >
               
                <button className="btn btn-primary mb-2" onClick={() => setShow(true)} type='submit'>
                    Online Payment
                </button>

                {show ? (
                    <PayPalButtons style={{ layout: 'vertical' }} createOrder={createOrder}
                        onApprove={onApprove} onError={onError} />
                ) : null}

                {success ? (
                    <h1>Your Payment has been done successfully </h1>
                ) : <h2>payment is pending</h2>}

            </PayPalScriptProvider>
        </div>
        </div>
    );
}

export default Payment;