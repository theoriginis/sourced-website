import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import history from "../../history";
import Loader from "../spinner/spinner";
import moment from "moment";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";
import { searchedPerformeMain } from "../../redux/searched-events/action.js";
import { Helmet } from "react-helmet";
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
  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.performer_search_main !== this.props.performer_search_main) {
      this.setState({
        search_results_main: this.props.performer_search_main,
      });
    }
  }
  componentWillUnmount() {
    // Remove the click event listener when the component unmounts
    document.removeEventListener("click", this.handleDocumentClick);
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
      this.props.history.push(
        `/events-results/performer-tickets/${eventId.replace(/\s+/g, "-")}`
      );
      this.handleClearClick();
    }
  };
  handleDocumentClick = (event) => {
    const inputElement = event.target.outerHTML.includes(
      "main-intro-search-bar"
    );

    if (!inputElement) {
      // An input element was found within the clicked element

      this.handleClearClick();
    } else {
      // No input element was found within the clicked element
      console.log("No input element found within the clicked element.");
    }
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter" && this.state.inputValueMain != "") {
      this.props.history.push(
        `/events-results/performer-tickets/${this.state.inputValueMain.replace(
          /\s+/g,
          "-"
        )}`
      );
    }
  };
  render() {
    const { inputValueMain } = this.state;
    return (
      <div>
        <Helmet>
          <title>
            Affordable Tickets for Sports, Concerts, and More – Get Yours Now! | Sourced Tickets
          </title>
          <meta
            name="description"
            content="Get unbeatable ticket deals for premier live events. Sourced Tickets offers guaranteed low prices on sports, concerts, and more. Secure your tickets today!"
          />
        </Helmet>
        <header className="header alter1-header section text-contrast" id="home">
          <div className="container">
            <div className="row">
              <div
                className="main-col"
                style={{ visibility: "visible", animationName: "slideInRight" }}
              >
                 <h1>
                  Experience More.  Spend Less. <br />
                  With Sourced Tickets
                </h1>

                <h3>
              
                  Lowest Fees Guaranteed. No Surprises at Checkout.
                </h3>

               

                <h3>
                
                  Quick, Hassle-Free Purchasing{" "}
                </h3>

                <div className="main-search-bar">
                  <div className="main-search-bar-inner-one">
                    <div className="search-box main-intro">
                      <div className="search-img">
                        <img
                          src={require("../../assets/images/newimages/search.png")}
                          alt="sourced"
                        />{" "}
                      </div>
                      <div className="search-div">
                        <span className="searhbar-icons">
                          <input
                            type="text"
                            placeholder="Search for Artist, Team, or Performer"
                            value={inputValueMain}
                            onChange={this.handleInputChange}
                            className="main-intro-search-bar"
                            onKeyPress={this.handleKeyPress}
                          />
                          {inputValueMain && (
                            <i
                              className="fa fa-times cross-main"
                              aria-hidden="true"
                              onClick={this.handleClearClick}
                            ></i>
                          )}
                        </span>
                      </div>
                    </div>

                    {this.state.search_results_main.length > 0 ? (
                      <div className="suggestions-main">
                        <ul>
                          <li className="suggestion-list-items">
                            <div className="suggestion_box-main">
                              <div className="suggestion_name-main">
                                <h4> Suggested Results </h4>
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
                                      <h3> {suggestion.name} </h3>
                                      {/* <h6 className="search-city-name-main"> {moment(suggestion.date.date).format(" ddd MM/D")} • {suggestion.city.text.name},{suggestion.stateProvince.text.name}  </h6> */}
                                    </div>
                                  </div>
                                </li>
                              )
                            )}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
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
