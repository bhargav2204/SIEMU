import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CarouselImage, CarouselCard } from "react-rainbow-components";
import Tabletop from "tabletop";
const carouselContainerStyles = {
  maxWidth: 280,
  height: 205,
};

class Product extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    Tabletop.init({
      key: "1FdE_rtwPMEuv2_rqkQt-sR4Hzv9UqDw3uz8XB9z-oYw",
      callback: (googleData) => {
        // dispatch(receiveProducts(googleData));
        console.log("googleData", googleData);
        this.setState({ data: googleData });
      },
      simpleSheet: true,
    });
  }
  render() {
    console.log("this.state.data", this.state.data);
    const Category = this.state.data;
    return (
      <div className="bg-image">
        <div className="">
          <h2 className="headings">Welcome to the World of SIEMU</h2>
        </div>
        <div className="container">
          <div className="row" style={{ padding: "30px 0px" }}>
            <div className="col-md-3 col-xs-12">
              {Category.map((res, i) => {
                return (
                  <div className=" rainbow-m-bottom_xsmall" key={i}>
                    <Link to={"/siemu/productlist/" + res.categoryId}>
                      <CarouselCard
                        className="rainbow-m_auto"
                        style={carouselContainerStyles}
                      >
                        <CarouselImage
                          src={res.Picture}
                          style={{
                            width: "-webkit-fill-available",
                            height: " 169px",
                          }}
                          header={res.categoryName}
                          alternativeText="First card accessible description."
                        />
                        <CarouselImage
                          src={res.picture1}
                          style={{
                            width: "-webkit-fill-available",
                            height: " 169px",
                          }}
                          header={res.categoryName}
                          alternativeText="Second card accessible description."
                        />
                        <CarouselImage
                          src={res.picture2}
                          style={{
                            width: "-webkit-fill-available",
                            height: " 169px",
                          }}
                          header={res.categoryName}
                          alternativeText="Third card accessible description."
                        />
                      </CarouselCard>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row" style={{ padding: "0px  0px 30px 0" }} />
        </div>
      </div>
    );
  }
}
export default Product;
