import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";

class SellNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular_events: "",
      activeItem: -1,
    };
  }

  goToSignUp = () => {
    this.props.history.push("/sign-up");
  };
  render() {
    return (
      <div>
        <section id="sell">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-12 text-center start-p wow slideUp"
                style={{animationDuration: "3s"}}
              >
                <div className="sell_box">
                  <h5>
                  Lowest fees. No surprises. Easy purchasing. <br /><strong> Buy
                    now! </strong>{" "}
                  </h5>
                  <p>100% customer satisfaction</p>
                  <div className="hiden_quantity">
                  {/* <nav className="nav purchase_btn" onClick={this.goToSignUp}>
                      <span className="button_zal">
                        {" "}
                        Create Account{" "}
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>

                      </span>
                    </nav> */}
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

});
export default withRouter(
  connect(mapStateToProps, {

  })(SellNow)
);
