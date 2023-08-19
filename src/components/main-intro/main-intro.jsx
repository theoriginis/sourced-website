import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import history from "../../history";
import Loader from "../spinner/spinner";
import moment from "moment";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";
class MainIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events_lits: "",
      viewAllevents: false,
      currentPage: 1,
      event_limit: 8,
      isMouseInside: false,
      activeItem: -1,
      search_box: "",
      search_box_error: false,
    };
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.event_list !== this.props.event_list) {
  //     if (this.props.event_list && this.props.event_list.event_list !== "") {
  //       //let firstEight = this.props.event_list.event_list.slice(0, 8);
  //       this.setState({
  //         events_lits: this.props.event_list.event_list,
  //       });
  //     }
  //   }
  // }
  // componentDidMount = async () => {
  //   let data = {
  //     limit: this.state.event_limit,
  //     page: this.state.currentPage,
  //     type: "upcoming",
  //   };
  //   await this.props.upcomingEvent(data);
  //   if (this.props.event_list && this.props.event_list.event_list !== "") {
  //     //let firstEight = this.props.event_list.event_list.slice(0, 8);

  //     this.setState({
  //       events_lits: this.props.event_list.event_list,
  //     });
  //   }
  // };
  // openEvent = async (event_id) => {
  //   if (event_id !== "") {
  //     await this.props.evenDetails(event_id);
  //   }
  //   if (this.props.event_details.event_details) {
  //     this.props.history.push(`/event-details/${event_id}`);
  //   }
  // };
  // viewAllevent() {
  //   this.props.history.push("/all-events");
  // }
  // mouseEnter = (index) => {
  //   this.setState({
  //     activeItem: index,
  //   });
  // };
  // mouseLeave = (index) => {
  //   this.setState({
  //     activeItem: -1,
  //   });
  // };
  handleInput = (evt) => {
    this.setState({ search_box: evt.target.value });
  };
  searchPerformer = () => {
    if (this.state.search_box) {
      this.props.history.push(`/events-results/performer/${this.state.search_box}`);
    } else {
      this.setState({
        search_box_error: true,
      });
    }
   
  };
  searchEvent = () => {
    if (this.state.search_box) {
      this.props.history.push(`/events-results/events/${this.state.search_box}`);
    } else {
      this.setState({
        search_box_error: true,
      });
    }
  };
  seachVenue = ()=>{
    if (this.state.search_box) {
      this.props.history.push(`/events-results/venue/${this.state.search_box}`);
    } else {
      this.setState({
        search_box_error: true,
      });
    }
  }
  render() {
    return (
      <div>
        <header class="header alter1-header section text-contrast" id="home">
          <div class="container">
            <div class="row">
              <div
                class="col-md-6 col-lg-6 col-sm-12 col-xs-12 wow  center z-index-12"
                style={{ visibility: "visible", animationName: "slideInRight" }}
              >
                <h2>
                  Experience More. <br />
                  Spend Less.
                </h2>
                <h5>
                  {" "}
                  Sourced Tickets is the only ticket-selling marketplace whose
                  #1 priority is you. We strive to make your ticket-buying
                  experience as quick and hassle-free as possible. With no
                  excessive or additional fees, we can guarantee no surprises at
                  checkout!
                </h5>
                <h3>
                  {" "}
                  <img
                    src={require("../../assets/images/newimages/tick.png")}
                    alt="sourced"
                  />{" "}
                  Best Price guaranteed{" "}
                </h3>

                <div className="main-search-bar">
                  <div className="main-search-bar-inner-one">
                    <div class="search-box main-intro">
                      <div class="search-img">
                        <img
                          src={require("../../assets/images/newimages/search.png")}
                          alt="sourced"
                        />{" "}
                      </div>
                      <div class="search-div">
                        <input
                          type="text"
                          placeholder="Search For Artist, Team,  or Performer"
                          name="search_box"
                          state={this.state.search_box}
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <nav class="nav purchase_btn" onClick={this.searchPerformer}>
                      <span class="button_zal">
                        {" "}
                        Search{" "}
                        <img
                          src={require("../../assets/images/newimages/arrow-right.png")}
                          alt="sourced"
                        />{" "}
                      </span>
                    </nav>
                  </div>
                </div>

                <div className="main-search-bar">
                  <div className="main-search-bar-inner-one">
                    <div class="search-box main-intro">
                      <div class="search-img">
                        <img
                          src={require("../../assets/images/newimages/search.png")}
                          alt="sourced"
                        />{" "}
                      </div>
                      <div class="search-div">
                        <input
                          type="text"
                          placeholder="Search For Specific Event"
                          name="search_box"
                          state={this.state.search_box}
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <nav class="nav purchase_btn" onClick={this.searchEvent}>
                      <span class="button_zal">
                        {" "}
                        Search{" "}
                        <img
                          src={require("../../assets/images/newimages/arrow-right.png")}
                          alt="sourced"
                        />{" "}
                      </span>
                    </nav>
                  </div>
                </div>

                <div className="main-search-bar">
                  <div className="main-search-bar-inner-one">
                    <div class="search-box main-intro">
                      <div class="search-img">
                        <img
                          src={require("../../assets/images/newimages/search.png")}
                          alt="sourced"
                        />{" "}
                      </div>
                      <div class="search-div">
                        <input
                          type="text"
                          placeholder="Search For Specific Venue"
                          name="search_box"
                          state={this.state.search_box}
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <nav class="nav purchase_btn" onClick={this.seachVenue}>
                      <span class="button_zal">
                        {" "}
                        Search{" "}
                        <img
                          src={require("../../assets/images/newimages/arrow-right.png")}
                          alt="sourced"
                        />{" "}
                      </span>
                    </nav>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-6 col-sm-12 col-xs-12 hero-right wow  center z-index-12"
                style={{ visibility: "visible", animationName: "slideInRight" }}
              >
                <div class="icons">
                  <div class="icon1">
                    <img
                      src={require("../../assets/images/newimages/mic.png")}
                      alt="sourced"
                    />
                  </div>
                  <div class="icon2">
                    <img
                      src={require("../../assets/images/newimages/earth.png")}
                      alt="sourced"
                    />
                  </div>
                  <div class="icon3">
                    <img
                      src={require("../../assets/images/newimages/ticket.png")}
                      alt="sourced"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(MainIntro));
