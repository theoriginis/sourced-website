import React, { Component } from "react";

import SearchBar from "../../components/main-search-bar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { evenDetails } from "../../redux/upcoming-event/action";

class AboutUs extends Component {
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
  <title>Ticket Penguin About Us</title>
      <div className="conta_iner">
        <div className="search_results">
          <div className="container-event-name">
            <div className="section-heading text-left">
              <h2>About Us</h2>
              {/* <p>Showing 10 of 'Wembley Stadium Results' </p> */}
            </div>
            <p>
              Welcome to Ticket Penguin, your go-to destination for all your
              event ticket needs. We specialize in providing our customers with
              access to sold out and limited events, including concerts, sports,
              entertainment performances, and theatre shows. Our mission is to
              provide the highest level of customer service in the industry,
              ensuring that our customers have a seamless and stress-free
              experience when purchasing tickets. With our team of dedicated
              professionals, we strive to deliver top tier service that sets us
              apart from our competitors. Whether you're a first-time buyer or a
              seasoned ticket purchaser, we're here to help you every step of
              the way.
            </p>
            <p>Thank you for choosing Ticket Penguin.</p>
            <p className="t_and_c_heaindg">Company Details:</p>
            <p>
              Ticket Penguin LTD<br></br>
              Company No. 14505467<br></br>7 Bell Yard<br></br>
              London<br></br>
              WC2A 2JR<br></br>
              support@ticketpenguin.co.uk
            </p>
          </div>
        </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(AboutUs));
