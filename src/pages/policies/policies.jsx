import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import moment from "moment";
import { searchedPerformer } from "../../redux/searched-events/action.js";
import Loader from "../../components/spinner/spinner.jsx";
import { EventInformation } from "../../utils/apis";
import { Helmet } from "react-helmet";
import { ViewMap } from "../../utils/apis.js";
class Policies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: "",
      currentPage: 1,
      event_limit: 10,
      keyword_searched: "",
      event_details: "",
      map_view: "",
      policyData:'',
      policyContentl:''
    };
  }
  componentDidMount() {
    const policyUrl = 'http://tickettransaction.com/?bid=13217&sitenumber=0&tid=600';

    // Fetch the content from the policy page's URL
    fetch(policyUrl)
      .then(response => response.text())
      .then(data => {
        // Set the retrieved policy content in state
      
        this.setState({policyContent:data})
      })
      .catch(error => {
        console.error('Error fetching policy content:', error);
      });
  }


  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <main>
          <section class="section events search_results" id="products">
            <div class="container">
            <div dangerouslySetInnerHTML={{ __html: this.state.policyContent }} />
            </div>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(Policies));
