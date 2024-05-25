import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";




class Sidebar extends React.Component {
  onClickSportsName = (sportsName) => {
    if (sportsName) {
      this.props.history.push(`/sport-search/${sportsName}`);
    }
  };
  render() {
    const { isOpen, onClose } = this.props;

    return (
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <ul>
          <li
            onClick={() =>
              this.onClickSportsName("NFL Football".replace(/\s+/g, "-"))
            }
          >
            NFL Football
          </li>
          <li
            onClick={() =>
              this.onClickSportsName("NBA Basketball".replace(/\s+/g, "-"))
            }
          >
            NBA Basketball
          </li>
          <li
            onClick={() =>
              this.onClickSportsName("NHL Hockey".replace(/\s+/g, "-"))
            }
          >
            NHL Hockey{" "}
          </li>
          <li
            onClick={() =>
              this.onClickSportsName("MLB Baseball".replace(/\s+/g, "-"))
            }
          >
            {" "}
            MLB Baseball
          </li>
          <li
            onClick={() =>
              this.onClickSportsName("NCAA Football".replace(/\s+/g, "-"))
            }
          >
            NCAA Football
          </li>
          <li>
            {" "}
            <a
              href="https://accounts.sourcedtickets.com/?register=false"
              target={"_blank"}
            >
              Login
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://accounts.sourcedtickets.com/?register=true"
              target={"_blank"}
            >
              Signup
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(Sidebar));
