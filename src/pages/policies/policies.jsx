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
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      `https://tickettransaction.com/?bid=13214&sitenumber=0&tid=600`
    );

    console.log("script", script);
    script.onload = () => {
      // The script has loaded successfully; check for TN_Policy_Maker and call the function
      if (
        typeof TN_Policy_Maker !== "undefined" &&
        typeof TN_Policy_Maker.PrintPolicies === "function"
      ) {
        const rawHtml = TN_Policy_Maker.PrintPolicies();
        this.setState({ rawHtml, error: null });
      } else {
        // TN_Policy_Maker or TN_Policy_Maker.PrintPolicies is not defined
        this.setState({
          error:
            "TN_Policy_Maker or TN_Policy_Maker.PrintPolicies is not defined",
        });
      }
    };

    script.onerror = () => {
      // Handle script loading error
      this.setState({ error: "Error loading the script" });
    };

    document.head.appendChild(script);
    // Append the script element to the document's head
  }

  render() {
    window.scrollTo(0, 0);
    const { rawHtml, error } = this.state;
    return (
      <>
        <main>
          <section class="section events search_results">
            <div class="container">
              <div class="row policy-page">
                <div class="policy_overflow">
                  {error ? (
                    <p>Error: {error}</p>
                  ) : rawHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
                  ) : (
                    <p>Loading...</p>
                  )}
                  {/* Your React component content */}
                </div>
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
