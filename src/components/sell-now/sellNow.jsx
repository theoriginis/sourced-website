import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";
import { popularEventsList } from "../../redux/popular-events/action";
class SellNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular_events: "",
      activeItem: -1,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.popular_event_list !== this.props.popular_event_list) {
      if (
        this.props.popular_event_list &&
        this.props.popular_event_list.popular_event_list !== ""
      ) {
        //let firstEight = this.props.event_list.event_list.slice(0, 8);
        this.setState({
          popular_events: this.props.popular_event_list.popular_event_list,
        });
      }
    }
  }
  componentDidMount() {
    this.props.popularEventsList();
  }
  openEvent = async (event_id) => {
    if (this.props.popular_event_list.popular_event_list) {
      this.props.history.push(`/event-details/${event_id}`);
    }
  };
  mouseEnter = (index) => {
    this.setState({
      activeItem: index,
    });
  };
  mouseLeave = (index) => {
    this.setState({
      activeItem: -1,
    });
  };
  render() {
    return (
      <div>
        <section id="sell">
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="col-lg-12 text-center start-p wow slideUp"
                style={{animationDuration: "3s"}}
              >
                <div class="sell_box">
                  <h2>
                    Lower fees. Increased sales. Faster payment. <br /> Sell
                    now!{" "}
                  </h2>
                  <p>100% customer satisfaction</p>
                  <div class="hiden_quantity">
                    <button class="conditions">
                      {" "}
                      <a href="#">Create Account </a>
                    </button>
                  </div>
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
  popular_event_list: state.popular_event_list,
});
export default withRouter(
  connect(mapStateToProps, {
    popularEventsList,
  })(SellNow)
);
