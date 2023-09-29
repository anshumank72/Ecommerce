import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";
import style from "./Products.module.css";
import { Context } from "../../ContextProvider";

const Products = (props) => {
  return (
    <Context.Consumer>
      {(value) => {
        return (
          <div className="">
            <Header {...props} />
            <div className={style["ProductMain"] + " row m-0"}>
              <div className="row w-100 flex-column text-center m-0 justify-content-center">
                <h1>Proper iPad Connect Series</h1>
                <p>
                  Mount your iPad to a range of home, office, and travel
                  accessories with a simple twist+click.
                </p>
              </div>

              <div className="w-100 d-flex flex-wrap" style={{ height: "60%" }}>
                <ProductCard {...props} />
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Products;
