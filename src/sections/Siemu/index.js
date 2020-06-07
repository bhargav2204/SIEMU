import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-rainbow-components";
export default function index() {
  return (
    <div className="bg-image">
      <div className="">
        <h2 className="headings">Welcome to the World of SIEMU</h2>
      </div>
      <div className="container">
        <div className="row" style={{ padding: "30px 0px" }}>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                <Card>
                  <img
                    src="../../assets/images/product1.jpg"
                    className=""
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    alt="landscape with rainbows, birds and colorful balloons"
                  />
                  <div
                    className="text-center"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <h2>Consumer Product</h2>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                <Card>
                  <img
                    src="../../assets/images/product2.jpg"
                    className=""
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    alt="landscape with rainbows, birds and colorful balloons"
                  />
                  <div
                    className="text-center"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <h2>Durable Products</h2>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                <Card>
                  <img
                    src="../../assets/images/product3.jpg"
                    className=""
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    alt="landscape with rainbows, birds and colorful balloons"
                  />
                  <div
                    className="text-center"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <h2>Petrluem Product</h2>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                <Card>
                  <img
                    src="../../assets/images/product4.jpg"
                    className=""
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    alt="landscape with rainbows, birds and colorful balloons"
                  />
                  <div
                    className="text-center"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <h2>Siemu Transaport</h2>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
        <div className="row" style={{ padding: "0px  0px 30px 0" }}>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                <Card>
                  <img
                    src="../../assets/images/product5.jpg"
                    className=""
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    alt="landscape with rainbows, birds and colorful balloons"
                  />
                  <div
                    className="text-center"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <h2>Industrial Product</h2>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                <Card>
                  <img
                    src="../../assets/images/product6.jpg"
                    className=""
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    alt="landscape with rainbows, birds and colorful balloons"
                  />
                  <div
                    className="text-center"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <h2>Health & Hygine</h2>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                <Card>
                  <img
                    src="../../assets/images/product7.jpg"
                    className=""
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    alt="landscape with rainbows, birds and colorful balloons"
                  />
                  <div
                    className="text-center"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <h2>Compliment Goods</h2>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                <Card>
                  <img
                    src="../../assets/images/product8.jpg"
                    className=""
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    alt="landscape with rainbows, birds and colorful balloons"
                  />
                  <div
                    className="text-center"
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <h2>Luxury Goods</h2>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
