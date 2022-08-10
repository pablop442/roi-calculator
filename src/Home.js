import React from "react";
import Input from "./Input";
import Output from "./Output";
import Form from "./Form";
import { FcBullish } from "react-icons/fc";
import "./index.css";

function Home() {
  return (
    <>
      <div className="container mt-3">
        <h1 className="display-3 my-5">
          ROI Calculator <FcBullish />{" "}
        </h1>
        <Form />
      </div>
    </>
  );
}

export default Home;
