import React, { useState } from "react";
import FormInput from "./FormInput";
import "./index.css";

function Form() {
  const [investment, setInvestment] = useState("");
  const [monstaPrice, setMonstaPrice] = useState("");
  const [monstaPurchased, setMonstaPurchased] = useState("");
  const [monstaPercentage, setMonstaPercentage] = useState("");
  const [monstaB, setMonstaB] = useState("");
  const [monsta, setMonsta] = useState("");

  const percentage = 0.95;

  function calculatePurchased() {
    setMonstaPurchased((investment / monstaPrice) * percentage);
    console.log(monstaPurchased);
    return monstaPurchased;
  }
  const percentageToDecimal = (percentage) => {
    const decimal = percentage / 100;
    return decimal;
  };

  const calculateMonstaBQuantity = () => {
    setMonstaB(percentageToDecimal(monstaPercentage) * monstaPurchased);
    return monstaB;
  };
  const calculateMonstaQuantity = () => {
    setMonsta(
      Math.floor((1 - percentageToDecimal(monstaPercentage)) * monstaPurchased)
    );
    return monsta;
  };

  return (
    <>
      <div className="col-12 col-sm-6 d-flex justify-content-center m-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <FormInput text="CIRC.SUPPLY $MONSTA" placeholder="Enter amount" />
            <FormInput text="$CAKE VAULT" placeholder="Enter amount" />
            <FormInput text="$BNB VAULT" placeholder="Enter amount" />
          </div>
          <div className="row ">
            <FormInput
              text="INVESTMENT (USD)"
              placeholder="Enter amount"
              value={investment}
              onKeyUp={calculatePurchased}
              onInput={(e) => setInvestment(e.target.value)}
            />
            <FormInput
              text="$MONSTA PRICE"
              placeholder="Enter amount"
              value={monstaPrice}
              onKeyUp={calculatePurchased}
              onInput={(e) => setMonstaPrice(e.target.value)}
            />
            <FormInput
              text="$MONSTA PURCHASED"
              readOnly={true}
              value={monstaPurchased}
            />
          </div>
          <div className="row">
            <FormInput
              text="$MONSTA %"
              placeholder="Enter percentage"
              value={monstaPercentage}
              onKeyUp={(e) => {
                calculateMonstaBQuantity();
                calculateMonstaQuantity();
              }}
              onInput={(e) => setMonstaPercentage(e.target.value)}
            />
            <FormInput text="$MONSTA" readOnly={true} value={monsta} />
            <FormInput text="$BMONSTA" readOnly={true} value={monstaB} />
          </div>

          <button type="submit" className="btn clearbtn o btn-lg ">
            Clear all
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
