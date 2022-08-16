import React, { useState } from "react";
import FormInput from "./FormInput";
import "./index.css";

function Form() {
  const [circSupplyMonsta, setCircSupplyMonsta] = useState("");
  const [cakeVault, setCakeVault] = useState("");
  const [investment, setInvestment] = useState("");
  const [monstaPrice, setMonstaPrice] = useState("");
  const [monstaPurchased, setMonstaPurchased] = useState("");
  const [monstaPercentage, setMonstaPercentage] = useState("");
  const [monstaB, setMonstaB] = useState("");
  const [monsta, setMonsta] = useState("");
  const [remainingDays, setRemainingDays] = useState("");
  const [averageAPY, setAverageAPY] = useState("");
  const [bMonstaHoldings, setBMonstaHoldings] = useState("");
  const [remainingReset, setRemainingReset] = useState("");
  const [monstaHoldings, setMonstaHoldings] = useState("");
  const [circSupplyPercentage, setCircSupplyPercentage] = useState("");
  const [cakeSlice, setCakeSlice] = useState("");

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

  const calculateRemainingReset = () => {
    setRemainingReset(Math.floor(remainingDays / 50));
    return remainingReset;
  };

  const calculateCircSupplyPercentage = () => {
    setCircSupplyPercentage(
      (((+bMonstaHoldings + +monstaHoldings) / circSupplyMonsta) * 100).toFixed(
        3
      )
    );
    return circSupplyPercentage;
  };

  const calculateCakeSlice = () => {
    setCakeSlice(
      (percentageToDecimal(circSupplyPercentage) * cakeVault).toFixed(3)
    );
    return cakeSlice;
  };

  return (
    <>
      <div className="col-12 col-sm-6 d-flex justify-content-center m-auto text-center">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <FormInput
              text="CIRC.SUPPLY $MONSTA"
              placeholder="Enter amount"
              value={circSupplyMonsta}
              onInput={(e) => setCircSupplyMonsta(e.target.value)}
              onKeyUp={(e) => {
                calculateCircSupplyPercentage();
                calculateCakeSlice();
              }}
            />
            <FormInput
              text="$CAKE VAULT"
              placeholder="Enter amount"
              value={cakeVault}
              onInput={(e) => setCakeVault(e.target.value)}
              onKeyUp={calculateCakeSlice}
            />
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
          <div className="row">
            <FormInput
              text="REMAINING DAYS CYCLE 1"
              placeholder="Enter days"
              value={remainingDays}
              onKeyUp={calculateRemainingReset}
              onInput={(e) => setRemainingDays(e.target.value)}
            />
            <FormInput
              text="BMONSTA AVERAGE APY"
              value={averageAPY}
              placeholder="Enter percentage"
              onInput={(e) => setAverageAPY(e.target.value)}
            />
            <FormInput
              text="$BMONSTA HOLDINGS(QTY)"
              placeholder="Enter amount (check Excel!)"
              value={bMonstaHoldings}
              onInput={(e) => setBMonstaHoldings(e.target.value)}
              onKeyUp={(e) => {
                calculateCircSupplyPercentage();
                calculateCakeSlice();
              }}
            />
            <FormInput
              text="MONSTA REMAINING RESET"
              readOnly={true}
              value={remainingReset}
            />
            <FormInput
              text="$MONSTA HOLDINGS(QTY)"
              placeholder="Enter amount (check Excel!)"
              value={monstaHoldings}
              onInput={(e) => setMonstaHoldings(e.target.value)}
              onKeyUp={(e) => {
                calculateCircSupplyPercentage();
                calculateCakeSlice();
              }}
            />
            <FormInput
              text="% of CIRC. SUPPLY"
              readOnly={true}
              value={circSupplyPercentage}
            />
            <FormInput text="$CAKE SLICE" readOnly={true} value={cakeSlice} />
          </div>
          <button type="submit" className="btn clearbtn o btn-lg mb-3 ">
            Clear all
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
