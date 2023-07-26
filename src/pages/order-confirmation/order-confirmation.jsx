import React, { Component } from "react";

import SearchBar from "../../components/main-search-bar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { orderConfirm } from "../../redux/orders/payment/action";

class OrderConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_details: "",
      tickets: [],
      total_seats: 0,
      is_open: false,
    };
  }

  componentDidMount(){
    this.props.orderConfirm()
  }
  goToHome=()=>{
    this.props.history.push('/')
  }
  goToOrder = ()=>{
    this.props.history.push('/my-orders')
  }
  render() {
    window.scrollTo(0, 0);
    <title>Ticket Penguin</title>
    return (
      <>
        <div className="order-confirmation">
          <div className="container order-information">
            <div className="order-icon-box">
              <img
                src={require("../../assets/images/orderconfirmation.png")}
                className="order-icon"
              />
              <div className="ticket-status">Ticket Booking Complete</div>
              <div className="check-mail">
              Your booking has been successfully completed.
                
              </div>
              <div className="check-mail-text">
                   Check your email
                  for order confirmation!
                </div>
                <div className="order-buttons">
                    <div className="gotohome" onClick={()=>this.goToHome()}>Home</div>
                    <div className="gotohome" onClick={()=>this.goToOrder()}>My Orders</div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {orderConfirm})(OrderConfirmation));
