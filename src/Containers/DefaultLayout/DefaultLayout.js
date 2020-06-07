import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Application from "react-rainbow-components/components/Application";
import Sidebar from "react-rainbow-components/components/Sidebar";
import SidebarItem from "react-rainbow-components/components/SidebarItem";
import ButtonIcon from "react-rainbow-components/components/ButtonIcon";
import RenderIf from "react-rainbow-components/components/RenderIf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Routes from "../../routes";
import SectionHeading from "../../components/SectionHeading";

import {
  Email,

  // FormsIcon,
  // MessageIcon,
  PagesIcon,
  Picture,
} from "../../components/icons";
import history from "../../history";
import toogleSidebar, { navigate } from "../../redux/actions/app";
import "./style.css";

function resolveCurrentUrl() {
  return history.location.pathname.split("/")[1] || "dashboard";
}

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: resolveCurrentUrl(),
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  componentDidUpdate() {
    const { isSidebarHidden } = this.props;
    const isSidebarOpen = !isSidebarHidden;
    document.body.style.overflow = "auto";
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    }
  }

  getSidebarClassNames() {
    const { isSidebarHidden } = this.props;
    return classnames("react-rainbow-admin-app_sidebar-container", {
      "react-rainbow-admin-app_sidebar-container--sidebar-hidden": isSidebarHidden,
    });
  }

  handleOnSelect(e, selectedItem) {
    return this.setState({ selectedItem });
  }

  render() {
    const { selectedItem } = this.state;
    const { toogleSidebar, navigate, isSidebarHidden } = this.props;
    return (
      <Application>
        <RenderIf isTrue={!isSidebarHidden}>
          <div
            className="react-rainbow-admin-app_backdrop"
            role="presentation"
            onClick={toogleSidebar}
          />
        </RenderIf>
        <SectionHeading onToogleSidebar={toogleSidebar} />
        <div className={this.getSidebarClassNames()}>
          <Sidebar
            className="react-rainbow-admin-app_sidebar"
            selectedItem={selectedItem}
            onSelect={this.handleOnSelect}
          >
            <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<PagesIcon />}
              name="SIEMU"
              label="SIEMU"
              onClick={() => navigate("/siemu")}
            />
            <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<Picture />}
              name="About Us"
              label="About Us"
              onClick={() => navigate("/aboutus")}
            />
            <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<Email />}
              name="Contact Us"
              label="Cintact Us"
              onClick={() => navigate("/contactus")}
            />
          </Sidebar>
          <RenderIf isTrue={!isSidebarHidden}>
            <div className="react-rainbow-admin-app_sidebar-back-button-container">
              <ButtonIcon
                onClick={toogleSidebar}
                size="large"
                icon={
                  <FontAwesomeIcon
                    className="react-rainbow-admin-app_sidebar-back-button-icon"
                    icon={faArrowLeft}
                  />
                }
              />
            </div>
          </RenderIf>
        </div>
        <div className="react-rainbow-admin-app_router-container">
          <Suspense fallback={this.loading()}>
            <Switch>
              {Routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              {/* <Redirect from="/" to="/signin" /> */}
            </Switch>
          </Suspense>
        </div>
      </Application>
    );
  }
}

DefaultLayout.propTypes = {
  toogleSidebar: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  isSidebarHidden: PropTypes.bool.isRequired,
};

function stateToProps(state) {
  return state.app;
}

function dispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toogleSidebar,
      navigate,
    },
    dispatch
  );
}

export default connect(
  stateToProps,
  dispatchToProps
)(DefaultLayout);
