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
    let url_segment = this.props.location.pathname.split("/");
    let event_id = url_segment["2"];

    const seaticsScript = document.createElement("script");
    seaticsScript.setAttribute(
      "src",
      `https://mapwidget3-sandbox.seatics.com/js?eventId=${event_id}&websiteConfigId=12498&useDarkTheme=true&includeBootstrap=true&checkoutUrl=checkout.tickettransaction.com`
    );
    seaticsScript.async = true;
    document.body.appendChild(seaticsScript);
    Seatics.config.c3CheckoutDomain = "checkout.tickettransaction.com";
    Seatics.config.c3CurrencyCode = "USD";
    Seatics.config.currencyIntl = {};
    
    Seatics.config.useC3 = true;
  }

  openEvent = async (event_id) => {
    if (event_id !== "") {
      this.props.history.push(`/event-details/${event_id}`);
    }
  };

  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <main>
          <section class="section events search_results" id="products">
            <div class="container">
              <div class="row">
                <div
                  id="tn-maps"
                  role="main"
                  className="seatics"
                  style={{
                    height: "1200px",
                    backgroundColor: "#211E32",
                    overflow: "auto",
                  }}
                >
                  <div class="loader"></div>
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
