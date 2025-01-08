import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import '../styles/Cart.css';

function Cart({ cart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <section className="cart">
            <h2 className="cart__title">Cart</h2>
            <ul className="cart__list">
                {cart.map((item, index) => (
                    <li  key={index} className="cart__item">
                        <span className="cart__item-desription">{item.description}</span>
                        <span className="cart__item-price">${item.price}</span>
                    </li>
                ))}
            </ul>
            <div className="cart__summary">
                <h3 className="cart__total">Total: ${total}</h3>
                <div className="cart__paypal">
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
            </div>
        </section>
    );
}

export default Cart;