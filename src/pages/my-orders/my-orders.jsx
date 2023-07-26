import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import SearchBar from "../../components/main-search-bar";
import { getOrderList } from "../../redux/my-orders/action";
import Button from "react-bootstrap/Button";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      currentPage: 1,
      event_limit: 10,
      my_order_list: "",
      modalIsOpen: false,
    };
  }
  componentDidMount() {
    this.props.getOrderList();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.my_order_list !== this.props.my_order_list) {
      if (
        this.props.my_order_list &&
        this.props.my_order_list.my_order_list !== ""
      ) {
        this.setState({
          my_order_list: this.props.my_order_list.my_order_list,
        });
      }
    }
  }
  openModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({ modalIsOpen: false });
  };
  goNextPage = () => {
    let data = {
      limit: this.state.event_limit,
      page: this.state.currentPage + 1,
      data:''
    };
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    this.props.upcomingEvent(data);
  };
  gotPreviousPage = () => {
    let data = {
      limit: this.state.event_limit,
      page: this.state.currentPage - 1,
      data:''
    };
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
    this.props.upcomingEvent(data);
  };

  render() {
    return (
      <>
       <title> Ticket Penguin Orders</title>
        <div className="main-search-bar">
          <SearchBar />
        </div>
        <div className="search_results srch-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 wow slideUp">
                <div className="section-heading text-left">
                  <h2>Orders</h2>
                  <p>Showing Orders Details </p>
                </div>
                <div className="border_bottom"></div>
              </div>
            </div>
          </div>

          <div className="container-search-results">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 my-orders-details">
                <ul>
                  {this.state.my_order_list !== "" &&
                  this.state.my_order_list.length > 0
                    ? this.state.my_order_list.map((event) => (
                        <li
                          onClick={() => this.openModal()}
                          className="events-list"
                        >
                          <div className="flex all-events ds-main">
                            <figure className="ordr_img">
                              {" "}
                              <img
                                className="all-events-event-img"
                                src={`https://api.ticketpenguin.co.uk/${event.event_image}`}
                              />
                            </figure>
                            <div className="search_details billing-details">
                              <h3>{event.event_name}</h3>
                              <p className="mid-content">{event.event_location} </p>
                              <p>{moment(event.event_time).format("Do MMM , h:mm a")} </p>
                              <p>
                       
                                Order Status:
                                <span className= {event.status=='Pending' ? "pending-status" : (event.status=='Completed' ? 'complete-status' :'cancelled-status')  }>
                                  {event.status}
                                </span>
                              </p>
                            </div>
                            <div className="booked-tickets">
                              <div className="ticket-information-text ">
                                <h3>Tickets Information</h3>
                              </div>
                              <Table   hover size="sm" className="ticket-information-box">
                                <thead >
                                  <tr>
                                    <th className="seat-desc-cell">Seats</th>
                                    <th>Quantity</th>
                                    <th>Price(Per Seat,£)</th>
                                  </tr>
                                </thead>
                                {event.order_items &&
                                  event.order_items.map((tickets) => (
                             
                                      <tbody className="tickets-body">
                                        <tr>
                                          <td>{tickets.seat_description}</td>
                                          <td>{tickets.quantity}</td>
                                          <td>{tickets.price}</td>
                                        </tr>
                                      </tbody>
                                   
                                  ))}
                              </Table>
                            </div>
                            <div className="billing-information">
                              <div className="in-vo-content"> 
                                <h3 >Invoice details</h3>
                                <div className="billing-details">   
                                <p className="payment-id-details">
                     
                                Payment number:
                             
                              </p>
                              <p>
                              <span className="pending-status payment-id">
                                {event.payment_id}
                                </span>
                              </p>
                              <p className="payment-id-details">
              
                                Card Type:
                               
                              </p>
                              <p>
                              <span className="pending-status">
                                {event.card_type}
                                </span>
                              </p>
                              <p className="payment-id-details">
                
                                Card Number:
                                
                              </p>
                              <p>
                              <span className="pending-status">
                                ************{event.card_number}
                                </span>
                              </p>
                            </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    : ""}
                </ul>

                {/* <div className="flex pegi_top">
                  {this.state.currentPage == 1
                  ?
                  <div className="left_btn-disabled">
                  <button>Previous </button>
                </div>:
                 <div className="left_btn">
                 <button onClick={() => this.gotPreviousPage()}>Previous </button>
               </div>
                  }
                 
                  {!this.props.event_list.last_page_value ? (
                    <div className="right_btn">
                      <button onClick={() => this.goNextPage()}>Next </button>
                    </div>
                  ) : (
                    <div className="right_btn-disabled">
                      <button>Next </button>
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  my_order_list: state.my_order_list,
});
export default withRouter(
  connect(mapStateToProps, {
    getOrderList,
  })(MyOrders)
);
