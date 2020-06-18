import React, { Component } from "react";
import "../../app/styles.css";
export default class ContactUs extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{ padding: "70px 15px" }}>
          <div className="col-md-12">
            <h1 className="h1" style={{ textAlign: "center" }}>
              Get In Touch With Us
            </h1>
            <p className="p" style={{ textAlign: "center" }}>
              You can connect us using any communication cannel.
            </p>
            <div className="row" style={{ padding: "40px 0" }}>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="">
                  <div className="round">1</div>
                  <div className="" style={{ paddingTop: "11px" }}>
                    <p className="h3">
                      <b>Contact Us</b>
                    </p>
                    <h4 className="h4">+91-9952402584 (Ind)</h4>
                    <h4 className="h4">+966-5500233003 (Intl)</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="">
                  <div className="round">2</div>
                  <div className="" style={{ paddingTop: "11px" }}>
                    <p className="h3">
                      <b>Location</b>
                    </p>
                    <h4 className="h4">www.siemultd.com</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="">
                  <div className="round">3</div>
                  <div className="" style={{ paddingTop: "11px" }}>
                    <p className="h3">
                      <b>Email Contact</b>
                    </p>
                    <h4 className="h4">SPONNUSAMY3@SIEMULTD.COM</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8">
                <div className="">
                  <h1 className="h1">Send Us Message</h1>
                  <p className="p">Please Write Your Review and Questions</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name=""
                      id=""
                      cols="10"
                      rows="5"
                      placeholder="Message"
                    />
                  </div>
                  <div className="button" style={{ cursor: "pointer" }}>
                    Send Message
                  </div>
                </div>
              </div>
              <div className="col-md-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
