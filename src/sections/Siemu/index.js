import React from "react";
import { Link } from "react-router-dom";
import { Card, CarouselImage, CarouselCard } from "react-rainbow-components";

const carouselContainerStyles = {
  maxWidth: 280,
  height: 205,
};
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
                {/* <Card>
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
                </Card> */}
                <CarouselCard
                  className="rainbow-m_auto"
                  style={carouselContainerStyles}
                >
                  <CarouselImage
                    src="../../assets/images/product1.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Consumer Product"
                    alternativeText="First card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/cm1.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Consumer Product"
                    alternativeText="Second card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/cm2.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Consumer Product"
                    alternativeText="Third card accessible description."
                  />
                </CarouselCard>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                {/* <Card>
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
                </Card> */}
                <CarouselCard
                  className="rainbow-m_auto"
                  style={carouselContainerStyles}
                >
                  <CarouselImage
                    src="../../assets/images/product2.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Durable Products"
                    alternativeText="First card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/d1.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Durable Products"
                    alternativeText="Second card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/d2.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Durable Products"
                    alternativeText="Third card accessible description."
                  />
                </CarouselCard>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                {/* <Card>
                  <img
                    src="../../assets/images/petro.jpg"
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
                </Card> */}
                <CarouselCard
                  className="rainbow-m_auto"
                  style={carouselContainerStyles}
                >
                  <CarouselImage
                    src="../../assets/images/petro.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Petrluem Product"
                    alternativeText="First card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/p1.jpg"
                    header="Petrluem Product"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    alternativeText="Second card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/product3.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Petrluem Product"
                    alternativeText="Third card accessible description."
                  />
                </CarouselCard>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                {/* <Card>
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
                </Card> */}
                <CarouselCard
                  className="rainbow-m_auto"
                  style={carouselContainerStyles}
                >
                  <CarouselImage
                    src="../../assets/images/product4.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Siemu Transaport"
                    alternativeText="First card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/t1.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Siemu Transaport"
                    alternativeText="Second card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/t2.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Siemu Transaport"
                    alternativeText="Third card accessible description."
                  />
                </CarouselCard>
              </Link>
            </div>
          </div>
        </div>
        <div className="row" style={{ padding: "0px  0px 30px 0" }}>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                {/* <Card>
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
                </Card> */}
                <CarouselCard
                  className="rainbow-m_auto"
                  style={carouselContainerStyles}
                >
                  <CarouselImage
                    src="../../assets/images/product5.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Industrial Product"
                    alternativeText="First card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/i1.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Industrial Product"
                    alternativeText="Second card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/i2.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Industrial Product"
                    alternativeText="Third card accessible description."
                  />
                </CarouselCard>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                {/* <Card>
                  <img
                    src="../../assets/images/hyg.jpg"
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
                </Card> */}
                <CarouselCard
                  className="rainbow-m_auto"
                  style={carouselContainerStyles}
                >
                  <CarouselImage
                    src="../../assets/images/hyg.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Health & Hygine"
                    alternativeText="First card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/h1.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Health & Hygine"
                    alternativeText="Second card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/h2.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Health & Hygine"
                    alternativeText="Third card accessible description."
                  />
                </CarouselCard>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                {/* <Card>
                  <img
                    src="../../assets/images/good.jpg"
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
                </Card> */}
                <CarouselCard
                  className="rainbow-m_auto"
                  style={carouselContainerStyles}
                >
                  <CarouselImage
                    src="../../assets/images/good.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Compliment Goods"
                    alternativeText="First card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/product7.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Compliment Goods"
                    alternativeText="Second card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/good.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Compliment Goods"
                    alternativeText="Third card accessible description."
                  />
                </CarouselCard>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className=" rainbow-m-bottom_xsmall">
              <Link to="/siemu/productlist">
                {/* <Card>
                  <img
                    src="../../assets/images/luxry.jpeg"
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
                </Card> */}
                <CarouselCard
                  className="rainbow-m_auto"
                  style={carouselContainerStyles}
                >
                  <CarouselImage
                    src="../../assets/images/luxry.jpeg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Luxury Goods"
                    alternativeText="First card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/l1.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Luxury Goods"
                    alternativeText="Second card accessible description."
                  />
                  <CarouselImage
                    src="../../assets/images/l2.jpg"
                    style={{
                      width: "-webkit-fill-available",
                      height: " 169px",
                    }}
                    header="Luxury Goods"
                    alternativeText="Third card accessible description."
                  />
                </CarouselCard>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
