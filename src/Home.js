import React from "react";
import Input from "./Input";
import Output from "./Output";
import Form from "./Form";
import { FcBullish } from "react-icons/fc";
import "./index.css";
import { ReactComponent as ReactLogo } from "../src/img/monster_head.svg";

function Home() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <ReactLogo />
          <h1 className="display-5 my-3 d-flex justify-content-center title">
            Cake Monster - ROI Calculator
          </h1>
        </div>

        <Form />
      </div>
    </>
  );
}

export default Home;
