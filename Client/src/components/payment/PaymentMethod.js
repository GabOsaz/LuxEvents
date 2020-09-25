import React, {Component} from "react";
import CardDetails from "./CardDetails";
import BankTransferDetails from "./BankTransferDetails";

class PaymentMethod  extends Component{
  
  state = {
    paymentMethod: '',
    checked: ''
  }

  handleChange = (event) => {
   

    this.setState({
      paymentMethod: event.target.value,
      checked: event.target.value
    })
  }

  

    


  render(){
    
    console.log(this.state.paymentMethod, this.state.checked);
    return (
      <div className="payment-method">
        <h3 className="payment-method-header">Select a payment method</h3>
        <div className="payment-method-radio-container">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="pay-with-card"
              value="cardPayment"
              onClick={this.handleChange}
            />
            <label className="form-check-label" htmlFor="pay with card">
              Pay with card
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="bank-transfer"
              value="bankTransfer"
              onClick={this.handleChange}
            />
            <label className="form-check-label" htmlFor="bank-transfer">
              Bank transfer
            </label>
          </div>
        </div>
        <div>{this.state.paymentMethod === "bankTransfer" &&  <BankTransferDetails /> }
        </div>
        <div>{this.state.paymentMethod === "cardPayment" &&  <CardDetails /> }
        </div>
      </div>
    );
  }
  
};

export default PaymentMethod;
