import React from "react";
import Form from "./Form";
// import monstaLetters from "../src/img/MonstaLetters.jpeg";

import "./index.css";
import { ReactComponent as ReactLogo } from "../src/img/Monster_Icon (3).svg";

function Home() {
  return (
    <>
      <div className="container mt-3">
        <div className="row d-flex justify-content-center">
          <div className="col-4 d-flex justify-content-center">
            <ReactLogo />
          </div>

          <h1 className="display-5 my-3 d-flex justify-content-center title text-center">
            Cake Monster - ROI Calculator
          </h1>
        </div>
        <Form />
      </div>
    </>
  );
}

export default Home;
