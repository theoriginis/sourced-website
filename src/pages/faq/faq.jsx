import React, { Component } from "react";

import SearchBar from "../../components/main-search-bar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { evenDetails } from "../../redux/upcoming-event/action";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_details: "",
      tickets: [],
      total_seats: 0,
      is_open: false,
    };
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <>
      <title>Ticket Penguin FAQ</title>
        <div className="conta_iner my-4">
          <div className="search_results">
            <div className="container-event-name">
              <div className="section-heading text-left">
                <h2>FAQ</h2>
                {/* <p>Showing 10 of 'Wembley Stadium Results' </p> */}
              </div>
              <br></br>
              <p className="t_and_c_heaindg">
                Where will my seats be at the venue?
              </p>
              <p>
                The section, row and seat number of your seat will be within
                your order confirmation, and under the{" "}
                <a href="https://ticketpenguin.co.uk/my-orders">My Orders</a>{" "}
                page(you must be logged in to view this page). Compare this to the venue map provided on the event page,
                or a map you may find online to view where this is.{" "}
              </p>
             <br></br>
              <p className="t_and_c_heaindg">
                I haven't received my order confirmation email.
              </p>
              <p>
                If you haven't received order confirmation, please use{" "}
                <a href="https://ticketpenguin.co.uk/contact-us">Contact Us</a>.
                You can also view your order details and order status in{" "}
                <a href="https://ticketpenguin.co.uk/my-orders">My Orders</a>.
              </p>
              <br></br>
              <p className="t_and_c_heaindg">When will I receive my tickets?</p>
              <p>
                Depending on the event and the host, tickets can be received at
                latest 3 days before the event, however we aim to get tickets
                delivered to customers a week before, or the same day we receive
                them.{" "}
              </p>
              <br></br>
              <p className="t_and_c_heaindg">How will I receive my tickets?</p>
              <p>
                If your ticket is an E-ticket, we will send this on an email in
                PDF format. We highly recommend printing this off to show at the
                entrance of the venue. If your tickets are physical, they will
                be mailed to your address. All physical tickets will receive a
                separate email explaining this to them and confirming delivery
                address. If you do not receive this email please assume your
                tickets are E-tickets.{" "}
              </p>
              <br></br>
              <p className="t_and_c_heaindg">
                Why do my tickets have someone else's name on them?
              </p>
              <p>
                As stated in the{" "}
                <a href="https://ticketpenguin.co.uk/terms-and-conditions">
                  Terms and Conditions
                </a>
                , Ticket Penguin sells tickets above face value, which have
                already been purchased by a third party. The tickets are still
                valid, and your name will not need to match the name on the
                ticket for you to be allowed entry.
              </p>
              <br></br>
              <p className="t_and_c_heaindg">
                Can I cancel my order or change my purchase?
              </p>
              <p>
                As stated in our <a href="https://ticketpenguin.co.uk/refund">Refund Policy</a>, the customer can
                cancel the tickets within 24 hours of buying. If you wish to
                request a change in your purchase, please <a href="https://ticketpenguin.co.uk/contact-us">Contact Us</a>, however it is possible we will not be able to
                fulfil some requests.
              </p>
              <br></br>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(Faq));
