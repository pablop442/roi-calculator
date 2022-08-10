import React, { useState } from "react";
import FormInput from "./FormInput";

function Form() {
  const [investment, setInvestment] = useState("");
  const [monstaPrice, setMonstaPrice] = useState("");
  const [monstaPurchased, setMonstaPurchased] = useState("");

  const percentage = 0.95;

  function calculatePurchased() {
    setMonstaPurchased((investment / monstaPrice) * percentage);
    console.log(monstaPurchased);
    return monstaPurchased;
  }

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
      <button type="submit" className="btn btn-success btn-lg ">
        Populate
      </button>
    </form>
  );
}

export default Form;
