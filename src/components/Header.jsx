import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Login from "../pages/Login";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { searchedPerformerHeader } from "../redux/searched-events/action.js";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
      user_information: JSON.parse(localStorage.getItem("user_info")),
      inputValue: "",
      search_results: [],
    };
  }
  handleInputChange = (e) => {
    const value = e.target.value;
    if (e.target) this.setState({ inputValue: value });

    // Filter suggestions based on user input
    if (value !== "") {
      let data = {
        performer_name: value,
      };
      this.props.searchedPerformerHeader(data, "performer");
    } else {
      this.setState({
        search_results: [],
      });
    }

    // const filteredSuggestions = this.dummySuggestions.filter((suggestion) =>
    //   suggestion.toLowerCase().includes(value.toLowerCase())
    // );

    // this.setState({ suggestions: filteredSuggestions });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.performer_search_header !== this.props.performer_search_header) {
      if (
        this.props.performer_search_header &&
        this.props.performer_search_header.performer_search_header !== ""
      ) {
        this.setState({
          search_results: this.props.performer_search_header.performer_search_header,
        });
      }
    }
  }
  handleSuggestionClick = (suggestion) => {
    this.setState({ inputValue: suggestion, suggestions: [] });
  };
  loginForm = () => {
    this.setState({
      showLoginForm: true,
    });
  };

  loginClose = () => {
    this.setState({
      showLoginForm: false,
    });
  };
  componentDidMount() {
    this.setState({
      user_information: JSON.parse(localStorage.getItem("user_info")),
    });
  }
  logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  goToHome = () => {
    window.location.href = "/";
  };
  goToLogin = (event) => {
    if (event.target.innerHTML === "Logout") {
      localStorage.clear();
      window.location.href = "/";
    } else {
      this.props.history.push("/login");
    }
    //this.props.history.push("/login");
  };
  handleClearClick = () => {
    this.setState({ inputValue: "", search_results: [] });
  };
  onClickEvent=(eventId)=>{
   
    if(eventId){
      this.props.history.push(`/event-details/${eventId}`)
      this.handleClearClick()
    }
    }
  render() {
    const { inputValue, suggestions } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-md main-nav navigation fixed-top sidebar-left wow">
          <div className="container">
            <div className="collapse navbar-collapse" id="main-navbar">
              <div className="wdith50">
                <a className="navbar-brand" onClick={() => this.goToHome()}>
                  <img
                    src={require("../assets/images/newimages/logo.png")}
                    alt=""
                    className="logo d-none d-md-block"
                  />
                </a>
                <div className="search-box flex">
                  <div className="search-img">
                    <img
                      src={require("../assets/images/newimages/search-nav.png")}
                      alt="sourced"
                    />{" "}
                  </div>
                  <div className="search-div auto-suggest">
                    <span className="searhbar-icons">
                    <input
                      type="text"
                      placeholder="Search For Artist, Team, Event or Venue"
                      value={inputValue}
                      onChange={this.handleInputChange}
                    />
                    {inputValue && (
                     <i class="fa fa-times cross-icon" aria-hidden="true" onClick={this.handleClearClick}></i>
                     
                    )}
                    </span>
                   
                    {this.state.search_results.length > 0 ? (
                      <ul className="suggestions ">
                         <li
                          
                              className="suggestion-list-items"
                            >
                              <div className="suggestion_box">
                                <div className="suggestion_name">
                                  <h2> Suggested Results </h2>
                                </div>
                              </div>
                            </li>
                        {this.state.search_results.length > 0 &&
                          this.state.search_results.map((suggestion, index) => (
                            <li
                              key={index}
                              onClick={()=>this.onClickEvent(suggestion.id)}
                              className="suggestion-list-items"
                            >
                              <div className="suggestion_box">
                                <div className="suggestion_name">
                                  <h5> {suggestion.text.name} </h5>
                                  <h6 className="search-city-name"> {suggestion.city.text.name} - {suggestion.stateProvince.text.name}  </h6>
                                </div>
                              </div>
                            </li>
                          ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="wdith50">
                <div className="float-right header-btn">
                  <div className="button_zal login" onClick={this.goToLogin}>
                    {this.state.user_information ? "Logout" : "Login"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user_info: state.user_info,
  user_added: state.user_added,
  performer_search_header: state.performer_search_header,
});
export default withRouter(
  connect(mapStateToProps, { searchedPerformerHeader })(Header)
);
