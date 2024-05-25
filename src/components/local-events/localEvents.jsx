import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";
import { searchedEvent } from "../../redux/searched-events/action";


import Loader from "../../components/spinner/spinner.jsx";
import { Redirect } from "react-router-dom";
class LocalEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched_events_list: "",
      latitude: "",
      longitude: "",
      city: "",
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.searched_events !== this.props.searched_events) {
      if (
        this.props.searched_events &&
        this.props.searched_events.searched_events !== ""
      ) {
        this.setState({
          searched_events_list: this.props.searched_events.searched_events,
        });
      }
    }
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.handlePopState);
    let data = {
      salesRankOptions: { interval: "90days", metric: "ticketVolume" },
    };
    this.props.searchedEvent(data);
  }
  handlePopState = (event) => {
    if (this.props.location.pathname === "/") {
      // Reload the window to refresh the home page
      window.location.reload();
    }
  };
 


  onClickEvent = (eventId) => {
    if (eventId) {
      
      window.location.href = `/event-details/${eventId}`
    }
  };
  render() {
    return (
      <div>
        <section className="section events" id="events">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 wow slideInLeft"
                style={{ animationDuration: "3s" }}
              >
                <h2
                  className="wow section-heading"
                  style={{ animationDuration: "1s" }}
                >
                  {" "}
                  <span>Trending</span> Events
                </h2>
              </div>
              {this.props.searched_events.in_action ? (
                <div className="event_box no-records">
                  <Loader />
                </div>
              ) : (
                this.state.searched_events_list &&
                this.state.searched_events_list.map((event, index) => (
                  <div className="col-lg-6 pad10">
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
                        <h3>{moment(event.date.date).format("MM/D")} </h3>{" "}
                        <p> {moment(event.date.date).format("ddd")} </p>{" "}
                      </div>
                      <div className="Info">
                        {" "}
                        <h3 style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{event.text.name}</h3>
                        <h5 className="search-city-name-trending">
                          {event.city.text.name}, {event.stateProvince.text.name}
                        </h5>
                      </div>
                      <div className="time">
                        {" "}
                        <p className="t1">
                          {" "}
                          <img
                            src={require("../../assets/images/newimages/time.png")}
                            alt="sourced"
                          />{" "}
                          {new Date(event.date.datetime).toLocaleTimeString(
                            "en-IT",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}{" "}
                        </p>{" "}
                      </div>
                      <div className="prices">
                        {" "}
                        <button>
                          <a>
                            {" "}
                            {event.pricingInfo
                              ? `From ${event.pricingInfo.lowPrice.text.formatted}`
                              : "N/A"}{" "}
                          </a>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searched_events: state.searched_events,
});
export default withRouter(
  connect(mapStateToProps, {
    searchedEvent,
  })(LocalEvents)
);
