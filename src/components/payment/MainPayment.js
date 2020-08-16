import React from 'react'
import Calculator from './Calculator';
import PaymentMethod from './PaymentMethod';

const MainPayment = () => {
    return (
        <div className="main-payment-container">
            <p className="main-payment-header" >Payment</p>
            <div className="main-payment-container-wrapper" >
            <div className="payment-calculator-container" ><Calculator /> </div>
           <div className="payment-method-container" ><PaymentMethod /> </div>
            </div>

          
           
        </div>
    )
}

export default MainPayment;
