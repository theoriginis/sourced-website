import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";
import {
  TopPerformerList,
  TopShowsList,
} from "../../redux/top-performers/action.js";
import Loader from "../../components/spinner/spinner.jsx";
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
  onClickArtist = (performerName) => {
    if (performerName) {
      this.props.history.push(`/events-results/performer-tickets/${(performerName).replace(/\s+/g, '-')}`);
    }
  };
  onClickSportsName = (sportsName)=>{
    if(sportsName){
      this.props.history.push(`/sport-search/${sportsName}`);
    }
  }
  onClickEvent = (eventId) => {
    if (eventId) {
      this.props.history.push(`/event-details/${eventId}`);
    }
  };
  render() {
    
    return (
      <div>
        <section className="section events top-events" id="artists">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 wow slideInLeft"
                style={{ animationDuration: "3s" }}
              >
                <div
                  className="col-lg-4 pad10 wow slideUp"
                  style={{ animationDuration: "2s" }}
                >
                  <h3>Top Artists</h3>
                  {this.props.top_performer_list.in_action_performer ?
                   <div className="event_box no-records"><Loader /></div> :
                   this.state.performer_list &&
                    this.state.performer_list.map((perfoermer, key) => (
                      <div className="event_box" onClick={()=>this.onClickArtist((perfoermer.text.name).replace(/\s+/g, '-'))} >
                        <div className="date">
                          {" "}
                          <h3 className="keys-index">{key + 1}</h3>
                        </div>
                        <div className="Info">
                          {" "}
                          <h4>{perfoermer.text.name} </h4>
                        </div>
                      </div>
                    ))
                }
                  
                </div>

                <div
                  className="col-lg-4 pad10 wow slideUp"
                  style={{ animationDuration: "2s" }}
                >
                  <h3>Top Sports</h3>
                  <div className="event_box" onClick={()=>this.onClickSportsName(('NFL Football').replace(/\s+/g, '-'))} >
                    <div className="date">
                      {" "}
                      <h3>1</h3>
                    </div>
                    
                    <div className="Info">
                      {" "}
                      <h4>NFL Football </h4>
                      
                    </div>
                  </div>
                    <div className="event_box" onClick={()=>this.onClickSportsName(('NBA Basketball').replace(/\s+/g, '-'))} >
                    <div className="date">
                      {" "}
                      <h3>2</h3>
                    </div>
                    <div className="Info">
                      {" "}
                      <h4>NBA Basketball </h4>
                    </div>
                  </div>
                    <div className="event_box" onClick={()=>this.onClickSportsName(('NHL Hockey').replace(/\s+/g, '-'))} >
                    <div className="date">
                      {" "}
                      <h3>3</h3>
                    </div>
                    <div className="Info">
                      {" "}
                      <h4>NHL Hockey </h4>
                    </div>
                  </div>
                    <div className="event_box" onClick={()=>this.onClickSportsName(('MLB Baseball').replace(/\s+/g, '-'))} >
                    <div className="date">
                      {" "}
                      <h3>4</h3>
                    </div>
                    <div className="Info">
                      {" "}
                      <h4>MLB Baseball </h4>
                    </div>
                  </div>
                    <div className="event_box" onClick={()=>this.onClickSportsName(('NCAA Football').replace(/\s+/g, '-'))} >
                    <div className="date">
                      {" "}
                      <h3>5</h3>
                    </div>
                    <div className="Info">
                      {" "}
                      <h4>NCAA Football </h4>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 pad10 wow slideUp"
                  style={{ animationDuration: "2s" }}
                >
                  <h3>Top Shows</h3>
                {this.props.top_shows_list.in_action_shows ?
                <div className="event_box no-records"><Loader /></div> :
                this.state.top_shows &&
                  this.state.top_shows.map((shows, key) => (
                    <div className="event_box" onClick={() => this.onClickEvent(`${(shows.text.name).replace(/\s+/g, '-')}-tickets-${(shows.city.text.name).replace(/\s+/g, '-')}-${shows.date.date}/${shows.id}`)}>
                      <div className="date">
                        {" "}
                        <h3>{key + 1}</h3>
                      </div>
                      <div className="Info">
                        {" "}
                        <h4>{shows.text.name} </h4>
                      </div>
                    </div>
                  ))
              }
                  
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
