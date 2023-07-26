import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import SearchBar from "../../components/main-search-bar";
import { mainSearch } from "../../redux/main-search/action";
import { upcomingEvent, evenDetails } from "../../redux/upcoming-event/action";
import moment from "moment";
class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      currentPage: 1,
      event_limit: 10,
      events_lits: "",
    };
  }
  componentDidMount() {

    let data = {
      limit: this.state.event_limit,
      page: this.state.currentPage,
    };
    this.props.upcomingEvent(data);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.event_list !== this.props.event_list) {
      if (this.props.event_list && this.props.event_list.event_list !== "") {
        this.setState({
          events_lits: this.props.event_list.event_list,
        });
      }
    }
  }
  openEvent = async (event_id) => {
    if (event_id !== "") {
      this.props.history.push(`/event-details/${event_id}`);
    }
  };
  goNextPage = () => {
    let data = {
      limit: this.state.event_limit,
      page: this.state.currentPage + 1,
    };
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    this.props.upcomingEvent(data);
  };
  gotPreviousPage = () =>{
    let data = {
      limit: this.state.event_limit,
      page: this.state.currentPage -1,
    };
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
    this.props.upcomingEvent(data);
  }
  render() {
    window.scrollTo({top: 0, behavior: 'smooth'})
    return (
      <>
        <div className="main-search-bar">
          <SearchBar />
        </div>
        <div className="search_results">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 wow slideUp">
                <div className="section-heading text-left">
                  <h2>Events</h2>
                  <p>Showing Upcoming Events </p>
                </div>
                <div className="border_bottom"></div>
              </div>
            </div>
          </div>

          <div className="container-search-results">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 wow slideUp">
                <ul>
                  {this.state.events_lits !== "" &&
                  this.state.events_lits.length > 0
                    ? this.state.events_lits.map((event) => (
                        <li
                          onClick={() => this.openEvent(event.event_id)}
                          className="events-list"
                        >
                          <div className="all-events  wkend_fdx">
                            <figure className="ordr_img-all-events">
                              {" "}
                              <img
                              className="all-events-event-img"
                                src={`https://api.ticketpenguin.co.uk/${event.event_image}`}
                              />
                            </figure>
                            <div className="search_details dtls">
                              <h3>{event.event_name}</h3>
                              <p>{event.event_location} </p>
                              <p>
                                {" "}
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></i>{" "}
                                {moment(event.event_time).format("DD/MM/YYYY")}
                              </p>
                            </div>
                            <div className="search_price">
                              <button
                                onClick={() => this.openEvent(event.event_id)}
                              >
                                Check Tickets
                              </button>
                            </div>
                          </div>
                        </li>
                      ))
                    : ""}
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
                 
                  {!this.props.event_list.last_page_value ? (
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
  event_list: state.event_list,
});
export default withRouter(
  connect(mapStateToProps, {
    upcomingEvent,
  })(AllEvents)
);
