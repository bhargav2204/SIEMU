import React from "react";
import PropTypes from "prop-types";

import ButtonIcon from "react-rainbow-components/components/ButtonIcon";

import { BarsIcon } from "../icons";

import "./styles.css";
import { Link } from "react-router-dom";

export default function SectionHeading({ onToogleSidebar }) {
  return (
    <header
      className="react-rainbow-admin_header rainbow-position_fixed rainbow-flex rainbow-align_center rainbow-p-horizontal_large rainbow-background-color_white"
      style={{ background: "rgb(2, 65, 142)", height: "50px" }}
    >
      <img
        src={require("../../Asset/headerlogo.jpeg")}
        alt="rainbow logo"
        className="react-rainbow-admin_header-logo"
      />

      <div className="heading">{/* SIEMU */}</div>

      <section className="rainbow-flex rainbow-align_center react-rainbow-admin_header-actions" />

      <ButtonIcon
        onClick={onToogleSidebar}
        className="react-rainbow-admin_header-hamburger-button"
        size="large"
        icon={<BarsIcon />}
      />
    </header>
  );
}

SectionHeading.propTypes = {
  onToogleSidebar: PropTypes.func,
};

SectionHeading.defaultProps = {
  onToogleSidebar: () => {},
};
