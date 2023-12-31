import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
class Footer extends React.Component {
  openTermsAndCondtions = () => {
    this.props.history.push("/terms-and-conditions");
  };
  openPrivacyPolicies = () => {
    this.props.history.push("/policies");
  };
  openContactUs = () => {
    this.props.history.push("/contact-us");
  };
  openAboutUs = () => {
    this.props.history.push("/about-us");
  };
  openRefund = () => {
    this.props.history.push("/refund");
  };
  openFaq = () => {};
  moveToHome = () => {
    if (window.location.pathname === "/") {
      let element = document.getElementById("main-search-box");
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      this.props.history.push("/");
    }
  };
  moveToUpcomingEvnets = () => {
    if (window.location.pathname === "/") {
      let element = document.getElementById("upcoming-events");
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      this.props.history.push("/");
    }
  };
  moveToTopEvents = () => {
    if (window.location.pathname === "/") {
      let element = document.getElementById("best-selling-events");
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row footer-row">
                <div
                  className="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-contact wow slideInLeft"
                  style={{animationDuration: "3.5s"}}
                >
                  <img src={require("../assets/images/newimages/logo.png")} className="Zaltol_footer" />
                  <p> © 2023 Sourced Tickets LLC. All Rights Reserved </p>
                </div>

                <div
                  className="col-lg-2 col-md-2 col-sm-4 col-xs-4 footer-links wow slideInLeft"
                  style={{animationDuration: "3.5s"}}
                >
                  <h3> Browse </h3>
                  <ul>
                    <li>
                      <a href="#" target="blank">
                      Concerts
                      </a>
                    </li>
                    <li>
                      <a href="#" target="blank">
                      Sports
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" target="blank">
                      Shows{" "}
                      </a>
                    </li>
                   
                  </ul>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 footer-links" style={{animationDuration: "3.5s"}}>
                  <h3> RESOURCES </h3>
                  <ul>
                    <li>
                      <a href="#" target="blank">
                      Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" target="blank">
                      Login
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" target="blank">
                      Signup{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" target="blank">
                      Policies{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                 <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 footer-links" style={{animationDuration: "3.5s"}}>
                  <h3> Connect </h3>
                  <ul>
                    <li>
                      <a href="#" target="blank">
                      Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" target="blank">
                      Twitter
                      </a>
                    </li> 
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(Footer));
