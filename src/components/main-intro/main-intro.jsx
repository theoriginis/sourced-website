import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import history from "../../history";
import Loader from "../spinner/spinner";
import moment from "moment";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";
import { searchedPerformeMain } from "../../redux/searched-events/action.js";
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
      inputValueMain: "",
      search_results_main: [],
      inputValueMain_error: false,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.performer_search_main !== this.props.performer_search_main) {
      this.setState({
        search_results_main: this.props.performer_search_main,
      });
    }
  }
  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick);
  }
  handleInputChange = (e) => {
    const value = e.target.value;
    if (e.target) this.setState({ inputValueMain: value });

    // Filter suggestions based on user input
    if (value !== "") {
      let data = {
        performer_name: value,
      };
      this.props.searchedPerformeMain(data, "performer");
    } else {
      this.setState({
        search_results_main: [],
      });
    }
  };
  searchPerformer = () => {
    if (this.state.inputValueMain) {
      this.props.history.push(
        `/events-results/performer/${this.state.inputValueMain}`
      );
      //this.props.history.push(`/events-results/performer/${eventId}`);
    } else {
      this.setState({
        inputValueMain_error: true,
      });
    }
  };
  searchEvent = () => {
    if (this.state.inputValueMain) {
      this.props.history.push(
        `/events-results/events/${this.state.inputValueMain}`
      );
    } else {
      this.setState({
        inputValueMain_error: true,
      });
    }
  };
  seachVenue = () => {
    if (this.state.inputValueMain) {
      this.props.history.push(
        `/events-results/venue/${this.state.inputValueMain}`
      );
    } else {
      this.setState({
        inputValueMain_error: true,
      });
    }
  };
  handleClearClick = () => {
    this.setState({ inputValueMain: "", search_results_main: [] });
  };
  onClickEvent = (eventId) => {
    if (eventId) {
      //this.props.history.push(`/event-details/${eventId}`)
      this.props.history.push(`/events-results/performer/${eventId}`);
      this.handleClearClick();
    }
  };
  handleDocumentClick = (event) => {
    console.log("selected element", event.target.outerHTML);
    const inputElement = event.target.outerHTML.includes(
      "main-intro-search-bar"
    );

    if (!inputElement) {
      // An input element was found within the clicked element
      console.log("Found an input element:", inputElement);
      this.handleClearClick();
    } else {
      // No input element was found within the clicked element
      console.log("No input element found within the clicked element.");
    }
  };
  componentWillUnmount() {
    // Remove the click event listener when the component unmounts
    document.removeEventListener("click", this.handleDocumentClick);
  }

  render() {
    const { inputValueMain } = this.state;
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
                  experience as quick and hassle-free as possible. With the
                  lowest fees in the industry, we can guarantee no surprises at
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
                        <span className="searhbar-icons">
                          <input
                            type="text"
                            placeholder="Search for Artist, Team, or Performer"
                            value={inputValueMain}
                            onChange={this.handleInputChange}
                            className="main-intro-search-bar"
                          />
                          {inputValueMain && (
                            <i
                              class="fa fa-times cross-main"
                              aria-hidden="true"
                              onClick={this.handleClearClick}
                            ></i>
                          )}
                        </span>
                        {this.state.search_results_main.length > 0 ? (
                          <ul className="suggestions-main ">
                            <li className="suggestion-list-items">
                              <div className="suggestion_box-main">
                                <div className="suggestion_name-main">
                                  <h2> Suggested Results </h2>
                                </div>
                              </div>
                            </li>
                            {this.state.search_results_main.length > 0 &&
                              this.state.search_results_main.map(
                                (suggestion, index) => (
                                  <li
                                    key={index}
                                    onClick={() =>
                                      this.onClickEvent(suggestion.name)
                                    }
                                    className="suggestion-list-items-main"
                                  >
                                    <div className="suggestion_box-main">
                                      <div className="suggestion_name-main">
                                        <h5> {suggestion.name} </h5>
                                        {/* <h6 className="search-city-name-main"> {moment(suggestion.date.date).format(" ddd MM/D")} • {suggestion.city.text.name},{suggestion.stateProvince.text.name}  </h6> */}
                                      </div>
                                    </div>
                                  </li>
                                )
                              )}
                          </ul>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <nav class="nav purchase_btn" onClick={this.searchPerformer}>
                      <span class="button_zal">
                        {" "}
                        Search{" "}
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>

                      </span>
                    </nav>
                  </div> */}
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

const mapStateToProps = (state) => ({
  performer_search_main: state.performer_search_main.performer_search_main,
});
export default withRouter(
  connect(mapStateToProps, { searchedPerformeMain })(MainIntro)
);
