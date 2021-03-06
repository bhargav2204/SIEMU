import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-rainbow-components";
import { Spinner } from "reactstrap";
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
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    Tabletop.init({
      key: "1FdE_rtwPMEuv2_rqkQt-sR4Hzv9UqDw3uz8XB9z-oYw",
      callback: (googleData) => {
        // dispatch(receiveProducts(googleData));
        console.log("googleData", googleData);
        this.setState({ data: googleData });
        this.setState({ isLoading: false });
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
          <h2 className="headings">
            Welcome to the World of <br />{" "}
            <span>
              <img
                src={require("../../Asset/siemu.png")}
                style={{ width: "120px", height: "40px" }}
              />
            </span>
          </h2>
          {/* <img
        src="../../assets/images/1.jpeg"
        alt="rainbow logo"
        className=""
      /> */}
        </div>

        {this.state.isLoading === true ? (
          // <Spinner className="loader" color="primary" />
          <div className="main" />
        ) : (
          <div className="container">
            <div className="row">
              {Category.map((res, i) => {
                console.log("res", res);
                return (
                  <div className=" rainbow-m-bottom_xsmall">
                    <Link to={"/siemu/productlist/" + res.categoryId}>
                      <Card>
                        <img
                          src={res.Picture}
                          className=""
                          style={{ height: "170px", width: "240px" }}
                          alt="No Images"
                        />
                        <h2 style={{ textAlign: "center" }}>
                          {res.categoryName}
                        </h2>
                      </Card>
                      {/* <CarouselCard
                        className="rainbow-m_auto"
                        style={carouselContainerStyles}
                      >
                        <div className="col-md-12 col-xs-12" >
                        <CarouselImage
                          src={res.Picture}
                          
                          header={res.categoryName}
                          alternativeText="First card accessible description."
                        />
                        </div>
                        <div className="col-md-12 col-xs-12" >
                        <CarouselImage
                          src={res.picture1}
                          
                          header={res.categoryName}
                          alternativeText="Second card accessible description."
                        />
                        </div>
                        <div className="col-md-12 col-xs-12" >
                        <CarouselImage
                          src={res.picture2}
                          
                          header={res.categoryName}
                          alternativeText="Third card accessible description."
                        />
                        </div>
                      </CarouselCard> */}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="row" style={{ padding: "0px  0px 0px 0" }} />
          </div>
        )}
      </div>
    );
  }
}
export default Product;
