import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import "./index.css";

function Form() {
  //States

  const [circSupplyMonsta, setCircSupplyMonsta] = useState("");
  const [cakeVault, setCakeVault] = useState("");
  const [bnbVault, setBnbVault] = useState("");
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
  const [bnbSlice, setBnbSlice] = useState("");
  const [cakePrice, setCakePrice] = useState("");
  const [bnbPrice, setBnbPrice] = useState("");
  const [cakeUSD, setCakeUSD] = useState("");
  const [bnbUSD, setBnbUSD] = useState("");
  const [totalUSD, setTotalUSD] = useState("");
  const [roi, setRoi] = useState("");
  const [cycleTwo, setCycleTwo] = useState("");

  //Calculation Functions

  const percentageToDecimal = (percentage) => {
    const decimal = percentage / 100;
    return decimal;
  };

  const clearAll = () => {
    setCircSupplyMonsta("");
    setCakeVault("");
    setBnbVault("");
    setInvestment("");
    setMonstaPrice("");
    setMonstaPercentage("");
    setRemainingDays("");
    setAverageAPY("");
    setBMonstaHoldings("");
    setMonstaHoldings("");
    setCakePrice("");
    setBnbPrice("");
  };

  //useEffect updates states each time re renders
  useEffect(() => {
    const calculatePurchased = () => {
      const percentage = 0.95;
      const res = ((investment / monstaPrice) * percentage).toFixed(2);
      return res;
    };

    const calculateMonstaBQuantity = () => {
      const res = percentageToDecimal(monstaPercentage) * monstaPurchased;
      return res;
    };
    const calculateMonstaQuantity = () => {
      const res = Math.floor(
        (1 - percentageToDecimal(monstaPercentage)) * monstaPurchased
      );
      return res;
    };

    const calculateRemainingReset = () => {
      const res = Math.floor(remainingDays / 50);
      return res;
    };

    const calculateCircSupplyPercentage = () => {
      const res = (
        ((+bMonstaHoldings + +monstaHoldings) / circSupplyMonsta) *
        100
      ).toFixed(3);

      return res;
    };

    const calculateCakeSlice = () => {
      const res = (
        percentageToDecimal(circSupplyPercentage) * cakeVault
      ).toFixed(2);
      return res;
    };

    const calculateBnbSlice = () => {
      const res = (
        percentageToDecimal(circSupplyPercentage) * bnbVault
      ).toFixed(2);
      return res;
    };

    const calculateCakeUSD = () => {
      const res = cakePrice * cakeSlice;
      return res;
    };

    const calculateBnbUSD = () => {
      const res = bnbPrice * bnbSlice;
      return res;
    };

    const calculateTotalUSD = () => {
      const res = cakeUSD + bnbUSD;
      return res;
    };

    const calculateRoi = () => {
      const res = (((totalUSD - investment) / investment) * 100).toFixed(2);

      return res;
    };

    const calculateCycleTwo = () => {
      const res = (
        percentageToDecimal(circSupplyPercentage) * 10000000000
      ).toFixed(2);
      return res;
    };
    setMonstaPurchased(calculatePurchased());
    setMonstaB(calculateMonstaBQuantity());
    setMonsta(calculateMonstaQuantity());
    setRemainingReset(calculateRemainingReset());
    setCircSupplyPercentage(calculateCircSupplyPercentage);
    setCakeSlice(calculateCakeSlice());
    setBnbSlice(calculateBnbSlice());
    setCakeUSD(calculateCakeUSD());
    setBnbUSD(calculateBnbUSD());
    setTotalUSD(calculateTotalUSD());
    setRoi(calculateRoi());
    setCycleTwo(calculateCycleTwo());
  }, [
    circSupplyMonsta,
    cakeVault,
    bnbVault,
    investment,
    monstaPrice,
    monstaPurchased,
    monstaPercentage,
    monstaB,
    monsta,
    remainingDays,
    averageAPY,
    bMonstaHoldings,
    remainingReset,
    monstaHoldings,
    circSupplyPercentage,
    cakeSlice,
    cakePrice,
    bnbPrice,
    bnbSlice,
    cakeUSD,
    bnbUSD,
    totalUSD,
    roi,
    cycleTwo,
  ]);

  return (
    <>
      <div className="col-12 text-center">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-12 col-sm-6">
              <FormInput
                text="CIRC.SUPPLY $MONSTA"
                placeholder="Enter amount"
                title="End cycle prediction"
                value={circSupplyMonsta}
                onChange={(e) =>
                  setCircSupplyMonsta(parseFloat(e.target.value))
                }
              />
              <FormInput
                text="$CAKE VAULT"
                placeholder="Enter amount"
                title="End cycle prediction"
                value={cakeVault}
                onChange={(e) => setCakeVault(parseFloat(e.target.value))}
              />
              <FormInput
                text="$BNB VAULT"
                placeholder="Enter amount"
                title="End cycle prediction"
                value={bnbVault}
                onChange={(e) => setBnbVault(parseFloat(e.target.value))}
              />
              <FormInput
                text="INVESTMENT (USD)"
                placeholder="Enter amount"
                value={investment}
                onChange={(e) => setInvestment(parseFloat(e.target.value))}
              />
              <FormInput
                text="$MONSTA PRICE"
                placeholder="Enter amount"
                title="Current price"
                value={monstaPrice}
                onChange={(e) => setMonstaPrice(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-12 col-sm-6">
              <FormInput
                text="$MONSTA PURCHASED"
                readOnly={true}
                title="Including 5% tax"
                value={monstaPurchased}
              />
              <FormInput text="$MONSTA" readOnly={true} value={monsta} />
              <FormInput text="$BMONSTA" readOnly={true} value={monstaB} />
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-12 col-sm-6">
              <FormInput
                text="$BMONSTA (%)"
                placeholder="Enter percentage"
                title="Input baked Monsta percentage"
                value={monstaPercentage}
                onChange={(e) =>
                  setMonstaPercentage(parseFloat(e.target.value))
                }
              />
              <FormInput
                text="REMAINING DAYS CYCLE 1"
                placeholder="Enter days"
                value={remainingDays}
                onChange={(e) => setRemainingDays(parseFloat(e.target.value))}
              />
              <FormInput
                text="BMONSTA AVERAGE APY (%)"
                value={averageAPY}
                placeholder="Enter percentage"
                title="Daily compound"
                onChange={(e) => setAverageAPY(parseFloat(e.target.value))}
              />
              <FormInput
                text="$BMONSTA HOLDINGS(QTY)"
                placeholder="Enter amount (check Excel!)"
                title="BMONSTA end of cycle prediction"
                value={bMonstaHoldings}
                onChange={(e) => setBMonstaHoldings(parseFloat(e.target.value))}
              />
              <FormInput
                text="$MONSTA HOLDINGS(QTY)"
                placeholder="Enter amount (check Excel!)"
                title="MONSTA end of cycle incl. cost of reset"
                value={monstaHoldings}
                onChange={(e) => setMonstaHoldings(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-12 col-sm-6">
              <FormInput
                text="MONSTA REMAINING RESET"
                readOnly={true}
                value={remainingReset}
              />

              <FormInput
                text="% of CIRC. SUPPLY"
                title="MONSTA + BMONSTA"
                readOnly={true}
                value={circSupplyPercentage}
              />
              <FormInput text="$CAKE SLICE" readOnly={true} value={cakeSlice} />
              <FormInput text="$BNB SLICE" readOnly={true} value={bnbSlice} />
            </div>
          </div>

          <div className="row mt-4 d-flex justify-content-center">
            <h2 className="title">Return On Investment</h2>
            <div className="col-12 col-sm-4">
              <FormInput
                text="$CAKE"
                placeholder="Price"
                value={cakePrice}
                onChange={(e) => setCakePrice(parseFloat(e.target.value))}
              />
              <FormInput
                text="$BNB"
                placeholder="Price"
                value={bnbPrice}
                onChange={(e) => setBnbPrice(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-12 col-sm-4">
              <FormInput text="USD" readOnly={true} value={cakeUSD} />
              <FormInput text="USD" readOnly={true} value={bnbUSD} />
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-12 col-sm-3">
                <FormInput text="Total $" readOnly={true} value={totalUSD} />
              </div>
              <div className="col-12 col-sm-3">
                <FormInput text="ROI (%)" readOnly={true} value={roi} />
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-12 col-sm-6">
                <FormInput
                  text="$MONSTA QTY CYCLE 2 REMINT"
                  title="Assumes circ supply = total supply at cycle end"
                  readOnly={true}
                  value={cycleTwo}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn clearbtn btn-lg m-3 "
            onClick={clearAll}
          >
            Clear all
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
