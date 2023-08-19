import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { withRouter } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

import history from "./history";
import SearchResult from "./pages/search-result/eventsResult";
import EventDetails from "./pages/eventDetails/eventDetails";

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
              <Route
                path={"/events-results/:search"}
                component={SearchResult}
              />
               <Route
                path={"/event-details"}
                component={EventDetails}
              />
              {/* <Route path={"/about"} component={About} />
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
              <Route path={"/faq"} component={Faq} /> */}
          
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
