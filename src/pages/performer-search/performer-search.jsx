import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import SearchBar from "../../components/main-search-bar";
import { mainSearch } from "../../redux/main-search/action";
import { upcomingEvent, evenDetails } from "../../redux/upcoming-event/action";
import { perFormerDetails } from "../../redux/performers/action";
import moment from "moment";
class PerformerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist_details: "",
 
      currentPage: 1,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    let url_segment = this.props.location.pathname.split("/");
    let artist_id = url_segment["2"];

    let data = {
      artist_id: artist_id,
      page: this.state.currentPage,
    };
    this.props.perFormerDetails(data);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.artist_details !== this.props.artist_details) {
      if (this.props.artist_details && this.props.artist_details !== "") {
        this.setState({
          artist_details: this.props.artist_details,
        });
      }
    }
  }
  openEvent = async (event_id) => {
    if (event_id !== "") {
      await this.props.evenDetails(event_id);
    }
    if (this.state.artist_details.events.length) {
      //this.props.history.push(`/event-details/${event_id}`);
      window.location.href = `/event-details/${event_id}`;
    }
  };
  goNextPage = () => {
    let url_segment = this.props.location.pathname.split("/");
    let artist_id = url_segment["2"];
    let data = {
      artist_id: artist_id,
      page: this.state.currentPage + 1,
    };
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    this.props.perFormerDetails(data);
  };
  gotPreviousPage = () =>{
    let url_segment = this.props.location.pathname.split("/");
    let artist_id = url_segment["2"];
    let data = {
      artist_id: artist_id,
      page: this.state.currentPage -1,
    };
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
    this.props.perFormerDetails(data);
  }
  render() {
  
    return (
      <>
        <title>{this.state.artist_details !== "" ? this.state.artist_details.artist_name:""} Tickets
              </title>
        <div className="main-search-bar">
          <SearchBar />
        </div>
        <div className="artist_details">
          <div className="flex performer-search-artist-box">
            <div className="search_image performer-pro">
              {" "}
              <img
                src={
                  this.state.artist_details !== ""
                    ? `https://api.ticketpenguin.co.uk/${this.state.artist_details.artist_image}`
                    : ""
                    
                }
                alt='artist-img'
              />
            </div>
            <div className="search_details padding-12">
              <h3 className="artist_name">
                {this.state.artist_details !== ""
                  ? this.state.artist_details.artist_name
                  : ""}{" "}
              </h3>
              <p className="showing_upcoming_events">Upcoming Events </p>
            </div>
          </div>

          <div className="container-search-results">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 wow slideUp">
                <ul>
                  {this.state.artist_details !== "" &&
                  this.state.artist_details.events.length > 0 ? (
                    this.state.artist_details.events.map((event) => (
                      <li
                        onClick={() => this.openEvent(event.event_id)}
                        className="events-list"
                      >
                        <div className="wkend_fdx performer-search-main">
                          <div className="performer-search">
                            {" "}
                            <img
                              className="performer-search-event-image"
                              src={`https://api.ticketpenguin.co.uk/${event.event_image}`}
                              alt={`events-img-${event.event_name}`}
                            />
                          </div>
                          <div className="upoming-events-details">
                            <div className="performer-search-event-name">
                              {event.event_name}
                            </div>
                            <p className="performer-search-event-location">
                              {" "}
                              {event.event_location}{" "}
                            </p>
                          </div>
                          <div className="performer-search-event-date">
                            <span className="performer-search-calendar-icon">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <p className="performer-search-event-dates">
                              {moment(event.event_time).format("DD/MM/YYYY")}
                            </p>
                          </div>
                          <div className="performer-search-check-results">
                            {/* <h5>
                                <span>from</span> £100
                              </h5> */}
                            <button
                              className="check-tick-bts"
                              onClick={() => this.openEvent(event.event_id)}
                            >
                              Check Tickets
                            </button>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>
                      <div className="no-events-found">No events found!</div>
                    </li>
                  )}
                </ul>

                <div className="flex pegi_top">
                  {this.state.currentPage == 1
                  ?
                  <div className="left_btn-disabled">
                  <button>Previous </button>
                </div>:
                 <div className="left_btn">
                 <button onClick={() => this.gotPreviousPage()}>Previous </button>
               </div>
                  }
                 
                  {!this.props.last_page_value ? (
                    <div className="right_btn">
                      <button onClick={() => this.goNextPage()}>Next </button>
                    </div>
                  ) : (
                    <div className="right_btn-disabled">
                      <button>Next </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  artist_details: state.artist_details.artist_details,
  last_page_value: state.artist_details.last_page_value
});
export default withRouter(
  connect(mapStateToProps, {
    mainSearch,
    evenDetails,
    perFormerDetails,
  })(PerformerSearch)
);
