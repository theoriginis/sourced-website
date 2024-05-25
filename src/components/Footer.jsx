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
  onClickSportsName = (sportsName)=>{
    if(sportsName){
      this.props.history.push(`/sport-search/${sportsName}`);
    }
  }
  render() {
    return (
      <div>
        <footer style={{ paddingLeft: '2em', paddingRight: '2em' }}  id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row footer-row">
                <div
                  className="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-contact wow slideInLeft"
                  style={{animationDuration: "3.5s"}}
                >
                  <img src={require("../assets/images/newimages/logo.png")} className="Zaltol_footer" />
                  <p> © Sourced Tickets LLC. All Rights Reserved </p>
                </div>

                <div
                  className="col-lg-2 col-md-2 col-sm-4 col-xs-4 footer-links wow slideInLeft"
                  style={{animationDuration: "3.5s"}}
                >
                  <h3> Browse </h3>
                  <ul>
                    <li onClick={()=>this.onClickSportsName(('NFL Football').replace(/\s+/g, '-'))}>
                  
                      NFL Football
                 
                    </li>
                    <li onClick={()=>this.onClickSportsName(('NBA Basketball').replace(/\s+/g, '-'))}>
                    
                      NBA Basketball
                
                    </li>
                    <li onClick={()=>this.onClickSportsName(('NHL Hockey').replace(/\s+/g, '-'))}>
            
                      NHL Hockey{" "}
             
                    </li>
                    <li onClick={()=>this.onClickSportsName(('MLB Baseball').replace(/\s+/g, '-'))}>
                      {" "}
                   
                      MLB Baseball
             
                    </li>
                    <li onClick={()=>this.onClickSportsName(('NCAA Football').replace(/\s+/g, '-'))}>
                
                      NCAA Football
             
                    </li>
                   
                  </ul>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 footer-links" style={{animationDuration: "3.5s"}}>
                  <h3> RESOURCES </h3>
                  <ul>
                  
                    <li>
                    <a href="https://accounts.sourcedtickets.com/?register=false" target={'_blank'}>
                      Login
                      </a>
                    </li>
             
                    <li>
                    <a href="https://accounts.sourcedtickets.com/?register=true" target={'_blank'}>
                      
                      Signup{" "}
                     </a>
                    </li>
                    <li>
                    <a href="https://sourcedtickets.com/policies" target={'_blank'}>
                      
                      Policies{" "}
                     </a>
                    </li>
                  </ul>
                </div>

                 <div className="col-lg-2 col-md-2 col-sm-4 col-xs-4 footer-links" style={{animationDuration: "3.5s"}}>
                  <h3> Connect </h3>
                  <ul>
                    <li>
                    <a href="https://www.instagram.com/sourcedtickets?igsh=MTJ6b2E3Mms4eTVycQ==" target={'_blank'}>
                      Instagram
                     </a>
                    </li>
                    <li>
                    <a href="https://www.tiktok.com/@sourcedtickets.com?_t=8mU8DTXjKR8&_r=1" target={'_blank'}>
                      TikTok
                     </a>
                    </li> 
                    <li>
                    <a href="https://www.facebook.com/share/XGkKqVYHCdGxjN4y/?mibextid=LQQJ4d" target={'_blank'}>
                      Facebook
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
