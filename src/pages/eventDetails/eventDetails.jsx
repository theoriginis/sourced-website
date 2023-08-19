import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import moment from "moment";
import { searchedPerformer } from "../../redux/searched-events/action.js";
import Loader from "../../components/spinner/spinner.jsx";
class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      currentPage: 1,
      event_limit: 10,
      keyword_searched: "",
    };
  }
  // componentDidMount() {
  //   let url_segment = this.props.location.pathname.split("/");

  //   let keyword_searched = url_segment["3"];
  //   let search_type = url_segment["2"]
  //   this.setState({
  //     keyword_searched: keyword_searched,
  //   });
  //   let data = {
  //     performer_name: keyword_searched,
  //   };
  //   this.props.searchedPerformer(data,search_type);
  // }
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
                  class="col-lg-3 col-md-3 col-sm-12 col-xs-12 wow slideInLeft"
                 
                >
                  <div class="product_left">
                    <h3>
                      {" "}
                      Back to tickets{" "}
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </h3>
                    <h2> Jake Paul vs Tom Furry </h2>
                    <p> T-Mobile Arena </p>
                    <div class="flex">
                      <div class="date_1">
                        {" "}
                        <p class="t2">
                          {" "}
                          <img src={require("../../assets/images/newimages/calender.png")} alt="sourced" /> March 16{" "}
                        </p>{" "}
                      </div>
                      <div class="time">
                        {" "}
                        <p class="t1">
                          {" "}
                          <img src={require("../../assets/images/newimages/time.png")} alt="sourced" /> 3: 00 PM{" "}
                        </p>{" "}
                      </div>
                    </div>
                    <ul>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div class="ticket_left">
                          <h5> Upper Level 321 - Row 6 </h5>
                          <p> 2 tickets </p>
                        </div>
                        <div class="tick_price">
                          <h6>
                            $58 <span>ea</span>{" "}
                          </h6>
                        </div>
                      </li>
                    </ul>

                    <div class="form-group">
                      <select>
                        <option> $58 ea 2 Tickets </option>
                        <option> Short by Price </option>
                      </select>
                    </div>
                    <div class="form-group">
                      <button> Purchase </button>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-6 col-md-6 col-xs-12 col-sm-12 wow slideInLeft"
                 
                >
                  <div class="ticket_plat">
                    <h3>
                      {" "}
                      Back to tickets{" "}
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </h3>
                    <img src={require("../../assets/images/newimages/pngfind 1.png")}class="img_tick" />
                  </div>
                </div>
                <div
                  class="col-lg-3 col-md-3 col-sm-12 col-xs-12  wow slideInLeft"
                 
                >
                  <div class="product_filter">
                    <h1> Filter Results</h1>
                    <div class="form-group">
                      <select>
                        <option> Short by Price </option>
                        <option> Short by Price </option>
                      </select>
                    </div>
                    <div class="form-group">
                      <lable>Number of Tickets </lable>
                      <ul>
                        <li> 1</li>
                        <li class="active"> 2</li>
                        <li> 3</li>
                        <li> 4</li>
                        <li> 5</li>
                        <li> 6</li>
                        <li> 7</li>
                        <li> 8+</li>
                      </ul>
                    </div>
                    <div class="form-group">
                      <lable>Price Per Ticket </lable>
                      <div style={{color:'white'}}>Range slider here</div>
                    </div>
                    <div class="form-group">
                      <div class="br"> </div>
                    </div>
                    <div class="form-group">
                      <button> Filter Results </button>
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

const mapStateToProps = (state) => ({
  performer_search: state.performer_search,
});
export default withRouter(
  connect(mapStateToProps, { searchedPerformer })(EventDetails)
);
