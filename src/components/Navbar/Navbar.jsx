import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState("true");
  const [drop, setDrop] = useState("false");
  const changeClick = () => {
    setClick(!click);
  };
  const enabled = () => {
    setDrop(!drop);
  };
  return (
    <>
      <div className="menu-icon mobileView " onClick={changeClick}>
        <i className={click ? "fa-solid fa-bars " : "fa-solid fa-xmark"} />
      </div>
      <ul className="Navbar-container">
        <li className="smartCash">
          <Link to="#">
            Smart Cash
            <span className="yellow-dot"></span>
          </Link>
        </li>
        <li className="Investments">
          <Link to="#">Investments</Link>

          <div className="dropdown-content">
            <div className="Index-Investing">
              <p>Index Investing</p>
              <p>Stock & Bonds</p>
            </div>
            <div className="ManagedStocks">
              <img src="" alt="" />
              <p>Managed Stocks</p>
              <p>Actively Managed stocks </p>
            </div>
            <div className="Alternatives">
              <img src="" alt="" />
              <p>Alternatives</p>
              <p>VC & Crypto</p>
            </div>
            <div className="A-lart">
              <img src="" alt="" />
              <p>A La Carte</p>
              <p>Browse All offerings</p>
            </div>
          </div>
        </li>
        <li>
          <Link to="/" className="Logo">
            Titan.
          </Link>
        </li>
        <li className="meetTitan">
          <Link to="#">Meet Titan</Link>
        </li>
        <li className="resource">
          <Link to="#">resources</Link>
        </li>
        <li>
          <Link to="/signin" className="Login">
            Login
          </Link>
        </li>
        <li>
          <Link to="#">
            <button className="SignUp">Get Started</button>
          </Link>
        </li>
      </ul>
      <ul className={click ? "mobileViewDisabled" : "mobileViewActive"}>
        <div className="smartCash">
          <Link to="#">Smart Cash</Link>
        </div>
        <div onClick={enabled} className="investments">
          <Link to="#">
            Investments
            <div className="arrow-down">
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div className={drop ? "arrow-dropdown-enabled" : "arrow-dropdown"}>
              <p>Index Investing</p>
              <p>Managed Stocks</p>
              <p>Alternatives</p>
              <p>A La Carte</p>
            </div>
          </Link>
        </div>
        <div className="meetTitan">
          <Link to="#">
            Meet Titan
            <div className="arrow-down">
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </Link>
        </div>
        <div className="resource">
          <Link to="#">
            resources
            <div className="arrow-down">
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#" className="Login">
            Login
          </Link>
        </div>
        <div>
          <Link to="#">
            <button className="SignUp">Get Started</button>
          </Link>
        </div>
      </ul>
    </>
  );
}

export default Navbar;
