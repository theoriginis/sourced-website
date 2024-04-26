import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";
import { searchedEvent } from "../../redux/searched-events/action";

import Geocode from "react-geocode";
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
 
  // componentWillUnmount() {
  //   // Remove the popstate event listener when the component unmounts
  //   window.removeEventListener('popstate', this.handlePopState);
  // }

  // Geolocation(lat, lng) {
  //   Geocode.setApiKey("AIzaSyC6l4iBNvQwIaPjoqKIoOBKJPxqqvXEYso");
  //   Geocode.enableDebug();
  //   Geocode.setRegion("es");
  //   Geocode.setLanguage("en");

  //   Geocode.fromLatLng(lat, lng).then(
  //     (response) => {
  //       const address = response.results[0].formatted_address;
  //       let city, state, country;
  //       for (
  //         let i = 0;
  //         i < response.results[0].address_components.length;
  //         i++
  //       ) {
  //         for (
  //           let j = 0;
  //           j < response.results[0].address_components[i].types.length;
  //           j++
  //         ) {
  //           switch (response.results[0].address_components[i].types[j]) {
  //             case "locality":
  //               city = response.results[0].address_components[i].long_name;
  //               break;
  //             case "administrative_area_level_1":
  //               state = response.results[0].address_components[i].long_name;
  //               break;
  //             case "country":
  //               country = response.results[0].address_components[i].long_name;
  //               break;
  //           }
  //         }
  //       }
  //       if(city){
  //         this.setState({
  //           city:city
  //         })
  //         let searched_city = {
  //           searched_city: city,
  //         };
  //         this.props.searchedEvent(searched_city);
  //       }else{
  //         let searched_city = {
  //           searched_city: "new york",
  //         };
  //         this.props.searchedEvent(searched_city);
  //       }

  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  onClickEvent = (eventId) => {
    if (eventId) {
      
      window.location.href = `/event-details/${eventId}`
    }
  };
  render() {
    return (
      <div>
        <section class="section events" id="events">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-12 wow slideInLeft"
                style={{ animationDuration: "3s" }}
              >
                <h2
                  class="wow section-heading"
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
