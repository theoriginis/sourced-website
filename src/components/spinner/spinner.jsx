import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { TailSpin } from "react-loader-spinner";
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-loader">
        <TailSpin
          height="50"
          width="50"
          color="#fff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperclassName="main-spinner"
          visible={true}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(Loader));
