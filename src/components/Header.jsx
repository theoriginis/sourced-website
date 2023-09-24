import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Login from "../pages/Login";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
      user_information: JSON.parse(localStorage.getItem("user_info")),
      inputValue: "",
      suggestions: [],
    };
    this.dummySuggestions = [
      "Google",
      "Facebook",
      "Amazon",
      "Apple",
      "Microsoft",
    ];
  }
  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ inputValue: value });

    // Filter suggestions based on user input
    const filteredSuggestions = this.dummySuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ suggestions: filteredSuggestions });
  };

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
  componentDidUpdate() {}
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
                    <input
                      type="text"
                      placeholder="Search For Artist, Team, Event or Venue"
                      value={inputValue}
                      onChange={this.handleInputChange}
                    />
                    <ul className="suggestions ">
                      {suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          onClick={() => this.handleSuggestionClick(suggestion)}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
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
});
export default withRouter(connect(mapStateToProps, {})(Header));
