import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

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
  // componentDidMount() {
  //   let url_segment = this.props.location.pathname.split("/");
  //   let keyword_searched = url_segment["2"];
  //   let data = {
  //     search: keyword_searched,
  //     limit: this.state.event_limit,
  //     page: this.state.currentPage,
  //   };
  //   this.props.mainSearch(data);
  // }
  // componentDidUpdate(prevProps) {
  //   window.scrollTo(0, 0);
  //   if (prevProps.search_results !== this.props.search_results) {
  //     if (
  //       this.props.search_results &&
  //       this.props.search_results.search_results !== ""
  //     ) {
  //       this.setState({
  //         search_results: this.props.search_results.search_results,
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
            <section class="section events search_results" id="events">
              <div class="container">
                <div class="row">
                  <div
                    class="col-lg-12 padding-search wow slideInLeft"
                    style={{animationDuration: '3s'}}
                  >
                    <h2 class="wow slideInLeft"  style={{animationDuration: '1s'}}>
                      Search Results for <span>‘Jake Paul’</span>
                    </h2>
                    <ul class="tags">
                      <li>
                        {" "}
                        <img src="img/c1.png" alt="sourced" /> location{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="img/wallet.png" alt="sourced" /> Price{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="img/scan.png" alt="sourced" /> Date{" "}
                      </li>
                    </ul>
                    <h5> All Games </h5>
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
                      <div class="date_1">
                        {" "}
                        <p class="t2">
                          {" "}
                          <img src="img/calender.svg" alt="sourced" /> March 16{" "}
                        </p>{" "}
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
                      <div class="date_1">
                        {" "}
                        <p class="t2">
                          {" "}
                          <img src="img/calender.svg" alt="sourced" /> March 16{" "}
                        </p>{" "}
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
                      <div class="date_1">
                        {" "}
                        <p class="t2">
                          {" "}
                          <img src="img/calender.svg" alt="sourced" /> March 16{" "}
                        </p>{" "}
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
                      <div class="date_1">
                        {" "}
                        <p class="t2">
                          {" "}
                          <img src="img/calender.svg" alt="sourced" /> March 16{" "}
                        </p>{" "}
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
                      <div class="date_1">
                        {" "}
                        <p class="t2">
                          {" "}
                          <img src="img/calender.svg" alt="sourced" /> March 16{" "}
                        </p>{" "}
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
                      <div class="date_1">
                        {" "}
                        <p class="t2">
                          {" "}
                          <img src="img/calender.svg" alt="sourced" /> March 16{" "}
                        </p>{" "}
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
                      <div class="date_1">
                        {" "}
                        <p class="t2">
                          {" "}
                          <img src="img/calender.svg" alt="sourced" /> March 16{" "}
                        </p>{" "}
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
                      <div class="date_1">
                        {" "}
                        <p class="t2">
                          {" "}
                          <img src="img/calender.svg" alt="sourced" /> March 16{" "}
                        </p>{" "}
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
                </div>
              </div>
            </section>
          </main>
     
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(SearchResult));
