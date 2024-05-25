import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import moment from "moment";
import { searchedEventByPerformer } from "../../redux/searched-events/action.js";
import Loader from "../../components/spinner/spinner.jsx";
import TiktokPixel from "tiktok-pixel";
import { Helmet } from "react-helmet";
class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      original_results: "",
      currentPage: 1,
      event_limit: 10,
      keyword_searched: "",
      opneFilterBox: false,
      inputValueFilter: "",
    };
  }
  componentDidMount() {
    TiktokPixel.init("CKUJAQ3C77UDR4OH6180");
    TiktokPixel.track("Events Searches", {
      content_type: "event name",
      content_name: this.state.keyword_searched.replace(/-/g, " "),
    });

    window.addEventListener("beforeunload", this.handlePopState);
    this.getEventByPerformer();
  }
  componentWillUnmount() {
    // Remove the click event listener when the component unmounts
    //document.removeEventListener("click", this.handleDocumentClick);
  }
  handlePopState = (event) => {
    if (this.props.location.pathname.includes("/events-results")) {
      // Reload the window to refresh the home page
      window.location.reload();
    }
  };
  // componentWillUnmount() {
  //   // Remove the popstate event listener when the component unmounts
  //   window.removeEventListener('beforeunload', this.handlePopState);
  // }
  getEventByPerformer() {
    let url_segment = this.props.location.pathname.split("/");

    let keyword_searched = url_segment["3"];

    this.setState({
      keyword_searched: keyword_searched,
    });
    let data = {
      performer_name: keyword_searched.replace(/-/g, " "),
    };

    this.props.searchedEventByPerformer(data);
  }
  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0, 0);
    if (
      prevProps.searched_events_by_performer !==
      this.props.searched_events_by_performer
    ) {
      if (this.props.location !== prevProps.location) {
        // Call the API again when the URL updates
        this.getEventByPerformer();
      }

      this.setState({
        search_results: this.props.searched_events_by_performer,
        original_results: this.props.searched_events_by_performer,
      });
    }
  }
  openLocationFilter() {
    this.setState({
      opneFilterBox: !this.state.opneFilterBox,
    });
  }
  handleInputChangeFilter = (e) => {
    const value = e.target.value;
    this.setState({
      inputValueFilter: value,
    });
  };
  fliterEventsByLocation = () => {
    const filteredArray = this.state.original_results.filter(
      (item) =>
        item.city.text.name
          .toLowerCase()
          .includes(this.state.inputValueFilter.toLowerCase()) ||
        item.stateProvince.text.name
          .toLowerCase()
          .includes(this.state.inputValueFilter.toLowerCase())
    );
    // Set the filtered array in the component's state
    this.setState({ search_results: filteredArray });
  };
  removeFilter = () => {
    this.setState({
      search_results: this.state.original_results,
      inputValueFilter: "",
    });
  };
  onClickEvent = (eventId) => {
    if (eventId) {
      //this.props.history.push(`/event-details/${eventId}`);
      window.location.href = `/event-details/${eventId}`;
    }
  };

  render() {
    const { inputValueFilter, filteredArray } = this.state;
    return (
      <>
        <main>
          <Helmet>
            <title>
              {this.state.keyword_searched.replace(/-/g, " ")} tickets in 2023
              – Get Yours Now! | Sourced Tickets
            </title>
            <meta
              name="description"
              content={`${this.state.keyword_searched.replace(
                /-/g,
                " "
              )} Tickets 2023 - Secure your seats for the ultimate game day experience. Get your  ${this.state.keyword_searched.replace(/-/g, " ") } tickets now and be part of the action!`}
            />
          </Helmet>
          <section className="section events search_results" id="events">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-12 padding-search wow slideInLeft"
                  style={{ animationDuration: "3s" }}
                >
                  <h2
                    className="wow slideInLeft"
                    style={{ animationDuration: "1s" }}
                  >
                    Search Results for{" "}
                    <span>
                      {" "}
                      '{this.state.keyword_searched.replace(/-/g, " ")}'
                    </span>
                  </h2>
                  <ul className="tags">
                    <li onClick={() => this.openLocationFilter()}>
                      {" "}
                      <img
                        src={require("../../assets/images/newimages/c1.png")}
                        alt="sourced"
                      />{" "}
                      location{" "}
                    </li>
                    {this.state.opneFilterBox ? (
                      <div className="location-filter-box">
                        <input
                          type="text"
                          placeholder="Search By Location"
                          value={inputValueFilter}
                          onChange={this.handleInputChangeFilter}
                          className="header-search-bar"
                        />
                        <div
                          className="filter-apply"
                          onClick={() => this.fliterEventsByLocation()}
                        >
                          Apply
                        </div>
                        <div
                          className="filter-clear"
                          onClick={() => this.removeFilter()}
                        >
                          Clear
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </ul>
                  <h3 className="eventes-heading"> All Events </h3>
                  {this.props.in_action_search_by_performer ? (
                    <div className="event_box no-records">
                      <Loader />
                    </div>
                  ) : this.state.search_results &&
                    this.state.search_results.length > 0 ? (
                    this.state.search_results.map((event, key) => (
                      <div
                        className="event_box"
                        onClick={() =>
                          this.onClickEvent(
                            `${event.text.name.replace(
                              /\s+/g,
                              "-"
                            )}-tickets-${event.city.text.name.replace(
                              /\s+/g,
                              "-"
                            )}-${event.date.date}/${event.id}`
                          )
                        }
                      >
                        <div className="date">
                          <h4>{moment(event.date.date).format("MM/D")} </h4>{" "}
                          <p> {moment(event.date.date).format("ddd")} </p>{" "}
                        </div>
                        <div className="Info">
                          <h4>{event.text.name} </h4>
                          <p>
                            {" "}
                            {event.city.text.name},{" "}
                            {event.stateProvince.text.name}
                          </p>
                        </div>
                        <div className="date_1">
                          <p className="t2">
                            <img
                              src={require("../../assets/images/newimages/calender.png")}
                              alt="sourced"
                            />{" "}
                            {moment(event.date.date).format("MMM Do")}
                          </p>{" "}
                        </div>
                        <div className="time">
                          {" "}
                          <p className="t1">
                            {" "}
                            <img
                              src={require("../../assets/images/newimages/time.png")}
                              alt="sourced"
                            />{" "}
                            {event.date.text.time}
                          </p>{" "}
                        </div>
                        <div className="prices">
                          {" "}
                          <button>
                            <a>
                              {/* {" "}
                              {event.pricingInfo
                                ? `From ${event.pricingInfo.lowPrice.text.formatted}`
                                : "N/A"}{" "} */}
                              Buy Now
                            </a>{" "}
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    // <div className="event_box no-records">No Records Found</div>
                    <div className="event_box no-records">
                      Sorry. There are currently no events matching this
                      criteria.
                    </div>
                  )}

                  <div className="unviel_infor">
                    <h1 className="first-heading">
                      {this.state.keyword_searched.replace(/-/g, " ")} Live
                      Events: Your Ticket Guide
                    </h1>
                    <p>
                      {" "}
                      Get Your Easy and Affordable Seats for  {this.state.keyword_searched.replace(/-/g, " ") } Live
                      Events Today!
                    </p>
                    <h2 className="second-heading">
                      Secure Your{" "}
                      {this.state.keyword_searched.replace(/-/g, " ") }  Tickets with Sourced Tickets
                      
                    </h2>
                    <p>
                      Don't miss the chance to witness{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      live. Follow these steps to secure your tickets:{" "}
                    </p>

                    <p>
                      {" "}
                      Explore{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      upcoming events on Sourced Tickets to find an event near
                      you.
                    </p>
                    <p>
                      {" "}
                      Click the "Tickets" button next to your chosen event to
                      proceed.
                    </p>
                    <p>
                      {" "}
                      Utilize the interactive seating chart to select your
                      desired seats and price range.
                    </p>
                    <p>
                      {" "}
                      Finalize your order by clicking "Buy" and entering your
                      payment and shipping details.
                    </p>
                    <p>
                      {" "}
                      Rest assured that your{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      tickets will arrive in time for the event.
                    </p>

                    <p>
                      {" "}
                      Diverse{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}{" "}
                      </span>
                      Ticket Options for You
                    </p>
                    <p>
                      {" "}
                      Whether you're on a budget or seeking premium experiences,
                      we offers an variety of
                      <span>
                        {" "}
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      ticket options. Enjoy
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      while staying within your budget.
                    </p>

                    <h3>
                      Your Trusted Source for{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      Tickets{" "}
                    </h3>
                    <p>
                      With us you're guaranteed access to{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      tickets, even for highly anticipated events. Secure your{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      tickets today.
                    </p>

                    <h3>
                      Stay updated on{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      Events
                    </h3>
                    <p>
                      Stay informed about upcoming{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      events and discover tips to secure the best tickets at the
                      best prices with Sourced Tickets:
                    </p>
                    <p>
                      We keep our prices up-to-date, ensuring you get the most
                      competitive rates. Subscribe to our newsletter to receive
                      regular updates on{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      events, special promotions, and exclusive discounts.
                    </p>
                    <p>
                      Follow us on social media for real-time notifications
                      about ticket availability, game schedules, and last-minute
                      deals.
                    </p>
                    <p>
                      Customize your preferences to include your favorite sports
                      teams' game times and locations, so you never miss a game.
                    </p>
                    <p>
                      Rest easy knowing that your{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      tickets are backed by our 100% Buyer Guarantee.
                    </p>
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

const mapStateToProps = (state) => ({
  searched_events_by_performer:
    state.searched_events_by_performer.searched_events_by_performer,
  in_action_search_by_performer:
    state.searched_events_by_performer.in_action_search_by_performer,
});
export default withRouter(
  connect(mapStateToProps, { searchedEventByPerformer })(SearchResult)
);
