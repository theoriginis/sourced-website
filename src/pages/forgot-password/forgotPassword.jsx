import React, { Component } from "react";
import { withRouter } from "react-router";
import SearchBar from "../../components/main-search-bar";

import {passwordForgot} from "../../redux/forgot-password/action";
import { connect } from "react-redux";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      email:'',
      validateFieldsError: false,
    };
  }
  goToLogin = () => {
    this.props.history.push('/login')
  };
  handleInput = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  forgotPassword = ()=>{

    if(this.state.email ==''){
      this.setState({
        validateFieldsError:true
      })
    }else{
      let data={
        email:this.state.email
      }
      this.props.passwordForgot(data);
    }
  }
  render() {

    return (
      <>
        <div className="forgot-password-main-container">
          <div className="login-internal">
          
            <div >
              <div >
                <div className="login-logo">
                  <img
                    src={require("../../assets/images/logo.png")}
                    className="login-logo-img"
                  />
                </div>
                <div className="login-user">Forgot Password?   </div>
                <div className="forogot-password-text">No worries, enter your email and we will send you a unique link to reset it!</div>
                <div className="login-form-container">
                {this.props.forgot_password && this.props.forgot_password.error !=='' ?  <div className="input-field-error">
                        {this.props.forgot_password.error}
                      </div> :''}
                      {this.props.forgot_password && this.props.forgot_password.forgot_password !=='' ?  <div className="input-field-error">
                        {this.props.forgot_password.forgot_password.message}
                      </div> :''}
                  <div className="login-form-internal">
                    <div className="email-text">Email Address</div>
                    <div className="email-box">
                      <input
                        className="email-input"
                        type="text"
                        placeholder="Enter Email Address"
                        name="email"
                        onChange={this.handleInput}
                      />
                    </div>
                    {this.state.validateFieldsError &&
                    this.state.email == "" ? (
                      <div className="input-field-error">
                        Please enter your email
                      </div>
                    ) : (
                      ""
                    )}
                   
                    <div className="login-btn-box">
                      <div className="login-btn forgot-password-btn" onClick={this.forgotPassword}> Reset Password</div>
                    </div>
                    <div className="border-box"></div>
                    <div className="sign-up-box">
                      
                      <div className="sing-up" onClick={this.goToLogin}>
                        Back to Login
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  forgot_password: state.forgot_password,
});
export default withRouter(
  connect(mapStateToProps, {
    passwordForgot
  })(ForgotPassword)
);
