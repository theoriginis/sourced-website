import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import SearchBar from "../../components/main-search-bar";
import { mainSearch } from "../../redux/main-search/action";
import { upcomingEvent, evenDetails } from "../../redux/upcoming-event/action";
import moment from "moment";
class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      currentPage: 1,
      event_limit: 10,
    };
  }
  componentDidMount() {
    let url_segment = this.props.location.pathname.split("/");
    let keyword_searched = url_segment["2"];
    let data = {
      search: keyword_searched,
      limit: this.state.event_limit,
      page: this.state.currentPage,
    };
    this.props.mainSearch(data);
  }
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    if (prevProps.search_results !== this.props.search_results) {
      if (
        this.props.search_results &&
        this.props.search_results.search_results !== ""
      ) {
        this.setState({
          search_results: this.props.search_results.search_results,
        });
      }
    }
    if (this.props.match.params.search !== prevProps.match.params.search) {
      let url_segment = this.props.location.pathname.split("/");
      let keyword_searched = url_segment["2"];
      let data = {
        search: keyword_searched,
        limit: this.state.event_limit,
      };
      this.props.mainSearch(data);
    }
  }
  openEvent = async (event_id) => {
    if (event_id !== "") {
      this.props.history.push(`/event-details/${event_id}`);
    }
  };
  goNextPage = () => {
    let url_segment = this.props.location.pathname.split("/");
    let keyword_searched = url_segment["2"];
    let data = {
      search: keyword_searched,
      limit: this.state.event_limit,
      page: this.state.currentPage + 1,
    };
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    this.props.mainSearch(data);
  };
  gotPreviousPage = () =>{
    let url_segment = this.props.location.pathname.split("/");
    let keyword_searched = url_segment["2"];
    let data = {
      search: keyword_searched,
      limit: this.state.event_limit,
      page: this.state.currentPage -1,
    };
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
    this.props.mainSearch(data);
  }
  render() {

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
                  <h2>Event Results</h2>
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
                  {this.state.search_results !== "" &&
                  this.state.search_results.length > 0
                    ? this.state.search_results.map((event) => (
                        <li
                          onClick={() => this.openEvent(event.event_id)}
                          className="events-list"
                        >
                          
                          <div className="wkend_fdx">
                            <div className="cold_img">
                              {" "}
                              <img
                               className="all-events-event-img"
                                src={`https://api.ticketpenguin.co.uk/${event.event_image}`}
                              />
                            </div>
                            <div className="search_details">
                              <h3>{event.event_name}</h3>
                              <p>{event.event_location} </p>
                              
                            </div>
                            <div className="date_events"> 
                            <p>
                                {" "}
                                <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
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
                 
                  {!this.props.search_results.last_page_value ? (
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
  search_results: state.search_results,
});
export default withRouter(
  connect(mapStateToProps, {
    mainSearch,
    evenDetails,
  })(SearchResult)
);
