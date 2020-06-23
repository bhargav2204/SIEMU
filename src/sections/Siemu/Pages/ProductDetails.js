import React, { Component } from "react";
import "../../../app/styles.css";
import Tabletop from "tabletop";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ErrImg from "../../../Asset/logo.jpeg";
import { Spinner } from "reactstrap";
const carouselContainerStyles = {
  maxWidth: 1200,
  height: 560,
  padding: 20,
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    Tabletop.init({
      key: "14jYh5iLTCKas-oJkuwAavQ2w0-PB0xc8duvbAwl4umY",
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
    const ProductDetails = this.state.data;
    let Loading = this.props.Loading;
    const categoryIdByPath = this.props.location.pathname.split("/")[3];
    console.log("categoryIdByPath", categoryIdByPath);
    const filterProductByCategory = ProductDetails.filter(
      (list) => list.id === categoryIdByPath
    );
    console.log("ProductDetails--------", filterProductByCategory);
    return (
      <div className="bg-image ">
        {this.state.isLoading === true ? (
         <div className="main"></div>
        ) : (
          <div className=" " style={{ padding: "22px" }}>
            <div className="card" style={{ padding: "30px" }}>
              <div className="closeButton">*</div>
              {filterProductByCategory.map((record) => {
                return (
                  <div className="row  ">
                    <div className="col-md-6">
                      <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                      >
                        <div>
                          <img
                            src={
                              record.pictures.length ? record.pictures : ErrImg
                            }
                            alt=""
                            style={{ height: "450px", width: "570px" }}
                          />
                        </div>
                        <div>
                          <img
                            src={
                              record.pictureone.length
                                ? record.pictureone
                                : ErrImg
                            }
                            alt=""
                            style={{ height: "450px", width: "570px" }}
                          />
                        </div>
                        <div>
                          <img
                            src={
                              record.picturetwo.length
                                ? record.picturetwo
                                : ErrImg
                            }
                            alt=""
                            style={{ height: "450px", width: "570px" }}
                          />
                        </div>
                        <div>
                          <img
                            src={
                              record.picturethree.length
                                ? record.picturethree
                                : ErrImg
                            }
                            alt=""
                            style={{ height: "450px", width: "570px" }}
                          />
                        </div>
                        {/* <div>
                        <img
                          src="../../assets/ConsumerProduct/c2.jpg"
                          alt=""
                          style={{ height: "450px", width: "570px" }}
                        />
                      </div>
                      <div>
                        <img
                          src="../../assets/ConsumerProduct/c1.jpg"
                          alt=""
                          style={{ height: "450px", width: "570px" }}
                        />
                      </div> */}
                      </Carousel>
                    </div>
                    <div className="col-md-6 ">
                      <div className="">
                        <h1 style={{ fontSize: "25px" }}>
                          <b style={{ borderBottom: "1px solid #000" }}>
                            {record.productName}
                          </b>
                        </h1>
                        <li style={{ padding: "5px 0" }}>
                          {record.description}
                        </li>
                        {/* <li>
                        dead skin cells, oil, dirt, and other types of
                        pollutants from the skin of the face
                      </li>
                      <li style={{ padding: "5px 0" }}>
                        This helps to unclog pores and prevent skin conditions
                        such as acne.
                      </li> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
