import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Asset/logo.svg";

import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  const [toogle, settoogle] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#agpt3 ">About GPT3</a>
          </p>
          <p>
            <a href="#possibility"> Open AI</a>
          </p>
          <p>
            <a href="#features"> Case Studies</a>
          </p>
          <p>
            <a href="#blog"> Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button"> Sign UP</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toogle ? (
          <RiCloseLine
            color="#ffff"
            size={27}
            onClick={() => settoogle(false)}
          />
        ) : (
          <RiMenu3Line
            color="#ffff"
            size={27}
            onClick={() => settoogle(true)}
          />
        )}

        {toogle && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_conatiner-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#agpt3 ">About GPT3</a>
              </p>
              <p>
                <a href="#possibility"> Open AI</a>
              </p>
              <p>
                <a href="#features"> Case Studies</a>
              </p>
              <p>
                <a href="#blog"> Library</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_conatiner-links-sign">
              <p>Sign IN</p>
              <button type="button">Sign UP</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
