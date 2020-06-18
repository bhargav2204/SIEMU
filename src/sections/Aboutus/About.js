import React, { Component } from "react";
import "../../app/styles.css";
export default class About extends Component {
  render() {
    return (
      <div className="row" style={{ padding: "70px" }}>
        <div className="col-md-6 col-sm-12">
          <img src={require("../../Asset/logo.jpeg")} alt="" />
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

        {/* <div className="col-md-12 text-center">
          <h1 className="h1">OUR BUSINESS</h1>
          <h2 className="h2">Henna Powder Suppliers & Exporters in India</h2>
          <div className="line" />
          <p className="p" style={{ padding: "5px 7px" }}>
            Mr. Suraj Mal Parihar started our business in 1980 as a Mehandi
            Powder Udyog at Sojat City, the only wholesale market of henna in
            India.
          </p>
          <p className="p">
            The CEO of the company joined him with the foundation of Natural
            Mahendi Powder Udyog in 2012. He is highly qualified and expert in
            manufacturing best quality henna products. He has invented some new
            henna colors and herbal mixers with his expertise.
          </p>
          <p className="p" style={{ padding: "5px 7px" }}>
            He has been handling Manufacturing Department and Management of our
            organization very effectively. Mr. Kishore Parihar (Six Sigma Black
            Belt Certified) is assisting him as Deputy Manager and handling
            Marketing Department successfully. Natural Mahendi Powder Udyog is
            known for its teamwork and transparency in the organization.
          </p>
        </div>
       */}
      </div>
    );
  }
}
