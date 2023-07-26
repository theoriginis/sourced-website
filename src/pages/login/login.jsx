import React, { Component } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { userLogin } from "../../redux/login/action";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      email: "",
      password: "",
      validateFieldsError: false,
      is_login: false,
      login_error:''
    };
  }
  goToSignUp = () => {
    this.props.history.push("/sign-up");
  };
  forgotPassword = () => {
    this.props.history.push("/forgot-password");
  };
  loginUser = () => {
    if (this.state.email && this.state.password !== "") {
      let data = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.userLogin(data);
    } else {
      this.setState({
        validateFieldsError: true,
      });
    }
  };
  handleInput = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.user_info !== this.props.user_info) {
      if (this.props.user_info.user_info.type == "success") {
        this.setState({
          is_login: true,
        });
        localStorage.setItem(
          "user_info",
          JSON.stringify(this.props.user_info.user_info)
        );
        window.location.href = "/";
      }else{
        this.setState({
          login_error: this.props.user_info.error,
        });
        
      }
    }
  }
  onCancel = () => {
    this.props.history.push("/");
  };
  onConfirmCancel = () => {
    this.props.history.push("/login");
  };

  render() {

    return (
      <>
        <div>
          <main>
          {this.state.login_error !== "" ? (
            <SweetAlert
              danger
              title="Login Error"
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
                      marginTop:'20px'
                    }}
                    onClick={this.onConfirmCancel}
                  >
                    OK
                  </button>
                </React.Fragment>
              }
            >
              <span style={{'marginTop':'20px'}}>{this.state.login_error}</span>
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
                Login to Sourced
              </h2>
              <p> Enter your details to continue </p>
              <div className="login-box">
                <div className="margin-bottom-15">
                  <lable> Email </lable>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="form-controls"
                    name="email"
                    value={this.state.email}
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
                    value={this.state.password}
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
                <div className="margin-bottom-15 margintop20" onClick={this.loginUser}>
                  <button className="button border-radius-5 font-size-13 font-weight-600 white">
                    Login
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>{" "}
                  </button>
                </div>
                <p className="ptext">
               Don't have account? <span className="signup-text"  onClick={this.goToSignUp}>Create</span>{" "}
              </p>
              </div>
              <p className="ptext">
                Need help? Contact us <a href="#"> here</a>{" "}
              </p>
            </div>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user_info: state.user_info,
});
export default withRouter(
  connect(mapStateToProps, {
    userLogin,
  })(Login)
);
