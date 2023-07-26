import React, { Component } from "react";

import SearchBar from "../../components/main-search-bar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { evenDetails } from "../../redux/upcoming-event/action";
import { addTicketsToCart } from "../../redux/add-to-cart/action";
import moment from "moment";
import Table from "react-bootstrap/Table";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Loader from "../../components/spinner/spinner";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";
class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_details: "",
      tickets: [],
      total_seats: 0,
      is_open: false,
      isHovered: false,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.event_details !== this.props.event_details) {
      if (
        this.props.event_details &&
        this.props.event_details.event_details !== ""
      ) {
        this.setState({
          event_details: this.props.event_details.event_details,
          tickets: this.props.event_details.event_details.tickets.map(
            (tick) => ({
              seat_id: tick.seat_id,
              seat_description: tick.seat_description,
              price: tick.price,
              seats_left: tick.seats_left,
              face_value: tick.face_value,
              quantity: 0,
            })
          ),
        });
      }
    } else {
      //this.componentDidMount();
      //window.location.reload();
    }
  }
  async componentDidMount() {
    let event_id = this.props.location.pathname.split("/");
    if (event_id["2"] !== "") {
      await this.props.evenDetails(event_id);
    }

    // if (
    //   this.props.event_details &&
    //   this.props.event_details.event_details !== ""
    // ) {
    //   this.setState({
    //     event_details: this.props.event_details.event_details,
    //   });
    // }
  }
  handleChange = async () => {
    if (this.state.tickets.length > 0) {
      let tickets_added = this.state.tickets.filter(
        (item) => item.quantity !== 0
      );

      localStorage.setItem(
        "cart_details",
        JSON.stringify({
          tickets: tickets_added,
          event_details: this.state.event_details,
        })
      );
      if (tickets_added.length > 0 && localStorage.getItem("cart_details")) {
        this.props.history.push("/cart-details");
      }
    }
  };

  addTicket = (seat_id) => {
    let obj = this.state.tickets.findIndex((t) => t.seat_id === seat_id);
    let pretickets = this.state.tickets;

    pretickets[obj].quantity = pretickets[obj].quantity + 2;
    this.setState({
      tickets: pretickets,
    });
    // let total_seats = 0;

    // for (let seat of this.state.tickets) {
    //   total_seats = total_seats + seat.quantity;
    // }
    // this.setState({
    //   total_seats: total_seats,
    // });
  };
  removeTicket = (seat_id) => {
    let obj = this.state.tickets.findIndex((t) => t.seat_id === seat_id);
    let pretickets = this.state.tickets;
    pretickets[obj].quantity = pretickets[obj].quantity - 2;

    this.setState({
      tickets: pretickets,
    });
    // let total_seats = 0;
    // for (let seat of this.state.tickets) {
    //   total_seats = total_seats + seat.quantity;
    // }
    // this.setState({
    //   total_seats: total_seats,
    // });
  };
  sittingPlan = () => {
    this.setState({
      is_open: true,
    });
  };
  closePopUp = () => {
    this.setState({
      is_open: false,
    });
  };
  addTicketToCart = (quantity, seat_id) => {
    let obj = this.state.tickets.findIndex((t) => t.seat_id === seat_id);
    let pretickets = this.state.tickets;
    pretickets[obj].quantity = quantity;

    this.setState({
      tickets: pretickets,
    });
    let total_seats = 0;
    for (let seat of this.state.tickets) {
      total_seats = total_seats + seat.quantity;
    }
    this.setState({
      total_seats: total_seats,
    });
  };
  handleHover() {
    this.setState((prevState) => ({
      isHovered: !prevState.isHovered,
    }));
  }
  goToContactUs = () => {
    this.props.history.push("/contact-us");
  };
  render() {
    //window.scrollTo({top: 0, behavior: 'smooth'})
    return (
      <>
        <title>
          {" "}
          {this.state.event_details ? this.state.event_details.event_name : ""}
          Ticket Penguin
        </title>
        <div className="main-search-bar">
          <SearchBar />
        </div>
        <div className="search_results event_details_s">
          <div className="conta_iner">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 wow slideUp">
                <div className="section-heading text-center mb-2">
                  <h2>
                    {this.state.event_details
                      ? this.state.event_details.event_name
                      : ""}
                  </h2>
                  {/* <p>Showing 10 of 'Wembley Stadium Results' </p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="conta_iner">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 wow slideUp">
                <ul>
                  <li>
                    <div className="fdx">
                      <div className="search_details">
                        <h3>
                          {this.state.event_details
                            ? this.state.event_details.event_name
                            : ""}
                        </h3>
                        <h4 className="search_event_location">
                          {this.state.event_details
                            ? this.state.event_details.event_location
                            : ""}
                        </h4>
                        <span className="left-tickets-details">
                          {this.state.event_details.tickets_left} Tickets
                          Available - From £
                          {this.state.event_details.starting_price}{" "}
                        </span>
                        <p className="eventdetails-dates">
                          <p className="clock-icon-section">
                            <i
                              className="fa fa-clock-o clock-icon"
                              aria-hidden="true"
                            ></i>
                            <span className="date-and-time-text">
                              {this.state.event_details
                                ? moment(
                                    this.state.event_details.event_time
                                  ).format("h:mm a")
                                : ""}
                            </span>
                          </p>

                          <p className="cal-icon-section">
                            <i
                              className="fa fa-calendar cal-icon"
                              aria-hidden="true"
                            ></i>
                            <span className="date-and-time-text">
                              {this.state.event_details
                                ? moment(
                                    this.state.event_details.event_time
                                  ).format("Do MMMM")
                                : ""}
                            </span>
                          </p>
                        </p>{" "}
                      </div>

                      <div
                        className={
                          this.state.total_seats == 0
                            ? "add-to-cart"
                            : "add-to-cart active"
                        }
                        onClick={this.handleChange}
                      >
                        View cart
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="conta_iner">
            {this.props.event_details.in_action_event_details ? (
              <Loader />
            ) : (
              <>
                <div className="ticket_fdx">
                  <div className="lft">
                    <figure className="pln_img">
                      <img
                        src={`https://api.ticketpenguin.co.uk/${this.state.event_details.seating_plan}`}
                        alt="sitting-plan"
                      />
                    </figure>
                  </div>

                  <div className="ryt">
                    <div className="tickets-info">
                      <div className="ticket-info-cards">
                        <div className="total-tickets">
                          {this.state.event_details.tickets_left} Tickets{" "}
                          <span className="available-txt">Available!</span>
                        </div>
                        <div className="ticket-scroll-box">
                          {this.state.tickets &&
                            this.state.tickets.map((ticket, index) =>
                              ticket.seats_left > 0 ? (
                                <>
                                  <div className="ticket-info-card">
                                    <div className="seat-desciption">
                                      <p>{ticket.seat_description}</p>
                                    </div>
                                    <Tooltip
                                      className="tool_tip"
                                      arrow={15}
                                      background="#d9d9d9"
                                      border="#0466FF"
                                      color="#000"
                                      fadeDuration={1000}
                                      fadeEasing="linear"
                                      fixed={false}
                                      fontFamily="inherit"
                                      fontSize="inherit"
                                      offset={0}
                                      padding={10}
                                      placement="top"
                                      radius={10}
                                      zIndex={1}
                                      content={`The face value for this ticket is £${ticket.face_value}`}
                                      customCss={css`
                                        white-space: nowrap;
                                      `}
                                    >
                                      <div className="seat-price">
                                        {" "}
                                        <p>
                                          {" "}
                                          <i className="fa fa-tag price-tag"></i>{" "}
                                          £{ticket.price.toString()}
                                        </p>
                                      </div>
                                    </Tooltip>

                                    <div className="ticket-quantity-box">
                                      <div
                                        className="add-ticket-minus"
                                        disabled={
                                          ticket.quantity <= 0 ? true : false
                                        }
                                        onClick={
                                          ticket.quantity <= 0
                                            ? ""
                                            : () =>
                                                this.removeTicket(
                                                  ticket.seat_id
                                                )
                                        }
                                      >
                                        -
                                      </div>

                                      <p className="ticket-queantity">
                                        {ticket.quantity}
                                      </p>

                                      <div
                                        className="add-ticket"
                                        disabled={
                                          ticket.quantity >= ticket.seats_left
                                            ? true
                                            : false
                                        }
                                        onClick={
                                          ticket.quantity >= ticket.seats_left
                                            ? ""
                                            : () =>
                                                this.addTicket(ticket.seat_id)
                                        }
                                      >
                                        +
                                      </div>
                                    </div>
                                    <div
                                      className="add-ticket-tocart"
                                      onClick={() =>
                                        this.addTicketToCart(
                                          ticket.quantity,
                                          ticket.seat_id
                                        )
                                      }
                                    >
                                      <i className="fa fa-shopping-cart cart-tag"></i>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                ""
                              )
                            )}
                        </div>
                      </div>
                    </div>
                    <div className="spotify-box">
                      <iframe
                        src="https://open.spotify.com/embed/artist/34gAaWeYZoRER7MY3KBy1Q?utm_source=generator"
                        width="100%"
                        height="354"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      ></iframe>
                    </div>

                    <div className="about-tickets">
                      <p>
                        <i class="fa fa-info-circle" aria-hidden="true"></i> All
                        tickets are priced at/above face value. Ticket Penguin
                        LTD sell the most exclusive sold out and limited events.
                        Face value prices are displayed by hovering over the
                        price for each ticket.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="wants-tickets">
                  Want seats that aren't in stock?{" "}
                  <span
                    className="contact-us-cart"
                    onClick={() => this.goToContactUs()}
                  >
                    Contact us
                  </span>{" "}
                  and we will find them!
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  event_details: state.event_details,
});
export default withRouter(
  connect(mapStateToProps, {
    evenDetails,
    addTicketsToCart,
  })(EventDetails)
);
