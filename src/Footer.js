import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./index.css";

function Footer() {
  let iconStyles = { color: "#5d9bf0", fontSize: "1.5em" };
  return (
    <>
      <footer className="mt-5 pt-3 text-white text-center position-relative border-top border-white">
        <div className="container">
          <p className="">
            Copyright &copy; 2022 Pablo Peña <br></br>
            <a
              href="https://www.pablodeveloper.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              pablodeveloper.me
            </a>{" "}
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/pablo-pe%C3%B1a-mar%C3%ADn-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
              style={iconStyles}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/pablop442"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
              style={iconStyles}
            >
              <FaGithub />
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
