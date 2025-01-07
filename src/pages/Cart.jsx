import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

function Cart({ cart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.description} - ${item.price}</li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
            <PayPalButtons 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: total.toString(),
                            },
                        }],
                    });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(`Transaction completed by ${details.payer.name.given_name}`);
                  });
                }}
                />
        </div>
    );
}

export default Cart;