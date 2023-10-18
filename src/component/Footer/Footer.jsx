import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style["footer"] + " flex-column m-0"}>
      <div className="row col-12 m-0 justify-content-center align-items-center h-25 mb-5">
        <Link to="/pages/iPhone" className={style.footerLink}>
          <h1>Shop all iPhone Magnetic Cases & Mounts →</h1>
        </Link>
      </div>
      <div
        className={
          style["footerBottom"] +
          " w-100 d-flex justify-content-center align-items-center"
        }
      >
        <div className={`${style.footerImage}`}>
          <img src="/logo192.png" alt="" />
        </div>
        <div
          className={
            style["linkCont"] +
            " d-flex align-items-center justify-content-center"
          }
        >
          <div className={style.indLinkCont}>
            <h5>Shop</h5>
            <ul>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Business</li>
            </ul>
          </div>
          <div className={style.indLinkCont}>
            <h5>Shop</h5>
            <ul>
              <li>About Us</li>
              <li>Help</li>
              <li>Business</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>
          <div className={style.indLinkCont}>
            <h5>About Studio</h5>
            <ul>
              <li>Studio Proper is a Melbourne</li>
              <li> based product design studio</li>
              <li> dedicated to simplifying everyday</li>
              <li> experiences with technology.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
