import React from "react";
import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";
import { Context } from "../../ContextProvider";

const ProductCard = (props) => {
  // console.log(props.match, props.location);
  console.log("props", props);
  return (
    <>
      <Context.Consumer>
        {(value) => {
          let getUrl = props.match.url.slice(1);
          return value[getUrl].map((e, index) => {
            return (
              <Link
                key={index + Date.now()}
                to={`${props.match.url}/${e.id}`}
                style={{ padding: "40px", width: "33.33%" }}
              >
                <div className={style["cardCont"] + " card border-0"}>
                  <div className={style.productImg}>
                    <img src={e.image} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{
                        font: "monospace",
                        fontWeight: "300",
                        fontSize: "13px",
                      }}
                    >
                      ${e.price}
                    </p>
                  </div>
                </div>
              </Link>
            );
          });
        }}
      </Context.Consumer>
    </>
  );
};
export default ProductCard;
