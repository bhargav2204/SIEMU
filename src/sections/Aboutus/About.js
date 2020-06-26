import React, { Component } from "react";
import "../../app/styles.css";
export default class About extends Component {
  render() {
    return (
      <div className="row" style={{ padding: "70px" }}>
        <div className="col-md-6 col-sm-12">
          <img src={require("../../Asset/ab.jpg")} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1 className="h1">Get to know us better.</h1>
          <div className="line" />
          <p className="p" style={{ padding: "5px 0px" }}>
            We are Siemu India providing best quality of products in all
            categories. Right now we're having all goods products.
          </p>
          <li>Best Qaulity</li>
          <li>Best Range</li>
          <li>More Products</li>
        </div>
      </div>
    );
  }
}
