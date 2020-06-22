import React, { Component } from "react";
import "./style.css";
import "./animate.css";
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
        <section className="back2">
          <div className="container">
            <div className="smart-flex">
              <div className="smart-img">
                <img src={require("../../Asset/vessel_2.png")} />
              </div>
              <div className="smart-text">
                <div className="fea">
                  <h1> Features </h1>
                </div>
                <div className="main-custom">
                  <div className="custom-icon" />
                  <div className="custom-text">
                    <h1> Smart schedules</h1>
                    <p>
                      {" "}
                      Continuosly monitoring shipping and fight schedules with{" "}
                      <br /> intellingent delay delection
                    </p>
                  </div>
                </div>
                <div className="main-custom">
                  <div className="custom-icon" />
                  <div className="custom-text">
                    <h1> Custom intergrations </h1>
                    <p>
                      {" "}
                      Support your platform through REST API intergrations on a{" "}
                      <br />
                      map
                    </p>
                  </div>
                </div>
                <div className="main-custom">
                  <div className="custom-icon" />
                  <div className="custom-text">
                    <h1> Querying Overview </h1>
                    <p>
                      save and querying shipment and get a overview of your{" "}
                      <br /> goods,ships and flights
                    </p>
                  </div>
                </div>
                <div className="main-custom">
                  <div className="custom-icon" />
                  <div className="custom-text">
                    <h1> Location on a map</h1>
                    <p>
                      {" "}
                      view shipments,their movements as well as thier locations{" "}
                      <br /> on a map{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
