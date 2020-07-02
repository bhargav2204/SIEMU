import React from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import history from "./history";
import Siemu from "./sections/Siemu/index";
import AboutUs from "./sections/Aboutus/About";
import ContactUs from "./sections/Contactus/ContactUs";
import Productlist from "./sections/Siemu/Pages/Productlist";
import Demo from "./sections/Demo";
import ProductDetails from "./sections/Siemu/Pages/ProductDetails";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        {/* <Redirect from="/" exact to="/siemu" /> */}
        {/* <Route path="/signin" component={SignIn} /> */}
        {/* <Route path="/siemu/productDetails/:id" component={ProductDetails} />
        <Route path="/siemu/productlist/:id" component={Productlist} />

        <Route path="/siemu" component={Siemu} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/demo" component={Demo} /> */}
      </Switch>
    </Router>
  );
}
