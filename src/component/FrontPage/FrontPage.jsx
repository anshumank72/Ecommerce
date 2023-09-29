import React, { Component } from "react";
import style from "./FrontPage.module.css";
import Header from "./FronPageComponents/FrontHeader/FrontHeader";
import MainBody from "./FronPageComponents/MainBody/MainBody";

class FrontPage extends Component {
  render() {
    return (
      <>
        <Header />
        <MainBody />
      </>
    );
  }
}
export default FrontPage;
