import React from "react";
import { Card, Pagination } from "react-rainbow-components";
import styled from "styled-components";
import Tabletop from "tabletop";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";
function getCardImageContainerStyles(src) {
  return {
    width: "-webkit-fill-available",
    height: 160,
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
  };
}

const cardStyles = { width: 240, height: 378 };

const StyledTitle = styled.span.attrs((props) => {
  return props.theme.rainbow.palette;
})`
  color: ${(props) => props.text.title};
`;

class Productlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      data: [],
      isLoading: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
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
  getContent(filterProductByCategory) {
    console.log("filterProductByCategory", filterProductByCategory);
    const { activePage } = this.state;
    const lastItem = activePage * 4;
    const firstItem = lastItem - 4;
    return filterProductByCategory.slice(firstItem, lastItem).map((recoed) => (
      <Link to={"/siemu/productDetails/" + recoed.id}>
        <Card
          key={recoed.productName}
          style={cardStyles}
          className="rainbow-m-bottom_x-large rainbow-m-right_small"
          //     footer={
          //       <StyledTitle className="rainbow-font-size-text_large">
          //         {title}&nbsp;&nbsp;&nbsp;&nbsp;
          //         {titleOne}
          //       </StyledTitle>
          //     }
        >
          <div style={getCardImageContainerStyles(recoed.productImage)} />
          <div
            className="text-center"
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            <h2>{recoed.productName}</h2>&nbsp;
            <h1> {recoed.titalOne}</h1>
            &nbsp;
            <h1>{recoed.titalTwo}</h1>
            &nbsp;
            <h1>{recoed.titalThree}</h1>
            &nbsp;
          </div>
        </Card>
      </Link>
    ));
  }

  handleOnChange(event, page) {
    this.setState({ activePage: page });
  }

  render() {
    const { activePage } = this.state;
    const categoryIdByPath = this.props.location.pathname.split("/")[3];
    console.log("location", categoryIdByPath);
    const filterProductByCategory = this.state.data.filter(
      (list) => list.category === categoryIdByPath
    );
    console.log(
      "filterProductByCategory------",
      filterProductByCategory.length
    );
    const product = this.state.data.length;
    console.log("activePage-------", this.state.data);
    return (
      <div className="bg-image">
        <div className="">
          <h2 className="headings">
            {" "}
            {filterProductByCategory.slice(0, 1).map((record, i) => {
              console.log("record", record);
              return <>{record.CategoryName}</>;
            })}
          </h2>
        </div>
        {this.state.isLoading === true ? (
          <Spinner className="loader" color="primary" />
        ) : (
          <div className="container">
            <div
              className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column"
              style={{ marginTop: "-38px" }}
            >
              <div className="rainbow-flex rainbow-justify_space-around rainbow-flex_wrap">
                {this.getContent(filterProductByCategory)}
              </div>
              <Pagination
                className="rainbow-m_auto"
                pages={Math.round(filterProductByCategory.length / 4)}
                activePage={activePage}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Productlist;
