import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import moment from "moment";
import { searchedPerformer } from "../../redux/searched-events/action.js";
import Loader from "../../components/spinner/spinner.jsx";
import { EventInformation } from "../../utils/apis";
import { Helmet } from "react-helmet";
import { ViewMap } from "../../utils/apis.js";
class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      currentPage: 1,
      event_limit: 10,
      keyword_searched: "",
      event_details: "",
      map_view: "",
    };
  }
  componentDidMount() {
    window.addEventListener("beforeunload", this.handlePopState);
    let url_segment = this.props.location.pathname.split("/");
    let event_id = url_segment["3"];

    const seaticsScript = document.createElement("script");
    seaticsScript.setAttribute(
      "src",
      `https://mapwidget3.seatics.com/js?eventId=${event_id}&websiteConfigId=27217&useDarkTheme=true&includeBootstrap=true`
    );
    seaticsScript.async = true;
    document.body.appendChild(seaticsScript);
    Seatics.config.c3CheckoutDomain = "checkout.sourcedtickets.com";
    Seatics.config.c3CurrencyCode = "USD";
    Seatics.config.currencyIntl = {};

    Seatics.config.useC3 = true;
  
  }
  handlePopState = (event) => {
    
    if (this.props.location.pathname.includes("/event-details")) {
      // Reload the window to refresh the home page
      window.location.reload();
    }
  };

  // componentWillUnmount() {
  //   // Remove the popstate event listener when the component unmounts
  //   window.removeEventListener('popstate', this.handlePopState);
  // }

  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <main>
          <section className="section events search_results" id="products">
            <div className="container">
              <div className="row">
          
                <div id="tn-maps"  role="main"  className="seatics" style={{
                    height: "800px",
                    backgroundColor: "#211E32",
                    overflow: "auto",
                  }}
                >
                  <div className="loader">
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(EventDetails));
