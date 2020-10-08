import React, { useState } from "react";
import {useSelector} from 'react-redux';
import { Link, useHistory } from "react-router-dom";

const CardDetails = () => {
  const history = useHistory();
  const [cardName, setcardName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [expireDate, setexpireDate] = useState("");
  const [CVV, setCVV] = useState("");

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const onSubmit = (e) => {
    e.preventDefault();
    const userCardDetails = {
      cardName,
      cardNumber,
      expireDate,
      CVV,
    };
    console.log(userCardDetails);
    if(!userInfo) {
      return history.push('/SignIn');
    } else {
      return history.push(`/bookingsuccessful`)
    }
  };

  return (
    <div className="card-details">
    
      <form>
        <div className="card-details-header">
          <h3 className="card-details-header-1">Pay with stripe</h3>
          <h5 className="card-details-header-2">Powered by stripe</h5>
        </div>
        <div className="form-group">
          <label htmlFor="card-name">Card Name</label>
          <input
            type="text"
            className="form-control"
            id="card-name"
            name="name"
            placeholder="Card Name"
            value={cardName}
            onChange={(e) => setcardName(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="card-number">Card Number</label>
          <input
            type="tel"
            className="form-control"
            id="card-number"
            placeholder="Card Number"
            minLength="15"
            maxLength="16"
            value={cardNumber}
            onChange={(e) => setcardNumber(Number(e.target.value))}
           
          />
        </div>
        <div className="card-details-expiry-cvv">
          <div className="form-group col1">
            <label htmlFor="expire-date">Expiry</label>
            <input
              type="text"
              className="form-control"
              id="expire-date"
              placeholder="MM/YY"
              maxLength="5"
              value={expireDate}
              onChange={(e) => setexpireDate(e.target.value)}
              
            />
          </div>
          <div className="form-group col2">
            <label htmlFor="CVV">CVV</label>
            <input
              type="tel"
              className="form-control"
              id="CVV"
              placeholder="CVV"
              minLength="2"
              maxLength="3"
              value={CVV}
              onChange={(e) => setCVV(Number(e.target.value))}
            />
          </div>
        </div>
        <button className="submit btn-block" style={{color: "red"}} onClick={onSubmit} type="submit">
          Pay
        </button>
      </form>
    </div>
  );
};

export default CardDetails;
