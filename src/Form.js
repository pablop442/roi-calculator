import React, { useState } from "react";
import FormInput from "./FormInput";

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
    <form onSubmit={(e) => e.preventDefault()}>
      <FormInput text="CIRC.SUPPLY $MONSTA" placeholder="Enter amount" />
      <FormInput text="$CAKE VAULT" placeholder="Enter amount" />
      <FormInput text="$BNB VAULT" placeholder="Enter amount" />
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
      <button type="submit" className="btn btn-success btn-lg ">
        Populate
      </button>
    </form>
  );
}

export default Form;
