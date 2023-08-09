import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";
import { searchedEvent } from "../../redux/searched-events/action";

import Geocode from "react-geocode";
class LocalEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched_events_list: "",
      latitude: "",
      longitude: "",
      city:""
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.searched_events !== this.props.searched_events) {
      if (
        this.props.searched_events &&
        this.props.searched_events.searched_events !== ""
      ) {
        console.log("searched-evnt", this.props.searched_events);
        this.setState({
          searched_events_list: this.props.searched_events.searched_events,
        });
      }
    }
  }

  componentDidMount() {
    let data = {
      salesRankOptions:{"interval":"30days","metric":"ticketVolume"}
    }
    this.props.searchedEvent(data);
    
  }
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
  openEvent = async (artist_id) => {
    if (artist_id !== "") {
      this.props.history.push(`/performers-details/${artist_id}`);
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
                style={{animationDuration: "3s"}}
              >
                <h2
                  class="wow slideInLeft section-heading"
                  style={{animationDuration: "1s"}}
                >
                  {" "}
                  <span>Trending</span> Features
                </h2>
              </div>
                {this.state.searched_events_list &&
                  this.state.searched_events_list.map((event, index) => (
                    <div className="col-lg-6 pad10">
                      <div className="event_box">
                        <div className="date">
                          {" "}
                          <h3>{event.date.date} </h3>{" "}
                        </div>
                        <div className="Info">
                          {" "}
                          <h3>{event.text.name}</h3>
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
                            <a href="#"> From $212 </a>{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                 
                {/* <div class="col-lg-6 pad10">
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>6/23 </h3> <p> Fri </p>{" "}
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>Jake Paul vs Tom Furry </h3>
                      <p> T-Mobile Arena • Las Vegas, NV </p>
                    </div>
                    <div class="time">
                      {" "}
                      <p class="t1">
                        {" "}
                        <img src="img/time.png" alt="sourced" /> 3: 00 PM{" "}
                      </p>{" "}
                    </div>
                    <div class="prices">
                      {" "}
                      <button>
                        <a href="#"> From $212 </a>{" "}
                      </button>
                    </div>
                  </div>
                </div> */}

                {/* <div class="col-lg-6 pad10">
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>6/23 </h3> <p> Fri </p>{" "}
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>Jake Paul vs Tom Furry </h3>
                      <p> T-Mobile Arena • Las Vegas, NV </p>
                    </div>
                    <div class="time">
                      {" "}
                      <p class="t1">
                        {" "}
                        <img src="img/time.png" alt="sourced" /> 3: 00 PM{" "}
                      </p>{" "}
                    </div>
                    <div class="prices">
                      {" "}
                      <button>
                        <a href="#"> From $212 </a>{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 pad10">
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>6/23 </h3> <p> Fri </p>{" "}
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>Jake Paul vs Tom Furry </h3>
                      <p> T-Mobile Arena • Las Vegas, NV </p>
                    </div>
                    <div class="time">
                      {" "}
                      <p class="t1">
                        {" "}
                        <img src="img/time.png" alt="sourced" /> 3: 00 PM{" "}
                      </p>{" "}
                    </div>
                    <div class="prices">
                      {" "}
                      <button>
                        <a href="#"> From $212 </a>{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 pad10">
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>6/23 </h3> <p> Fri </p>{" "}
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>Jake Paul vs Tom Furry </h3>
                      <p> T-Mobile Arena • Las Vegas, NV </p>
                    </div>
                    <div class="time">
                      {" "}
                      <p class="t1">
                        {" "}
                        <img src="img/time.png" alt="sourced" /> 3: 00 PM{" "}
                      </p>{" "}
                    </div>
                    <div class="prices">
                      {" "}
                      <button>
                        <a href="#"> From $212 </a>{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 pad10">
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>6/23 </h3> <p> Fri </p>{" "}
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>Jake Paul vs Tom Furry </h3>
                      <p> T-Mobile Arena • Las Vegas, NV </p>
                    </div>
                    <div class="time">
                      {" "}
                      <p class="t1">
                        {" "}
                        <img src="img/time.png" alt="sourced" /> 3: 00 PM{" "}
                      </p>{" "}
                    </div>
                    <div class="prices">
                      {" "}
                      <button>
                        <a href="#"> From $212 </a>{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 pad10">
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>6/23 </h3> <p> Fri </p>{" "}
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>Jake Paul vs Tom Furry </h3>
                      <p> T-Mobile Arena • Las Vegas, NV </p>
                    </div>
                    <div class="time">
                      {" "}
                      <p class="t1">
                        {" "}
                        <img src="img/time.png" alt="sourced" /> 3: 00 PM{" "}
                      </p>{" "}
                    </div>
                    <div class="prices">
                      {" "}
                      <button>
                        <a href="#"> From $212 </a>{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 pad10">
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>6/23 </h3> <p> Fri </p>{" "}
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>Jake Paul vs Tom Furry </h3>
                      <p> T-Mobile Arena • Las Vegas, NV </p>
                    </div>
                    <div class="time">
                      {" "}
                      <p class="t1">
                        {" "}
                        <img src="img/time.png" alt="sourced" /> 3: 00 PM{" "}
                      </p>{" "}
                    </div>
                    <div class="prices">
                      {" "}
                      <button>
                        <a href="#"> From $212 </a>{" "}
                      </button>
                    </div>
                  </div>
                </div> */}
              
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
