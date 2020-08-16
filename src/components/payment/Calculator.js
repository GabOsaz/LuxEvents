import React, { useState } from "react";

const Calculator = () => {
  const [amount, setAmount] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const gottenAmount = amount;
  const gottenPercentage = percentage;
  const total = 0.01 * Number(gottenAmount) * Number(gottenPercentage);

  return (
    <div className="payment-main">
      <div className="payment-calculator">
        <div>
          <h3 className="payment-header-1">Payment calculator</h3>
          <h6 className="payment-header-2">
            Select the percentage to be transfered
          </h6>
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="amount" id="amount">Amount</label>
            <input
              type="text"
              className="form-control text-primary"
              id="amount-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label htmlFor="percentage" id="percentage">Percentage</label>
            <div className="percentage-container">
              <div
                className="different-percentage"
                id="50%"
                value={percentage}
                onClick={(e) => setPercentage(50)}
              >
                50%
              </div>
              <div
                className="different-percentage"
                id="60%"
                value={percentage}
                onClick={() => setPercentage(60)}
              >
                60%
              </div>
              <div
                className="different-percentage"
                id="70%"
                value={percentage}
                onClick={() => setPercentage(70)}
              >
                70%
              </div>
              <div
                className="different-percentage"
                id="80%"
                value={percentage}
                onClick={() => setPercentage(80)}
              >
                80%
              </div>
            </div>
          </div>

          <div className="calculator-details-container">
            <div className="calculator-details">
              <div className="calculator-details-subtotal">Subtotal </div>
              <div className="calculator-details-subtotal-number">{amount}</div>
            </div>

            <div className="calculator-details">
              <div className="calculator-details-subtotal">Percentage </div>
              <div className="calculator-details-subtotal-number">
                {percentage}%
              </div>
            </div>
          </div>

          <div className="total-hr calculator-details-container">
            <div className="calculator-details ">
              <div className="calculator-details-subtotal">Total </div>
              <div className="calculator-details-subtotal-number">{total}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
