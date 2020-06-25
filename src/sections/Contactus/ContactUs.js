import React, { Component } from "react";
import "../../app/styles.css";
import { Modal } from "react-rainbow-components";
import * as emailjs from "emailjs-com";

emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleOnClose = this.handleOnClose.bind(this);
  }
  handleOnClose() {
    return this.setState({ isOpen: false });
  }
  nameHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  emailHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  messageHandler = (e) => {
    this.setState({ message: e.target.value });
  };
  subitHandler = () => {
    const emailValid = this.state.email.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );
    if (emailValid) {
      const { name, email, message } = this.state;
      const body = {
        name: name,
        email: email,
        message: message,
      };
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        body
      );
      this.setState({ error: "" });
      this.setState({ isOpen: true });
    } else {
      this.setState({ error: "enter valid email address" });
    }
  };
  okayHandler() {
    window.location.reload();
  }
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
                    <h4 className="h4">
                      +91-9952402584 (Ind)&nbsp;
                      <img
                        src={require("../../Asset/wp.png")}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginTop: "-6px",
                        }}
                      />
                    </h4>
                    <h4 className="h4">
                      +966-5500233003 (Intl)&nbsp;
                      <img
                        src={require("../../Asset/wp.png")}
                        style={{ width: "20px", height: "20px" }}
                      />
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="">
                  <div className="round">2</div>
                  <div className="" style={{ paddingTop: "11px" }}>
                    <p className="h3">
                      <b>Whatspp Contact</b>
                    </p>
                    <h4 className="h4">+91-9952402584 (Ind)</h4>
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
                    <input
                      type="text"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.nameHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.emailHandler}
                    />
                    {this.state.error && (
                      <p style={{ color: "red" }}>{this.state.error}</p>
                    )}
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name=""
                      id=""
                      cols="10"
                      rows="5"
                      value={this.state.message}
                      onChange={this.messageHandler}
                      placeholder="Message"
                    />
                  </div>

                  <div
                    className="button"
                    style={{ cursor: "pointer" }}
                    onClick={this.subitHandler}
                  >
                    Send Message
                  </div>
                  <Modal
                    id="modal-1"
                    isOpen={this.state.isOpen}
                    onRequestClose={this.handleOnClose}
                  >
                    <div>
                      <div class="form-logo">
                        <img src={require("../../Asset/full.jpeg")} />
                      </div>
                      <div className="hey">
                        <h1>Siemu India !</h1>
                        <p style={{ fontSize: "30px", fontStyle: "bold" }}>
                          a page or information to provided that your email has
                          been despatched. You are wellcome to connect via
                          whatspp for immediate reply &nbsp;
                          <img
                            src={require("../../Asset/wp.png")}
                            style={{
                              width: "25px",
                              height: "25px",
                            }}
                          />
                        </p>
                      </div>
                      <div className="buttons" onClick={this.okayHandler}>
                        Okay
                      </div>
                    </div>
                  </Modal>
                </div>
                <div />
              </div>
              <div className="col-md-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
