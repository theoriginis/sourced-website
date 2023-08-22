import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import moment from "moment";
import { searchedPerformer } from "../../redux/searched-events/action.js";
import Loader from "../../components/spinner/spinner.jsx";
import { EventInformation } from "../../utils/apis";
import { Helmet } from "react-helmet";
import { ViewMap } from "../../utils/apis.js";
class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      currentPage: 1,
      event_limit: 10,
      keyword_searched: "",
      event_details: "",
      map_view: "",
    };
  }
  componentDidMount() {
    let url_segment = this.props.location.pathname.split("/");
    let event_id = url_segment["2"];
    if (event_id) {
      EventInformation(event_id).then((eventInfo) => {
        if (eventInfo.data) {
          this.setState({
            event_details: eventInfo.data.data,
          });
        } else {
          this.setState({ event_details: eventInfo.data.data });
        }
      });
    }
    const seaticsScript = document.createElement("script");
    ViewMap(event_id).then((response) => {
      console.log("sdfsdfdsfdsf", response);
      if (response) {
        seaticsScript.innerHTML = response.data;
        seaticsScript.async = true;

        document.body.appendChild(seaticsScript);
      }
    });
  }

  // componentDidUpdate(prevProps) {
  //   window.scrollTo(0, 0);
  //   if (prevProps.performer_search !== this.props.performer_search) {
  //     if (
  //       this.props.performer_search &&
  //       this.props.performer_search.performer_search !== ""
  //     ) {
  //       this.setState({
  //         search_results: this.props.performer_search.performer_search,
  //       });
  //     }
  //   }
  //   if (this.props.match.params.search !== prevProps.match.params.search) {
  //     let url_segment = this.props.location.pathname.split("/");
  //     let keyword_searched = url_segment["2"];
  //     let data = {
  //       search: keyword_searched,
  //       limit: this.state.event_limit,
  //     };
  //     this.props.mainSearch(data);
  //   }
  // }
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
          <section class="section events search_results" id="products">
            <div class="container">
              <div class="row">
                <div
                  id="tn-maps"
                  role="main"
                  className="seatics"
                  style={{ height: "800px" }}
                >
                  {/* The Seatics map widget will be rendered here */}
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
  connect(mapStateToProps, { searchedPerformer })(EventDetails)
);
