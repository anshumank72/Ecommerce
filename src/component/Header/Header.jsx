import React from "react";
import style from "./Header.module.css";

import { Context } from "../../ContextProvider";

const Header = (props) => {
  // console.log(props);

  return (
    <Context.Consumer>
      {(value) => {
        let getUrl = props.match.url.slice(1) === "ipad" ? 0 : 1;
        return (
          <div
            className={style["Header"] + " position-relative col-12"}
            style={{ backgroundImage: `url("${value.Header[getUrl].image}")` }}
          >
            <div
              className={
                style["productCont"] +
                " row flex-column justify-content-center align-items-start position-absolute"
              }
              style={{ left: "5%", top: "50%", transform: "translateY(-50%)" }}
            >
              <h1>{value.Header[getUrl].heading}</h1>
              <p>{value.Header[getUrl].des}</p>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Header;
