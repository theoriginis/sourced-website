import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";
import {
  TopPerformerList,
  TopShowsList,
} from "../../redux/top-performers/action.js";
class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular_events: "",
      activeItem: -1,
      performer_list: "",
      top_shows: "",
    };
  }
  componentDidMount() {
    this.props.TopPerformerList();
    this.props.TopShowsList();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.top_performer_list !== this.props.top_performer_list) {
      if (
        this.props.top_performer_list &&
        this.props.top_performer_list.top_performer_list !== ""
      ) {
        this.setState({
          performer_list: this.props.top_performer_list.top_performer_list,
        });
      }
    }
    if (prevProps.top_shows_list !== this.props.top_shows_list) {
      if (
        this.props.top_shows_list &&
        this.props.top_shows_list.top_shows_list !== ""
      ) {
        this.setState({
          top_shows: this.props.top_shows_list.top_shows_list,
        });
      }
    }
  }

  render() {
    console.log("props.......", this.state.top_shows);
    return (
      <div>
        <section class="section events" id="artists">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-12 wow slideInLeft"
                style={{ animationDuration: "3s" }}
              >
                <div
                  class="col-lg-4 pad10 wow slideUp"
                  style={{ animationDuration: "2s" }}
                >
                  <h1> Artists</h1>
                  {this.state.performer_list &&
                    this.state.performer_list.map((perfoermer, key) => (
                      <div class="event_box" >
                        <div class="date">
                          {" "}
                          <h3>{key + 1}</h3>
                        </div>
                        <div class="Info">
                          {" "}
                          <h3>{perfoermer.text.name} </h3>
                        </div>
                      </div>
                    ))}
                </div>

                <div
                  class="col-lg-4 pad10 wow slideUp"
                  style={{ animationDuration: "2s" }}
                >
                  <h1>Top Sports</h1>
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>1</h3>
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>NFL Football </h3>
                    </div>
                  </div>
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>2</h3>
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>NBA Basketball </h3>
                    </div>
                  </div>
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>3</h3>
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>NHL Hockey </h3>
                    </div>
                  </div>
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>4</h3>
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>MLB Baseball </h3>
                    </div>
                  </div>
                  <div class="event_box">
                    <div class="date">
                      {" "}
                      <h3>5</h3>
                    </div>
                    <div class="Info">
                      {" "}
                      <h3>NCAA Football </h3>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 pad10 wow slideUp"
                  style={{ animationDuration: "2s" }}
                >
                  <h1>Top Shows</h1>

                  {this.state.top_shows &&
                    this.state.top_shows.map((shows, key) => (
                      <div class="event_box">
                        <div class="date">
                          {" "}
                          <h3>{key + 1}</h3>
                        </div>
                        <div class="Info">
                          {" "}
                          <h3>{shows.text.name} </h3>
                        </div>
                      </div>
                    ))}
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
  top_performer_list: state.top_performer_list,
  top_shows_list: state.top_shows_list,
});
export default withRouter(
  connect(mapStateToProps, {
    TopPerformerList,
    TopShowsList,
  })(TopSection)
);
