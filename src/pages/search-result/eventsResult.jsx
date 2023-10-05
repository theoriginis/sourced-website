import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import moment from "moment";
import { searchedEventByPerformer } from "../../redux/searched-events/action.js";
import Loader from "../../components/spinner/spinner.jsx";
class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      original_results:"",
      currentPage: 1,
      event_limit: 10,
      keyword_searched: "",
      opneFilterBox:false,
      inputValueFilter:""
    };
  }
  componentDidMount() {
    window.addEventListener("beforeunload", this.handlePopState);
    this.getEventByPerformer();
  }
  componentWillUnmount() {
    // Remove the click event listener when the component unmounts
//document.removeEventListener("click", this.handleDocumentClick);
  }
  handlePopState = (event) => {
    console.log('in the event results')
    if (this.props.location.pathname.includes("/events-results")) {
      // Reload the window to refresh the home page
      window.location.reload();
    }
  };
  // componentWillUnmount() {
  //   // Remove the popstate event listener when the component unmounts
  //   window.removeEventListener('beforeunload', this.handlePopState);
  // }
  getEventByPerformer() {
    let url_segment = this.props.location.pathname.split("/");

    let keyword_searched = url_segment["3"];

    this.setState({
      keyword_searched: keyword_searched,
    });
    let data = {
      performer_name: keyword_searched.replace(/-/g, " "),
    };

    this.props.searchedEventByPerformer(data);
  }
  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0, 0);
    if (
      prevProps.searched_events_by_performer !==
      this.props.searched_events_by_performer
    ) {
      if (this.props.location !== prevProps.location) {
        // Call the API again when the URL updates
        this.getEventByPerformer();
      }

      this.setState({
        search_results: this.props.searched_events_by_performer,
        original_results:this.props.searched_events_by_performer
      });
    }
  }
  openLocationFilter(){
    this.setState({
      opneFilterBox:!this.state.opneFilterBox
    })
  }
  handleInputChangeFilter = (e) => {
    const value = e.target.value;
    this.setState({
      inputValueFilter:value
    })
  };
  fliterEventsByLocation=()=>{
      const filteredArray = this.state.original_results.filter((item) =>
        item.city.text.name.toLowerCase().includes(this.state.inputValueFilter.toLowerCase())|| item.stateProvince.text.name.toLowerCase().includes(this.state.inputValueFilter.toLowerCase())
      );
      // Set the filtered array in the component's state
      this.setState({ search_results: filteredArray});
    
  }
  removeFilter = ()=>{
    this.setState({ search_results: this.state.original_results,inputValueFilter:''});
  }
  onClickEvent = (eventId) => {
    if (eventId) {
      //this.props.history.push(`/event-details/${eventId}`);
      window.location.href = `/event-details/${eventId}`
    }
  };
  render() {
    const { inputValueFilter, filteredArray } = this.state;
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
                    <span>
                      {" "}
                      '{this.state.keyword_searched.replace(/-/g, " ")}'
                    </span>
                  </h2>
                  <ul className="tags">
                    <li onClick={()=>this.openLocationFilter()}>
                      {" "}
                      <img
                        src={require("../../assets/images/newimages/c1.png")}
                        alt="sourced"
                      />{" "}
                      location{" "}
                      
                    </li>
                    {this.state.opneFilterBox ?
                      <div className="location-filter-box">
                        <input
                        type="text"
                        placeholder="Search By Location"
                        value={inputValueFilter}
                        onChange={this.handleInputChangeFilter}
                        className="header-search-bar"
                      />
                      <div  class="filter-apply" onClick={() => this.fliterEventsByLocation()}>Apply</div>
                      <div class="filter-clear"onClick={() => this.removeFilter()}>Clear</div>
                        </div>:''}
                  </ul>
                  <h5 className="eventes-heading"> All Events </h5>
                  {this.props.in_action_search_by_performer ? (
                    <div className="event_box no-records">
                      <Loader />
                    </div>
                  ) : this.state.search_results &&
                    this.state.search_results.length > 0 ? (
                    this.state.search_results.map((event, key) => (
                      <div
                        className="event_box"
                        onClick={() =>
                          this.onClickEvent(
                            `${(event.text.name).replace(/\s+/g, '-')}-tickets-${(event.city.text.name).replace(/\s+/g, '-')}-${event.date.date}/${event.id}`
                          )
                        }
                      >
                        <div className="date">
                          <h3>{moment(event.date.date).format("MM/D")} </h3>{" "}
                          <p> {moment(event.date.date).format("ddd")} </p>{" "}
                        </div>
                        <div className="Info">
                          <h3>{event.text.name} </h3>
                          <p> {event.city.text.name}, {event.stateProvince.text.name}</p>
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
                    <div className="event_box no-records">No recors Found</div>
                  )}

                  <div className="unviel_infor">
                    <h1>
                      {" "}
                      Unveil the Magic of Live Events with Sourced Tickets{" "}
                    </h1>
                    <p>
                      {" "}
                      Embark on a journey through the live action of{" "}
                      <span>Team Name</span>, a sensation that has captured
                      hearts across the globe.{" "}
                    </p>
                    <h1>
                      Secure Your <span>Team Name</span> Tickets with Sourced
                      Tickets{" "}
                    </h1>
                    <h1>
                      Don't miss the chance to witness <span>Team Name</span>{" "}
                      live. Follow these steps to secure your tickets:{" "}
                    </h1>

                    <p>
                      {" "}
                      Explore <span>Team Name</span> upcoming events on Sourced
                      Tickets to find an event near you.
                    </p>
                    <p>
                      {" "}
                      Click the "Tickets" button next to your chosen event to
                      proceed.
                    </p>
                    <p>
                      {" "}
                      Utilize the interactive seating chart to select your
                      desired seats and price range.
                    </p>
                    <p>
                      {" "}
                      Finalize your order by clicking "Buy" and entering your
                      payment and shipping details.
                    </p>
                    <p>
                      {" "}
                      Rest assured that your <span>Team Name</span> tickets from
                      Sourced Tickets will arrive in time for the event.
                    </p>

                    <h1>
                      {" "}
                      Accessible <span>Team Name </span>Tickets at Sourced
                      Tickets:
                    </h1>
                    <p>
                      {" "}
                      Whether you're on a budget or seeking premium experiences,
                      Sourced Tickets offers an array of<span>
                        {" "}
                        Team Name
                      </span>{" "}
                      ticket options. Revel in <span>Team Name</span>{" "}
                      captivating performances without compromising your budget.
                    </p>

                    <h1>
                      Sourced Tickets: Your Trusted Source for{" "}
                      <span>Team Name</span> Tickets:{" "}
                    </h1>
                    <p>
                      With Sourced Tickets, you're guaranteed access to{" "}
                      <span>Team Name</span> tickets, even for highly
                      anticipated events. Secure your <span>Team Name</span>{" "}
                      tickets through Sourced Tickets.
                    </p>

                    <p>
                      {" "}
                      Uncover the excitement of live events with{" "}
                      <span>Team Name</span> captivating performances, brought
                      to you by Sourced Tickets.
                    </p>

                    <p>
                      {" "}
                      Stay tuned for updates on <span>Team Name</span> events
                      for today and beyond. Visit our website to explore our
                      full range of <span>Team Name</span> tickets and secure
                      your spot in the crowd.
                    </p>

                    <p>
                      {" "}
                      Enjoy peace of mind with our 100% Buyer Guarantee,
                      ensuring the authenticity and timely delivery of your{" "}
                      <span>Team Name </span>tickets.
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

const mapStateToProps = (state) => ({
  searched_events_by_performer:
    state.searched_events_by_performer.searched_events_by_performer,
  in_action_search_by_performer:
    state.searched_events_by_performer.in_action_search_by_performer,
});
export default withRouter(
  connect(mapStateToProps, { searchedEventByPerformer })(SearchResult)
);
