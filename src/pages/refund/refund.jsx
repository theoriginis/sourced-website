import React, { Component } from "react";

import SearchBar from "../../components/main-search-bar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { evenDetails } from "../../redux/upcoming-event/action";

class Refund extends Component {
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
      <title>Ticket Penguin Refund</title>
        <div className="conta_iner my-4">
          <div className="search_results">
            <div className="container-event-name">
              <div className="section-heading text-left">
                <h2>Refund</h2>
                {/* <p>Showing 10 of 'Wembley Stadium Results' </p> */}
              </div>
              <p>
                At Ticket Penguin, we understand that plans can change and events
                can be unpredictable. That's why we offer a flexible refund policy
                for our customers.
              </p>
              <p>
                If an event is cancelled, we will automatically issue a full
                refund for the order. If an event is postponed, we will offer the
                option for a refund or for the ticket to be used for the
                rescheduled date.
              </p>
              <p>
                As stated in our  <a href="https://ticketpenguin.co.uk/terms-and-conditions">Terms and Conditions</a>, if a customer is unable to attend an event, we
                offer a 24 hour refund policy, where the customer can request a
                full refund within 24 hours of ordering the tickets.
              </p>
              <p>If there is an administrative error on our end, and we can no longer fulfil a customer order, we will issue a full refund with possible further compensation or discounts on future orders.</p>
              <p>All refund requests must be made through our customer service department. We will process the refund within 5 business days of the request.</p>
              <p>Please keep in mind that ticket sales are final and we do not offer refunds or exchanges 24 hours after the purchase has been made.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(Refund));
