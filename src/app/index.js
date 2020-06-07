// import React, { Component } from "react";
// import { Router, Route, Switch, Redirect } from "react-router-dom";
// import history from "../history";
// // import { renderRoutes } from 'react-router-config';

// const loading = () => (
//   <div className="animated fadeIn pt-3 text-center">Loading...</div>
// );

// // Containers
// const DefaultLayout = React.lazy(() =>
//   import("../Containers/DefaultLayout/index")
// );

// const ProtectedRoute = React.lazy(() => import("../ProtectedRoute"));
// class App extends Component {
//   render() {
//     return (
//       <Router history={history}>
//         <React.Suspense fallback={loading()}>
//           <Switch>
//             <Redirect from="/" exact to="/siemu" />
//             {/* <Route path="/signin" name="Login Page" component={SignIn} /> */}
//             <ProtectedRoute path="/siemu" component={DefaultLayout} />
//             <ProtectedRoute path="/siemu/productlist" component={DefaultLayout} />
//             <ProtectedRoute path="/" component={DefaultLayout} />
//           </Switch>
//         </React.Suspense>
//       </Router>
//     );
//   }
// }

// export default App;
import React, { Component } from "react";
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
import Routes from "../routes";
import SectionHeading from "../components/SectionHeading";
import {
  DashboardIcon,
  FormsIcon,
  MessageIcon,
  User,
  UsersIcon,
  PagesIcon,
  Company,
  BarsIcon,
  Email,
  PuzzleIcon,
  ApplicationIcon,
  ChartsIcon,
} from "../components/icons";
import history from "../history";
import toogleSidebar, { navigate } from "../redux/actions/app";
import "./styles.css";

function resolveCurrentUrl() {
  return history.location.pathname.split("/")[1] || "dashboard";
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: resolveCurrentUrl(),
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

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
              icon={<PuzzleIcon />}
              name="SIEMU"
              label="SIEMU"
              onClick={() => navigate("/siemu")}
            />
            <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<PagesIcon />}
              name="AboutUS"
              label="About Us"
              onClick={() => navigate("/aboutus")}
            />
            <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<Email />}
              name="Contact Us"
              label="Contact Us"
              onClick={() => navigate("/contactus")}
            />
            {/* <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<ApplicationIcon />}
              name="User Management"
              label="User Management"
              onClick={() => navigate("/usermanagment")}
            />
            <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<PuzzleIcon />}
              name="Setting"
              label="Setting"
              onClick={() => navigate("/settings")}
            /> */}
            {/* <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<MessageIcon />}
              name="messages"
              label="Messages"
              onClick={() => navigate("/messages")}
            />
            <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<FormsIcon />}
              name="forms"
              label="Forms"
              onClick={() => navigate("/forms")}
            />
            <SidebarItem
              className="react-rainbow-admin-app_sidebar-item"
              icon={<ChartsIcon />}
              name="charts"
              label="Charts"
              onClick={() => navigate("/charts")}
            /> */}
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
          <Routes />
        </div>
      </Application>
    );
  }
}

App.propTypes = {
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
)(App);
