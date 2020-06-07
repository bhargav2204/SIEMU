// import React from "react";

// const Siemu = React.lazy(() => import("./sections/Siemu/index"));
// const Productlist = React.lazy(() =>
//   import("./sections/Siemu/Pages/Productlist")
// );
// const AboutUs = React.lazy(() => import("./sections/Aboutus/About"));
// const ContactUS = React.lazy(() => import("./sections/Contactus/ContactUs"));
// const Routes = [
//   { path: "/", exact: true, name: "Home" },
//   { path: "/siemu", name: "Story", component: Siemu },
//   { path: "/aboutus", name: "AboutUs", component: AboutUs },
//   { path: "/contactus", name: "ContactUS", component: ContactUS },
//   { path: "/siemu/productlist", name: "Story", component: Productlist },
// ];

// export default Routes;
import React from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import history from "./history";
import Siemu from "./sections/Siemu/index";
import AboutUs from "./sections/Aboutus/About";
import ContactUs from "./sections/Contactus/ContactUs";
import Productlist from "./sections/Siemu/Pages/Productlist";
// import Ordermanagment from "./sections/OrderManagment/index";
// import Settings from "./sections/Settings/index";
// import Usermanagment from "./sections/UserManament/index";
export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect from="/" exact to="/signin" />
        {/* <Route path="/signin" component={SignIn} /> */}
        <Route path="/siemu/productlist" component={Productlist} />
        <Route path="/siemu" component={Siemu} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
       
        {/* <Route path="/usermanagment" component={Usermanagment} />
        <Route path="/settings" component={Settings} /> */}
      </Switch>
    </Router>
  );
}
