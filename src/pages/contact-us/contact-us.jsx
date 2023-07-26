import React, { Component } from "react";
import { withRouter } from "react-router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { contactAdmin } from "../../redux/contact-us/action";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrycode: "+1",
      email: "",
      query: "",
      phonenumber: "",
      validateFieldsError: false,
      user_added_msg: "",
      captcha_verified:false,
      captcha_error:false

    };
  }

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
  onChangeCaptcha = (value) => {
    if(value !== ''){

    this.setState({
      captcha_verified:true,
      captcha_error:false
    })
    }
    
  };

  contactUsbtn = () => {
    if(this.state.captcha_verified){
      let data = {
        email: this.state.email,
        query: this.state.query,
        phonenumber: this.state.phonenumber,
        country_code: this.state.countrycode,
        user_added_msg:''
      };
  
      this.props.contactAdmin(data);
    }else{
      this.setState({
        captcha_error:true
      })
      
    }
 
  };
  componentDidUpdate(prevProps) {
    if (prevProps.contact_us_status !== this.props.contact_us_status) {
      if (this.props.contact_us_status !== " ") {
 
        this.setState({
          user_added_msg: this.props.contact_us_status
        });
      }
    }
  }
  onConfirm = () => {
    this.props.history.push("/login");
  };
  render() {
    window.scrollTo(0, 0);
    return (
      <>
      <title>Ticket Penguin Contact Us</title>
        <div className="login-main-container signup-main contact">
          {this.state.user_added_msg !== "" ? (
            <SweetAlert
            success
              title="Message sent!"
              onConfirm={this.onConfirm}
              customButtons={
                <React.Fragment>
                  <button style={{background:'#0466ff',width:'20%',height:'40px',border:'none',color:'#fff',borderRadius:'11px'}} onClick={this.onConfirm}>OK</button>
                  
                </React.Fragment>
              }
            >
              Thanks for reaching out to us. We will respond to you within 24 hours!
            </SweetAlert>


          ) : (
            ""
          )}

          <div className="login-internal">
            <div className="right-login">
              <div className="right-login-box">
                <div className="login-logo">
                  <img
                    src={require("../../assets/images/logo.png")}
                    className="login-logo-img"
                  />
                </div>
                <div className="login-user">
                  Please ask your query. We are happy to help you!
                </div>
                <div className="login-form-container">
                  <div className="login-form-internal">
                    <div className="row"></div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <div className="email-text">Email Address</div>
                          <div className="email-box">
                            <input
                              className="email-input"
                              type="email"
                              name="email"
                              placeholder="Enter Email Address"
                              value={this.state.email}
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
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <div className="email-text first-name">
                            Phone Number
                          </div>
                          <div className="email-input-main">
                            <div className="email-box country-code">
                              <PhoneInput
                                className="email-input country-code"
                                country={"us"}
                                value={this.state.countrycode}
                                onChange={(countrycode) =>
                                  this.setState({ countrycode })
                                }
                              />
                            </div>

                            <input
                              className="email-input enter-phone-number"
                              type="text"
                              name="phonenumber"
                              placeholder="Enter Phone Number"
                              value={this.state.phonenumber}
                              onChange={this.handleInput}
                            />
                          </div>
                          {this.state.validateFieldsError &&
                          this.state.phonenumber == "" ? (
                            <div className="input-field-error">
                              Please enter your phone number
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <div className="email-text">Query</div>
                          <div className="email-box">
                            <textarea
                              className="email-input textarea"
                              type="textarea"
                              name="query"
                              placeholder="Please enter your query"
                              value={this.state.query}
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
                        </div>
                      </div>
                    </div>
                    
                    <div className="captcha">
                      <ReCAPTCHA
                        sitekey="6LdXoickAAAAAN_KMKFcwDvkmkG-m-d-LUVm5nnt"
                        onChange={(value) => this.onChangeCaptcha(value)}
                      />
                    </div>
                    {this.state.captcha_error
                          ?(
                            <div className="input-field-error">
                              Please fill the captcha first!
                            </div>
                          ) : (
                            ""
                          )}
                    <div className="login-btn-box">
                      <div
                        className="login-btn"
                        onClick={() => this.contactUsbtn()}
                      >
                        Submit
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
    contact_us_status: state.contact_us_status
});
export default withRouter(
  connect(mapStateToProps, { 
    contactAdmin 
})(ContactUs)
);
