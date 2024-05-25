import React, { Component } from "react";
import { withRouter } from "react-router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { addUser } from "../../redux/signup/action";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      cofirmpassword: "",
      validateFieldsError: false,
      user_added_msg: "",
      passwordError: false,
    };
  }
  goToLogin = () => {
    this.props.history.push("/login");
  };
  signUpUser = () => {
    if (
      this.state.fullname == "" ||
      this.state.email == "" ||
      this.state.password == "" ||
      this.state.cofirmpassword == ""
    ) {
      this.setState({
        validateFieldsError: true,
      });
    } else if (this.state.password !== this.state.cofirmpassword) {
      this.setState({
        passwordError: true,
      });
    } else {
      let data = {
        email: this.state.email,
        name: this.state.fullname,
        password: this.state.password,
      };
      this.props.addUser(data);
    }
  };
  handleInput = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  onConfirm = () => {
    this.props.history.push("/login");
  };
  onCancel = () => {
    this.props.history.push("/login");
  };
  onConfirmCancel = () => {
    this.props.history.push("/sign-up");
  };

  componentDidUpdate(prevProps) {
    if (prevProps.user_added.user_added !== this.props.user_added.user_added) {
      if (this.props.user_added.user_added !== " ") {
        this.setState({
          user_added_msg: this.props.user_added.user_added,
        });
      }
    }
  }
  render() {
   
    return (
      <>
        <div className="main-signup">
          {this.state.user_added_msg !== "" ? (
            <SweetAlert
              success
              title="Account Created!"
              onConfirm={this.onConfirm}
              customButtons={
                <React.Fragment>
                  <button
                    style={{
                      background: "#0466ff",
                      width: "20%",
                      height: "40px",
                      border: "none",
                      color: "#fff",
                      borderRadius: "11px",
                      marginTop:'20px'
                    }}
                    onClick={this.onConfirm}
                  >
                    OK
                  </button>
                </React.Fragment>
              }
            >
              {this.state.user_added_msg}
            </SweetAlert>
          ) : (
            ""
          )}
          {this.props.user_added.error !== "" ? (
            <SweetAlert
              danger
              title="User Not Added"
              onConfirm={this.onConfirmCancel}
              customButtons={
                <React.Fragment>
                  <button
                    style={{
                      background: "#0466ff",
                      width: "20%",
                      height: "40px",
                      border: "none",
                      color: "#fff",
                      borderRadius: "11px",
                    }}
                    onClick={this.onConfirmCancel}
                  >
                    OK
                  </button>
                </React.Fragment>
              }
            >
              Phone Number / Email Address already registered
            </SweetAlert>
          ) : (
            ""
          )}
          <div className="padding-10 login-section">
            <img
              src={require("../../assets/images/newimages/logo.png")}
              className="logo-login"
            />
            <h2 className="white font-size-20 font-weight-600 margin-bottom-15">
              {" "}
              Sign Up to Sourced
            </h2>
            <p> Enter your details to continue </p>
            <div className="login-box">
              <div className="margin-bottom-15">
                <lable> Full Name </lable>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="form-controls"
                  value={this.state.fullname}
                  name="fullname"
                  onChange={this.handleInput}
                />
                {this.state.validateFieldsError && this.state.fullname == "" ? (
                  <div className="input-field-error">
                    Please enter your fullname
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="margin-bottom-15">
                <lable> Email </lable>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="form-controls"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInput}
                />
                {this.state.validateFieldsError && this.state.email == "" ? (
                  <div className="input-field-error">
                    Please enter your email
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="margin-bottom-15">
                <lable> Password </lable>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-controls"
                  name="password"
                  onChange={this.handleInput}
                />
                {this.state.validateFieldsError && this.state.password == "" ? (
                  <div className="input-field-error">
                    Please enter your password
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="margin-bottom-15">
                <lable> Confirm Password </lable>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-controls"
                  name="cofirmpassword"
                  value={this.state.cofirmpassword}
                  onChange={this.handleInput}
                />
                {this.state.validateFieldsError &&
                this.state.cofirmpassword == "" ? (
                  <div className="input-field-error">
                    Please enter your cofirmpassword
                  </div>
                ) : (
                  ""
                )}
                {this.state.passwordError ? (
                  <div className="input-field-error">
                    Your password does not match.
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div
                className="margin-bottom-15 margintop20"
                onClick={() => this.signUpUser()}
              >
                <button className="button border-radius-5 font-size-13 font-weight-600 white">
                  Sign Up
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                </button>
              </div>
            </div>
            <p className="ptext">
              Need help? Contact us <a href="signup.html"> here</a>{" "}
            </p>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  user_added: state.user_added,
});
export default withRouter(
  connect(mapStateToProps, {
    addUser,
  })(Signup)
);
