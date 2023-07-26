import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";
import { topPerformer } from "../../redux/performers/action";
import star1 from "../../assets/images/icons/star1.png";
import star3 from "../../assets/images/icons/star3.png";
import star2 from "../../assets/images/icons/star2.png";
import star6 from "../../assets/images/icons/star6.png";

class LocalEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      performer_list: "",
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.performer_list !== this.props.performer_list) {
      if (
        this.props.performer_list &&
        this.props.performer_list.performer_list !== ""
      ) {
        if (this.props.performer_list.performer_list.length <= 8) {
          this.setState({
            performer_list: this.props.performer_list.performer_list,
          });
        } else {
          this.setState({
            performer_list: this.props.performer_list.performer_list.slice(
              0,
              8
            ),
          });
        }
      }
    }
  }
  componentDidMount() {
    this.props.topPerformer();
  }
  openEvent = async (artist_id) => {
    if (artist_id !== "") {
      this.props.history.push(`/performers-details/${artist_id}`);
    }
  };
  render() {
    return (
      <div>
        <section class="section events" id="events">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-12 wow slideInLeft"
                style={{animationDuration: "3s"}}
              >
                <h2 class="wow slideInLeft"  style={{animationDuration: "1s"}}>
                  Local Events Near <span>New York</span>
                </h2>
                <div class="col-lg-6 pad10">
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
                <div class="col-lg-6 pad10">
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

                <div class="col-lg-6 pad10">
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

                <div class="col-lg-6 pad10">
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

                <div class="col-lg-6 pad10">
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
                <div class="col-lg-6 pad10">
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

                <div class="col-lg-6 pad10">
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

                <div class="col-lg-6 pad10">
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
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  performer_list: state.performer_list,
});
export default withRouter(
  connect(mapStateToProps, {
    topPerformer,
  })(LocalEvents)
);
