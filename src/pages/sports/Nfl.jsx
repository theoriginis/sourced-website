import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import moment from "moment";
import { searchedEventByPerformer } from "../../redux/searched-events/action.js";
import Loader from "../../components/spinner/spinner.jsx";
import TiktokPixel from "tiktok-pixel";
import { Helmet } from "react-helmet";
import { sports_teams } from "../../utils/sports.js";

class NFLSport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword_searched: "",
      sports_searched: "",
    };
  }
  componentDidMount() {
    let sportToAdd = null;
    let url_segment = this.props.location.pathname.split("/");
    let keyword_searched = url_segment["2"];
    this.setState({
      keyword_searched: keyword_searched,
    });
    if ((keyword_searched = "NFL Football")) {
      sportToAdd = "NFL Football";
    } else if ((keyword_searched = "NBA-Basketball")) {
      sportToAdd = "NBA-Basketball";
    } else if ((keyword_searched = "NHL-Hockey")) {
      sportToAdd = "NHL-Hockey";
    } else if ((keyword_searched = "MLB-Baseball")) {
      sportToAdd = "MLB-Baseball";
    } else {
      sportToAdd = "NCAA-Football";
    }

    // Set the state with the selected sport
    this.setState({ sports_searched: sportToAdd });
  }

  handlePopState = (event) => {
    if (this.props.location.pathname.includes("/events-results")) {
      // Reload the window to refresh the home page
      window.location.reload();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0, 0);
  }

  openSportEvent = (sportName) => {
    if (sportName) {
      //this.props.history.push(`/event-details/${eventId}`);
      this.props.history.push(
        `/events-results/performer-tickets/${sportName.replace(/\s+/g, "-")}`
      );
    }
  };

  render() {
    let sports_page = [];
    if (this.state.keyword_searched === "NFL Football") {
      sports_page = sports_teams.NFL;
    } else if (this.state.keyword_searched === "NBA-Basketball") {
      sports_page = sports_teams.basketballteams;
    } else if (this.state.keyword_searched === "NHL-Hockey") {
      sports_page = sports_teams.NHL;
    } else if (this.state.keyword_searched === "MLB-Baseball") {
      sports_page = sports_teams.MLB;
    } else {
      sports_page = sports_teams.NCAA;
    }
    return (
      <>
        <main>
          <Helmet>
            <title>
              {this.state.keyword_searched.replace(/-/g, " ")} tickets in 2023 –
              Get Yours Now! | Sourced Tickets
            </title>
            <meta
              name="description"
              content={`${this.state.keyword_searched.replace(
                /-/g,
                " "
              )} Tickets 2023 - Secure your seats for the ultimate game day experience. Get your  ${this.state.keyword_searched.replace(
                /-/g,
                " "
              )} tickets now and be part of the action!`}
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
                    <span>
                      {" "}
                      {this.state.keyword_searched.replace(/-/g, " ")}
                    </span>{" "}
                    Teams
                  </h2>

                  <h3 className="eventes-heading"> All Teams </h3>

                  <div className="event_box flow-root teams-name ">
                    <div className="sport-container">
                      <div className="sports-list">
                        {sports_page.map((sport, index) => (
                          <div
                            className="Info sport-item"
                            key={index}
                            onClick={() => this.openSportEvent(sport)}
                          >
                            <h4>{sport}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="unviel_infor">
                    <p>
                      {this.state.keyword_searched === "NFL Football"
                      
                        ? sports_teams.NFL_text
                        : this.state.keyword_searched === "NBA-Basketball"
                        ? sports_teams.NBA_text
                        : this.state.keyword_searched === "NHL-Hockey"
                        ? sports_teams.NHL_text
                        : this.state.keyword_searched === "MLB-Baseball" // Changed from "NBA-Basketball"
                        ? sports_teams.MLB_text // Changed from sports_teams.MLB
                        : sports_teams.NCAA_text
                    }
                    </p>
                    <h2 className="second-heading">
                      Secure Your{" "}
                      {this.state.keyword_searched.replace(/-/g, " ")} Tickets
                      with Sourced Tickets
                    </h2>
                    <p>
                      Don't miss the chance to witness{" "}
                      <span>
                        {this.state.keyword_searched.replace(/-/g, " ")}
                      </span>{" "}
                      live. Follow these steps to secure your tickets:{" "}
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

const mapStateToProps = (state) => ({});
export default withRouter(
  connect(mapStateToProps, { searchedEventByPerformer })(NFLSport)
);
