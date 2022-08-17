import React, { useState } from "react";
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
  function calculatePurchased() {
    const percentage = 0.95;
    setMonstaPurchased((investment / monstaPrice) * percentage);
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

  const calculateBnbSlice = () => {
    setBnbSlice(
      (percentageToDecimal(circSupplyPercentage) * bnbVault).toFixed(3)
    );
    return bnbSlice;
  };

  const calculateCakeUSD = () => {
    setCakeUSD(cakePrice * cakeSlice);
    return cakeUSD;
  };

  const calculateBnbUSD = () => {
    setBnbUSD(bnbPrice * bnbSlice);
    return bnbUSD;
  };

  const calculateTotalUSD = () => {
    setTotalUSD(cakeUSD + bnbUSD);
    return totalUSD;
  };

  const calculateRoi = () => {
    setRoi((((totalUSD - investment) / investment) * 100).toFixed(2));

    return roi;
  };

  const calculateCycleTwo = () => {
    setCycleTwo(
      (percentageToDecimal(circSupplyPercentage) * 10000000000).toFixed(2)
    );
    return cycleTwo;
  };

  return (
    <>
      <div className="col-12 text-center">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-6">
              <FormInput
                text="CIRC.SUPPLY $MONSTA"
                placeholder="Enter amount"
                value={circSupplyMonsta}
                onInput={(e) => setCircSupplyMonsta(e.target.value)}
                onKeyUp={(e) => {
                  calculateCircSupplyPercentage();
                  calculateCakeSlice();
                  calculateCycleTwo();
                  // calculateTotalUSD();
                }}
              />
              <FormInput
                text="$CAKE VAULT"
                placeholder="Enter amount"
                value={cakeVault}
                onInput={(e) => setCakeVault(e.target.value)}
                onKeyUp={(e) => {
                  calculateCakeSlice();
                  // calculateTotalUSD();
                }}
              />
              <FormInput
                text="$BNB VAULT"
                placeholder="Enter amount"
                value={bnbVault}
                onInput={(e) => setBnbVault(e.target.value)}
                onKeyUp={(e) => {
                  calculateBnbSlice();
                  // calculateTotalUSD();
                }}
              />
              <FormInput
                text="INVESTMENT (USD)"
                placeholder="Enter amount"
                value={investment}
                onKeyUp={(e) => {
                  calculatePurchased();
                  // calculateTotalUSD();
                }}
                onInput={(e) => setInvestment(e.target.value)}
              />
              <FormInput
                text="$MONSTA PRICE"
                placeholder="Enter amount"
                value={monstaPrice}
                onKeyUp={(e) => {
                  calculatePurchased();
                  // calculateTotalUSD();
                }}
                onInput={(e) => setMonstaPrice(e.target.value)}
              />
            </div>
            <div className="col-6">
              <FormInput
                text="$MONSTA PURCHASED"
                readOnly={true}
                value={monstaPurchased}
              />
              <FormInput text="$MONSTA" readOnly={true} value={monsta} />
              <FormInput text="$BMONSTA" readOnly={true} value={monstaB} />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <FormInput
                text="$MONSTA (%)"
                placeholder="Enter percentage"
                value={monstaPercentage}
                onKeyUp={(e) => {
                  calculateMonstaBQuantity();
                  calculateMonstaQuantity();
                }}
                onInput={(e) => setMonstaPercentage(e.target.value)}
              />
              <FormInput
                text="REMAINING DAYS CYCLE 1"
                placeholder="Enter days"
                value={remainingDays}
                onKeyUp={calculateRemainingReset}
                onInput={(e) => setRemainingDays(e.target.value)}
              />
              <FormInput
                text="BMONSTA AVERAGE APY (%)"
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
                  calculateBnbSlice();
                  // calculateRoi();
                  calculateCycleTwo();
                  // calculateTotalUSD();
                }}
              />
              <FormInput
                text="$MONSTA HOLDINGS(QTY)"
                placeholder="Enter amount (check Excel!)"
                value={monstaHoldings}
                onInput={(e) => setMonstaHoldings(e.target.value)}
                onKeyUp={(e) => {
                  calculateCircSupplyPercentage();
                  calculateCakeSlice();
                  calculateBnbSlice();
                  // calculateRoi();
                  calculateCycleTwo();
                  // calculateTotalUSD();
                }}
              />
            </div>
            <div className="col-6">
              <FormInput
                text="MONSTA REMAINING RESET"
                readOnly={true}
                value={remainingReset}
              />

              <FormInput
                text="% of CIRC. SUPPLY"
                readOnly={true}
                value={circSupplyPercentage}
              />
              <FormInput text="$CAKE SLICE" readOnly={true} value={cakeSlice} />
              <FormInput text="$BNB SLICE" readOnly={true} value={bnbSlice} />
            </div>
          </div>

          <div className="row mt-3 d-flex justify-content-center">
            <h2 className="title">Return On Investment</h2>
            <div className="col-4">
              <FormInput
                text="$CAKE"
                placeholder="Price"
                value={cakePrice}
                onInput={(e) => setCakePrice(e.target.value)}
                onKeyUp={(e) => {
                  calculateCakeUSD();
                  calculateTotalUSD();
                  calculateRoi();
                  console.log(cakeUSD);
                  console.log(cakePrice);
                }}
              />
              <FormInput
                text="$BNB"
                placeholder="Price"
                value={bnbPrice}
                onInput={(e) => setBnbPrice(e.target.value)}
                onKeyUp={(e) => {
                  calculateBnbUSD();
                  calculateTotalUSD();
                  calculateRoi();
                  // console.log(bnbPrice);
                  console.log(bnbUSD);
                  // console.log(bnbSlice);
                }}
              />
            </div>
            <div className="col-4">
              <FormInput text="USD" readOnly={true} value={cakeUSD} />
              <FormInput text="USD" readOnly={true} value={bnbUSD} />
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-3">
                <FormInput text="Total $" readOnly={true} value={totalUSD} />
              </div>
              <div className="col-3">
                <FormInput text="ROI (%)" readOnly={true} value={roi} />
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-6">
                <FormInput
                  text="$MONSTA QTY CYCLE 2 REMINT"
                  readOnly={true}
                  value={cycleTwo}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn clearbtn btn-lg m-3 ">
            Clear all
          </button>
          <button
            type="submit"
            className="btn actionbtn btn-lg m-3"
            onClick={(e) => {
              calculateRoi();
              console.log(totalUSD);
              console.log(cakeUSD);
              console.log(bnbUSD);
            }}
          >
            Calculate ROI
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
