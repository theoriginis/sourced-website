import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";

class UnmatchedFeature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular_events: "",
      activeItem: -1,
    };
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.popular_event_list !== this.props.popular_event_list) {
  //     if (
  //       this.props.popular_event_list &&
  //       this.props.popular_event_list.popular_event_list !== ""
  //     ) {
  //       //let firstEight = this.props.event_list.event_list.slice(0, 8);
  //       this.setState({
  //         popular_events: this.props.popular_event_list.popular_event_list,
  //       });
  //     }
  //   }
  // }
  // componentDidMount() {
  //   this.props.popularEventsList();
  // }
  // openEvent = async (event_id) => {
  //   if (this.props.popular_event_list.popular_event_list) {
  //     this.props.history.push(`/event-details/${event_id}`);
  //   }
  // };
  // mouseEnter = (index) => {
  //   this.setState({
  //     activeItem: index,
  //   });
  // };
  // mouseLeave = (index) => {
  //   this.setState({
  //     activeItem: -1,
  //   });
  // };
  render() {
    return (
      <div>
        <section className="section unmatched-feature" id="feat">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 wow slideInLeft"
                style={{animationDuration: "3s"}}
              >
                <h3
                  className="wow slideInLeft section-heading"
                  style={{animationDuration: "1s"}}
                >
              
                  <span>Unmatched</span> Features
                </h3>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow slideUp"
                style={{animationDuration: "3s"}}
              >
                <div className="feat_box">
                  <h4> 100% Buyer Satisfaction</h4>
                  <p>
                    Our number one priority is to make your ticket buying
                    experience easy and hassle-free, saving you time and money.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow slideUp"
                style={{animationDuration: "3s"}}
              >
                <div className="feat_box">
                  <h4> Lowest Fees Guaranteed</h4>
                  <p>
                    Discover the industry's lowest fees at Sourced Tickets,
                    where saving you money is our top priority.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow slideUp"
                style={{animationDuration: "3s"}}
              >
                <div className="feat_box">
                  <h4> Safe and Secure Transactions </h4>
                  <p>
                    No need to worry about scams. We guarantee 100% authentic
                    ticket sales transactions.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12 wow slideUp"
                style={{animationDuration: "3s"}}
              >
                <div className="feat_box">
                  <h4> Full Service Customer Support </h4>
                  <p>
                    Do you have any questions, issues, or concerns? We are here
                    to assist you with any inquiries that may arise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});
export default withRouter(
  connect(mapStateToProps, {

  })(UnmatchedFeature)
);
