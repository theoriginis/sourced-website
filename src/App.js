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
import Policies from "./pages/policies/policies";
import NFLSport from "./pages/sports/Nfl";


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
      user_information: JSON.parse(localStorage.getItem("user_info")),
    };
  }

  shouldRenderFooter() {
    const { location } = this.props;
    return !location.pathname.includes("/event-details/");
  }

  shouldRenderNav() {
    const { location } = this.props;
    return !location.pathname.includes("/event-details/");
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <Router history={history}>
          <div>
            {this.shouldRenderFooter() && <Header />}
          
            <Switch>
              <Route path={"/"} exact render={(props) => <Home key="home" {...props} />}/>
              <Route
                path={"/events-results/:search"}
                component={SearchResult}
              />
              <Route
                path={"/event-details"}
                component={EventDetails}
              />
              <Route
                path={"/policies"}
                component={Policies}
              />
              <Route path={'/sport-search/:sportname'} component={NFLSport} />
            
              {/* Add other routes here */}
              <Route component={ErrorPage} />
            </Switch>

            {this.shouldRenderFooter() && <Footer />}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default withRouter(App);
