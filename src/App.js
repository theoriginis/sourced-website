import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { withRouter } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import SearchResult from "./pages/search-result/eventsResult";
import PerformerSearch from "./pages/performer-search/performer-search";
import history from "./history";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import forgotPassword from "./pages/forgot-password/forgotPassword";
import EventDetails from "./pages/event-details/event-details";
import CartDetails from "./pages/cart-details/cart-details";
import TermsAndConditions from "./pages/terms-and-conditions/terms-and-conditions";
import privacyPolicies from "./pages/privacy-policies/privacy-policies";
import ContactUs from "./pages/contact-us/contact-us";
import AboutUs from "./pages/about-us/about-us";
import Refund from "./pages/refund/refund";
import Checkout from "./pages/checkout/checkout";
import AllEvents from "./pages/all-events/all-events";
import OrderConfirmation from "./pages/order-confirmation/order-confirmation";
import MyOrders from "./pages/my-orders/my-orders";
import Faq from "./pages/faq/faq";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
      user_information: JSON.parse(localStorage.getItem("user_info")),
    };
  }
 
  render() {
    return (
      <Provider store={configureStore()}>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/about"} component={About} />
              <Route path={"/contact"} component={Contact} />
              <Route path={"/login"} component={Login} />
              <Route path={"/sign-up"} component={Signup} />
              <Route
                path={"/terms-and-conditions"}
                component={TermsAndConditions}
              />
              <Route path={"/privacy-policies"} component={privacyPolicies} />
              <Route path={"/forgot-password"} component={forgotPassword} />
              <Route
                path={"/events-results/:search"}
                component={SearchResult}
              />
              <Route
                path={"/performers-details/:artist_id"}
                component={PerformerSearch}
              />
              <Route
                path={"/event-details/:event_id"}
                component={EventDetails}
              />
              <Route path={"/cart-details"} component={CartDetails} />
              <Route path={"/contact-us"} component={ContactUs} />
              <Route path={"/about-us"} component={AboutUs} />
              <Route path={"/refund"} component={Refund} />

              <Route path={"/all-events"} component={AllEvents} />
              <Route path={"/faq"} component={Faq} />
              {this.state.user_information ? (
                <>
                  <Route path={"/checkout"} component={Checkout} />
                  <Route
                    path={"/order-confirmation"}
                    component={OrderConfirmation}
                  />
                  <Route path={"/my-orders"} component={MyOrders} />
                </>
              ) : (
                <Route component={ErrorPage} />
              )}
              <Route component={ErrorPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withRouter(App);
