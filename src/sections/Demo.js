import React from "react";
import { Card, Pagination } from "react-rainbow-components";
import styled from "styled-components";
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

class PaginationExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.content = [
      {
        title: "Starwberry Facewash",
        titleOne: "Facial care product that is used to remove make-up",
        titleTwo:
          "dead skin cells, oil, dirt, and other types of pollutants from the skin of the face",
        titleThree:
          "This helps to unclog pores and prevent skin conditions such as acne.",
        src: "../../assets/ConsumerProduct/c1.jpg",
      },
      {
        title: "Razor Blade",
        src: "../../assets/ConsumerProduct/Bled.png",
        titleOne: "Material : Platinum Edge Double Razor Blade",
        titleTwo: "Print Logo : Yes/ Custom Prints",
        titleThree: "Package Type : 5 blades /box,20 boxes/pack ",
      },
      {
        title: "Aluminum Foil Container",
        titleOne: "Size : Multiple (350ml ,370ml ,1500ml .. more)",
        titleTwo: "Print Logo : Custome Prints in Paper",
        titleThree: "Package Type: 100 /box with lid: 20 box/carton",
        src: "../../assets/ConsumerProduct/cup.png",
      },
      {
        title: "Johara Nail Color",
        titleOne: "Facial care product that is used to remove make-up",
        titleTwo:
          "dead skin cells, oil, dirt, and other types of pollutants from the skin of the face",
        titleThree:
          "This helps to unclog pores and prevent skin conditions such as acne.",
        src: "../../assets/ConsumerProduct/c4.jpg",
      },
      {
        title: "Harry's Shave & Gel",
        src: "../../assets/ConsumerProduct/c5.jpg",
      },
      {
        title: "Brand Premimu",
        src: "../../assets/ConsumerProduct/c6.jpg",
      },
      {
        title: "Icon India Oil",
        src: "../../assets/ConsumerProduct/c7.jpg",
      },
      {
        title: "Nail Polish Remover",
        src: "../../assets/ConsumerProduct/c8.jpg",
      },
    ];
  }

  getContent() {
    const { activePage } = this.state;
    const lastItem = activePage * 4;
    const firstItem = lastItem - 4;
    return this.content
      .slice(firstItem, lastItem)
      .map(({ title, src, titleOne, titleTwo, titleThree }) => (
        <Link to="/siemu/productlist">
          <Card
            key={title}
            style={cardStyles}
            className="rainbow-m-bottom_x-large rainbow-m-right_small"
            //     footer={
            //       <StyledTitle className="rainbow-font-size-text_large">
            //         {title}&nbsp;&nbsp;&nbsp;&nbsp;
            //         {titleOne}
            //       </StyledTitle>
            //     }
          >
            <div style={getCardImageContainerStyles(src)} />
            <div
              className="text-center"
              style={{
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <h2>{title}</h2>&nbsp;
              <h1>
                <b>Material :</b> {titleOne}
              </h1>
              &nbsp;
              <h1>{titleTwo}</h1>
              &nbsp;
              <h1>
                <b>Package Type:</b>
                {titleThree}
              </h1>
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
    console.log("activePage", activePage);
    return (
      <div className="bg-image">
        <div className="">
          <h2 className="headings">Consumer Product</h2>
        </div>
        <div className="container">
          <div
            className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column"
            style={{ marginTop: "-38px" }}
          >
            <div className="rainbow-flex rainbow-justify_space-around rainbow-flex_wrap">
              {this.getContent()}
            </div>
            <Pagination
              className="rainbow-m_auto"
              pages={this.content.length / 4}
              activePage={activePage}
              onChange={this.handleOnChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PaginationExample;
