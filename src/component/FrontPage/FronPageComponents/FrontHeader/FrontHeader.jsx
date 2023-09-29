import React from "react";
import style from "./FrontHeader.module.css";

const FrontHeader = () => {
  return (
    <div className={style["FrontHeader"] + " position-relative col-12"}>
      <div
        className={
          style["heroCont"] +
          " row flex-column justify-content-center align-items-start position-absolute"
        }
        style={{ left: "5%", top: "50%", transform: "translateY(-50%)" }}
      >
        <h1>Wireless Charger for AirPods</h1>
        <p>Keep your AirPods always within arm's reach, always charged</p>
        <div className="mt-3">
          <button type="button" className="btn btn-info btn-lg">
            Pre-Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontHeader;
