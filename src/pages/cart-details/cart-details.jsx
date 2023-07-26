import React, { Component } from "react";

import SearchBar from "../../components/main-search-bar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { evenDetails } from "../../redux/upcoming-event/action";
import { addTicketsToCart } from "../../redux/add-to-cart/action";
import moment from "moment";
import Table from "react-bootstrap/Table";
import SweetAlert from "react-bootstrap-sweetalert";
class CartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_details: "",
      tickets: [],
      cart_items: "",
      total_amount: "",
      user_information: JSON.parse(localStorage.getItem("user_info")),
      alert: false,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("cart_details")) {
      let cart_items = JSON.parse(localStorage.getItem("cart_details"));
      this.setState({
        cart_items: cart_items,
        user_information: JSON.parse(localStorage.getItem("user_info")),
      });
    }
  }
  handleChange = () => {
    if (this.state.tickets.length > 0) {
      //this.props.addTicketsToCart(this.state.tickets)
    }
  };
  removeTicket = (seat_id) => {
    let newObj = this.state.cart_items.tickets.filter((obj) => {
      return obj.seat_id !== seat_id;
    });
    let final_purchase = {
      event_details: this.state.cart_items.event_details,
      tickets: newObj,
    };
    this.setState({
      cart_items: final_purchase,
    });
    localStorage.setItem(
      "cart_details",
      JSON.stringify({
        tickets: newObj,
        event_details: this.state.cart_items.event_details,
      })
    );
  };
  onConfirmCancel = () => {
    this.props.history.push("/login");
  };
  totalbill = () => {
    if (
      this.state.cart_items.tickets &&
      this.state.cart_items.tickets.length > 0
    ) {
      const ob = this.state.cart_items.tickets;
      let sum = 0;
      ob.map((obj, index) => {
        let amout = obj.price * obj.quantity;
        sum += amout;
      });

      return sum;
    }
  };
  goTocheckout = async () => {
    if (this.state.user_information !== null) {
      let cart_items = JSON.parse(localStorage.getItem("cart_details"));
      let tickets = cart_items.tickets;

      await this.props.addTicketsToCart(tickets);
      //this.props.history.push('/checkout')
      if (this.props.add_to_cart && this.props.add_to_cart.type == "success") {
        this.props.history.push(
          `/checkout/?payment_intent_client_secret=${this.props.add_to_cart.data.payment_intent_client_secret}`
        );
      }
    } else {
      this.setState({
        alert: true,
      });
    }
  };

  render() {
    return (
      <>
      <title>Ticket penguin</title>
        <div className="main-search-bar">
          <SearchBar />
        </div>
        <div className="search_results cart-background">
          <div className="container-event-name pdding-0">
            <div className="row align-items-center">
              
            </div>
          </div>

          <div className="container-coming-events">
            {this.state.alert ? (
              <SweetAlert
                danger
                title="Please Login!"
                onConfirm={this.onConfirmCancel}
                customButtons={
                  <React.Fragment>
                    <button
                      style={{
                        background: "#0466ff",
                        width: "20%",
                        height: "40px",
                        border: "none",
                        color: "#fff",
                        borderRadius: "11px",
                      }}
                      onClick={this.onConfirmCancel}
                    >
                      OK
                    </button>
                  </React.Fragment>
                }
              >
                Please login to proceed to checkout
              </SweetAlert>
            ) : (
              ""
            )}
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 wow slideUp">
                <ul className="cart-details-list">
                  <li>
                    <div className="cart-details-main padding0">
                      <div className="search_details">
                      <div className="section-heading text-center border-bottom0">
                  <h2>Your Order</h2>
                  {/* <p>Showing 10 of 'Wembley Stadium Results' </p> */}
                </div>
                        <h3>
                          {this.state.cart_items.event_details
                            ? this.state.cart_items.event_details.event_name
                            : ""}
                        </h3>
                        <p className="cart-details-event-location">
                          {this.state.cart_items.event_details
                            ? this.state.cart_items.event_details.event_location
                            : ""}{" "}
                        </p>
                        <p>
                          {" "}
                          <div className="events-details-cart-details">
                            <i
                              className="fa fa-clock-o cart-details"
                              aria-hidden="true"
                            ></i>{" "}
                            {this.state.cart_items.event_details ? (
                              <span className="cart-details-time">
                                {moment(
                                  this.state.cart_items.event_details.event_time
                                ).format("h:mm a")}
                              </span>
                            ) : (
                              ""
                            )}
                            <i
                              className="fa fa-calendar cart-details"
                              aria-hidden="true"
                            ></i>{" "}
                            {this.state.cart_items.event_details ? (
                              <span className="cart-details-time">
                                {moment(
                                  this.state.cart_items.event_details.event_time
                                ).format("MMM Do YYYY")}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="conta_iner">
          <div className="tickets-container-cart-details cart-details-summary">
            <div className="order-summary">
              <h3>Order Summary</h3>
            </div>
            <div className="tickets-inner-container-cart-details">
              <div className="tickets-info-cart-details">
                <Table hover className="cart-details-table">
                  <thead>
                    <tr>
                      <th className="tickets-option">Items</th>
                      <th className="tickets-seats-desc">Seats</th>
                      <th className="tickets-price">Price</th>
                      <th className="tickets-price">Quantity</th>
                      <th className="tickets-stock">Total</th>
                      <th className="tickets-Quantity"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="row-space"> </tr>
                    {this.state.cart_items.tickets &&
                      this.state.cart_items.tickets.length > 0 &&
                      this.state.cart_items.tickets.map((ticket, index) => (
                        <>
                          <tr className="tickets-row">
                            <td className="p-1">{index + 1}</td>
                            <td className="p-1">{ticket.seat_description}</td>
                            <td className="cart_price p-1">£{ticket.price}</td>
                            <td className="p-1">{ticket.quantity}</td>
                            <td className="cart_price bolder p-1">
                              £{ticket.price * ticket.quantity}
                            </td>
                            <td className="cart-details-box remove-tickets">
                              <button
                                className="remove-ticket-cart"
                                onClick={() =>
                                  this.removeTicket(ticket.seat_id)
                                }
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                          <tr className="row-space"> </tr>
                        </>
                      ))}
                  </tbody>
                </Table>
              </div>
              <div className="total-bill">
                <div className="total-price-headin">Total Amount: </div>
                <div className="total-price">£{this.totalbill()}</div>
              </div>
              <div className="total-bill" onClick={() => this.goTocheckout()}>
                <div className="total-bill-btn">Checkout</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  event_details: state.event_details,
  add_to_cart: state.add_to_cart.add_to_cart,
});
export default withRouter(
  connect(mapStateToProps, {
    evenDetails,
    addTicketsToCart,
  })(CartDetails)
);
