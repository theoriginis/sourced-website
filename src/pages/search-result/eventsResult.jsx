import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import moment from "moment";
import { searchedPerformer } from "../../redux/searched-events/action.js";
import Loader from "../../components/spinner/spinner.jsx";
class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      currentPage: 1,
      event_limit: 10,
      keyword_searched: "",
    };
  }
  componentDidMount() {
    let url_segment = this.props.location.pathname.split("/");
   
    let keyword_searched = url_segment["3"];
    let search_type = url_segment["2"]
    this.setState({
      keyword_searched: keyword_searched,
    });
    let data = {
      performer_name: keyword_searched,
    };
    this.props.searchedPerformer(data,search_type);
  }
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    if (prevProps.performer_search !== this.props.performer_search) {
      if (
        this.props.performer_search &&
        this.props.performer_search.performer_search !== ""
      ) {
        this.setState({
          search_results: this.props.performer_search.performer_search,
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
  gotPreviousPage = () => {
    let url_segment = this.props.location.pathname.split("/");
    let keyword_searched = url_segment["2"];
    let data = {
      search: keyword_searched,
      limit: this.state.event_limit,
      page: this.state.currentPage - 1,
    };
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
    this.props.mainSearch(data);
  };
  render() {
    
    return (
      <>
        <main>
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
                    Search Results for{" "}
                    <span> '{this.state.keyword_searched}'</span>
                  </h2>
                  <ul className="tags">
                    <li>
                      {" "}
                      <img
                        src={require("../../assets/images/newimages/c1.png")}
                        alt="sourced"
                      />{" "}
                      location{" "}
                    </li>
                    <li>
                      {" "}
                      <img
                        src={require("../../assets/images/newimages/wallet.png")}
                        alt="sourced"
                      />{" "}
                      Price{" "}
                    </li>
                    <li>
                      {" "}
                      <img
                        src={require("../../assets/images/newimages/scan.png")}
                        alt="sourced"
                      />{" "}
                      Date{" "}
                    </li>
                  </ul>
                  <h5 className="eventes-heading"> All Events </h5>
                  {this.state.search_results &&
                  this.state.search_results.length > 0 ? (
                    this.state.search_results.map((event, key) => (
                      <div className="event_box">
                        <div className="date">
                          <h3>{moment(event.date.date).format("MM/D")} </h3>{" "}
                          <p> {moment(event.date.date).format("ddd")} </p>{" "}
                        </div>
                        <div className="Info">
                          <h3>{event.text.name} </h3>
                          <p> {event.venue.text.name}</p>
                        </div>
                        <div className="date_1">
                          <p className="t2">
                            <img
                              src={require("../../assets/images/newimages/calender.png")}
                              alt="sourced"
                            />{" "}
                            {moment(event.date.date).format("MMMM Do")}
                          </p>{" "}
                        </div>
                        <div className="time">
                          {" "}
                          <p className="t1">
                            {" "}
                            <img
                              src={require("../../assets/images/newimages/time.png")}
                              alt="sourced"
                            />{" "}
                            {event.date.text.time}
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
                    ))
                  ) : (
                    // <div className="event_box no-records">No Records Found</div>
                    <div className="event_box no-records"><Loader /></div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  performer_search: state.performer_search,
});
export default withRouter(
  connect(mapStateToProps, { searchedPerformer })(SearchResult)
);
