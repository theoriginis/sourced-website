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
          <div class="container">
            <div class="row justify-content-center">
              <div
                class="col-lg-12 text-center start-p wow slideUp"
                style={{animationDuration: "3s"}}
              >
                <div class="sell_box">
                  <h2>
                    Lower fees. Increased sales. Faster payment. <br /> Sell
                    now!{" "}
                  </h2>
                  <p>100% customer satisfaction</p>
                  <div class="hiden_quantity">
                  <nav class="nav purchase_btn" onClick={this.goToSignUp}>
                      <span class="button_zal">
                        {" "}
                        Create Account{" "}
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>

                      </span>
                    </nav>
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
