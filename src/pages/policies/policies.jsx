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
      rawHtml: null,
    };
  }
  componentDidMount() {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://tickettransaction.com/?bid=13217&sitenumber=0&tid=600';

    // Append the script element to the document's head
    document.head.appendChild(script);

    // Check if the script has already loaded or not and handle both cases accordingly
    if (script.readyState) {
      // IE support
      script.onreadystatechange = () => {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          this.callPrintPolicies(); // Call the function when the script is ready
        }
      };
    } else {
      // Other browsers
      script.onload = () => {
        this.callPrintPolicies(); // Call the function when the script is ready
      };
    }
  }
  componentWillUnmount() {
    // Cleanup: Remove the script element when the component unmounts
    const script = document.querySelector('script[src="http://tickettransaction.com/?bid=13217&sitenumber=0&tid=600"]');
    if (script) {
      document.head.removeChild(script);
    }
  }
  callPrintPolicies = () => {
    if (typeof TN_Policy_Maker !== 'undefined' && typeof TN_Policy_Maker.PrintPolicies === 'function') {
      // Call TN_Policy_Maker.PrintPolicies() to generate the raw HTML
      const rawHtml = TN_Policy_Maker.PrintPolicies();

      // Now, `rawHtml` contains the generated HTML

      // Set `rawHtml` in the component's state
      this.setState({ rawHtml });
    } else {
      // Handle the case where TN_Policy_Maker or TN_Policy_Maker.PrintPolicies is not defined
      console.error('TN_Policy_Maker or TN_Policy_Maker.PrintPolicies is not defined');
    }
  };
  render() {
    window.scrollTo(0, 0);
    const { rawHtml } = this.state;
    return (
      <>
        <main>
          <section class="section events search_results">
            <div class="container">
              <div class="row policy-page">
                {rawHtml !== null ? (
                  <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
                ) : (
                  <p>Loading...</p>
                )}
                {/* Your React component content */}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(Policies));
