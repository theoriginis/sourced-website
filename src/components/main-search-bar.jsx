import React, { Component } from "react";
import history from "../history";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { mainSearch } from "../redux/main-search/action";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      selectSearch: "event",
      search_results:''
    };
  }
  setInputValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  searchResult = () => {
    if (this.state.inputValue !== "") {
        this.props.history.push(`/events-results/${this.state.inputValue}`);
    }
  };
  handleChange = (event) => {
    this.setState({
      selectSearch: event.target.value,
    });
  };

 
  render() {

    return (
      <div className="search_section" id="main-search-box">
        <div className="">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 wow slideUp">
              <div className="flex search_box">
                <div className="input_search banner_srch">
                  <input
                    type="text"
                    placeholder="Search for an Event, Artist or Performer"
                    value={this.state.inputValue}
                    onChange={this.setInputValue}
                  />{" "}
                </div>
                {/* <div>
                  <select
                    className="select-option"
                    value={this.state.selectSearch}
                    onChange={(e) => this.handleChange(e)}
                  >
                     <option value="event">Events</option>
                    <option value="artist">Artist</option>

                   
                  </select>
                </div> */}
                <div className="search_button">
                  {" "}
                  <button onClick={this.searchResult}>
                    Search{" "}
                    <i class="fa fa-search " aria-hidden="true"></i>{" "}
                  </button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search_results: state.search_results,
});
export default withRouter(
  connect(mapStateToProps, {
    mainSearch,
  })(SearchBar)
);
