import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Login from "../pages/Login";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { searchedPerformerHeader } from "../redux/searched-events/action.js";
import moment from "moment";
import Sidebar from "./sidebar/sidebar";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
      user_information: JSON.parse(localStorage.getItem("user_info")),
      inputValue: "",
      search_results: [],
      showDiv: false,
      isSidebarOpen: false
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
  };
  componentDidUpdate(prevProps) {
    if (
      prevProps.performer_search_header !== this.props.performer_search_header
    ) {
      this.setState({
        search_results: this.props.performer_search_header,
      });
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
    document.addEventListener("click", this.handleDocumentClick);
    this.setState({
      user_information: JSON.parse(localStorage.getItem("user_info")),
    });
  }
  componentWillUnmount() {
    // Remove the click event listener when the component unmounts
    document.removeEventListener("click", this.handleDocumentClick);
  }
  handleDocumentClick = (event) => {
    const inputElement = event.target.outerHTML.includes("header-search-bar");
    if (!inputElement) {
      // An input element was found within the clicked element
      //this.setState({showDiv:false})
      this.handleClearClick();
    } else {
      // No input element was found within the clicked element
      console.log("No input element found within the clicked element.");
   
    }
  };
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
  onClickEvent = (eventId) => {
    if (eventId) {
      this.setState({ showDiv: false });
      //this.props.history.push(`/event-details/${eventId}`)
      this.props.history.push(
        `/events-results/performer-tickets/${eventId.replace(/\s+/g, "-")}`
      );
      this.handleClearClick();
    }
  };
  toggleSidebar = () => {
    this.setState((prevState) => ({
      sidebarOpen: !prevState.sidebarOpen
    }));
  };
  closeSidebar = () => {
    this.setState({
      sidebarOpen: false
    });
  };
  handleKeyPress = (event) => {
    if (event.key === "Enter" && this.state.inputValue != "") {
      this.setState({ showDiv: false });
      this.props.history.push(
        `/events-results/performer-tickets/${this.state.inputValue.replace(
          /\s+/g,
          "-"
        )}`
      );
    }
  };
  openSearchDiv = () => {
    this.setState({
      showDiv: !this.state.showDiv,
    });
    //document.querySelector(".search_icons").style.display = "none";
  };
  render() {
    // if(this.state.showDiv){
    //   this.setState({
    //     showDiv:false
    //   })
    // }
    const { inputValue, suggestions } = this.state;
    const { sidebarOpen } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-md fixed-top main-nav navigation  sidebar-left wow">
          <div className="container">
            <div className="collapse navbar-collapse" id="main-navbar">
              <div className="source_logo_left">
                <a className="navbar-brand" onClick={() => this.goToHome()}>
                  <img
                    src={require("../assets/images/logo.png")}
                    alt=""
                    className="logo_mobile"
                  />
                  {/* <div>
                    <img
                      src={require("../assets/images/newimages/logo.png")}
                      alt=""
                      className="logo d-md-block"
                    />
                  </div> */}
                </a>
              
              </div>

              <div className="search_bar_right text-right">
                <div className="flex_profile">
                  {this.state.showDiv ? (
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
                            placeholder="Search for Artist, Team, or Performer"
                            value={inputValue}
                            onChange={this.handleInputChange}
                            onKeyPress={this.handleKeyPress}
                            className="header-search-bar"
                          />
                          {inputValue && (
                            <i
                              className="fa fa-times cross-icon"
                              aria-hidden="true"
                              onClick={this.handleClearClick}
                            ></i>
                          )}
                        </span>
                      </div>

                      {this.state.search_results.length > 0 ? (
                        <div className="suggestions">
                          <ul>
                            <li className="suggestion-list-items">
                              <div className="suggestion_box">
                                <div className="suggestion_name suggest_h2">
                                  Suggested Results
                                </div>
                              </div>
                            </li>
                            {this.state.search_results.length > 0 &&
                              this.state.search_results.map(
                                (suggestion, index) => (
                                  <li
                                    key={index}
                                    onClick={() =>
                                      this.onClickEvent(suggestion.name)
                                    }
                                    className="suggestion-list-items"
                                  >
                                    <div className="suggestion_box">
                                      <div className="suggestion_name suggest_h3">
                                        {suggestion.name}
                                        {/* <h6 className="search-city-name"> {moment(suggestion.date.date).format(" ddd MM/D")} • {suggestion.city.text.name},{suggestion.stateProvince.text.name}  </h6> */}
                                      </div>
                                    </div>
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="search_icons"  >
                    {/* <img src={require("../assets/images/search.png")} alt="" /> */}
                    <img
                      src={require("../assets/images/newimages/search-nav.png")}
                      alt="sourced"
                      onClick={this.openSearchDiv}
                    />
                  </div>
                  <div className="profile_div">
                 
                   
                      <span class="material-symbols-outlined hamburger-menu" onClick={()=>this.toggleSidebar()}>menu</span>
                  
                  </div>
                  <Sidebar isOpen={sidebarOpen} onClose={this.closeSidebar} />
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
  performer_search_header:
    state.performer_search_header.performer_search_header,
});
export default withRouter(
  connect(mapStateToProps, { searchedPerformerHeader })(Header)
);
