import React, { Component } from "react";

import SearchBar from "../../components/main-search-bar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { evenDetails } from "../../redux/upcoming-event/action";

class PrivacyPolicies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_details: "",
      tickets: [],
      total_seats: 0,
      is_open: false,
    };
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <>
      <title>Ticket Penguin Privacy Policies</title>
        <div className="conta_iner my-4">
          <div className="search_results">
            <div className="container-event-name">
              <div className="section-heading text-left">
                <h2>Privacy Policies</h2>
                {/* <p>Showing 10 of 'Wembley Stadium Results' </p> */}
              </div>
              <p>
                This Privacy Policy sets out how we,  <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk </a> collect,
                store and use information about you when you use or
                interact with our website,  <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk</a> (our website)
                and where we otherwise obtain or collect information about you.
              </p>
              <p>This Privacy Policy is effective from 19th January, 2023.</p>
              <p className="t_and_c_heaindg">ABOUT US: </p>
              <p>Ticket Penguin LTD, (we, our and us) operates the website.</p>
              <p>
                {" "}
                Ticket Penguin LTD is an online ticketing website with an
                integrated ticketing system to provide online tickets to its
                customers for events, which is based in United Kingdom. Our
                mailing address is 7 Bell Yard WC2A 2JR London United Kingdom.
              </p>
              <p>
                Our email address is{" "}
                <a href="mailto:support@ticketpenguin.co.uk">
                  support@ticketpenguin.co.uk.
                </a>
              </p>
              <p>
                <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk</a> is
                compliant with the 2018 E.U. GDPR
              </p>
              <p>Data controller:  <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk</a></p>
              <p className="t_and_c_heaindg">WEB SERVER LOG INFORMATION: </p>
              <p>
                We use a server to host our website. Our website server
                automatically logs the IP address you use to access our website as
                well as other information about your visit such as the pages
                accessed, information requested, the date and time of the request,
                the source of your access to our website, and your browser version
                and operating system.
              </p>
              <p className="t_and_c_heaindg">
                USE OF WEBSITE SERVER LOG INFORMATION FOR IT SECURITY PURPOSES:
              </p>
              <p>
                We do not access log data from our website server collect and
                store server logs to ensure network and IT security and so that
                the server and website remain uncompromised. This includes
                analysing log files to help identify and prevent unauthorised
                access to our network, the distribution of malicious code, denial
                of services attacks and other cyber-attacks, by detecting unusual
                or suspicious activity.
              </p>
              <p className="t_and_c_heaindg">
                USE OF WEBSITE SERVER LOG INFORMATION TO ANALYSE WEBSITE USE AND
                IMPROVE OUR WEBSITE:
              </p>{" "}
              <p>
                We use the information collected by our website server logs to
                analyse how our website users interact with our website and its
                features. For example, we analyse the number of visits and unique
                visitors we receive, the time and date of the visit, the location
                of the visit and the operating system and browser used.
              </p>
              <p className="t_and_c_heaindg">
                INFORMATION WE COLLECT WHEN YOU CONTACT US:
              </p>{" "}
              <p>
                We collect and use information from individuals who contact us in
                accordance with this section.
              </p>
              <p className="t_and_c_subheaindg">Email:</p>
              <p>
                When you send an email to the email address displayed on our
                website we collect your email address and any other information
                you provide in that email.
              </p>
              <p className="t_and_c_heaindg">
                TRANSFER AND STORAGE OF YOUR INFORMATION:
              </p>
              <p className="t_and_c_subheaindg">Contact form:</p>
              <p>
                When you contact us using our contact form, we collect name, email
                address, and IP address. We also collect any other information you
                provide to us when you complete the contact form including any
                optional information, such as phone number or company name. If you
                do not provide the mandatory information required by our contact
                form, you will not be able to submit the contact form and we will
                not receive your enquiry.
              </p>
              <p className="t_and_c_heaindg">
                TRANSFER AND STORAGE OF YOUR INFORMATION:
              </p>
              <p className="t_and_c_subheaindg">Post:</p>
              <p>
                If you contact us by post, we will collect any information you
                provide to us in any postal communications you send us.
              </p>
              <p className="t_and_c_heaindg">
                INFORMATION WE COLLECT WHEN YOU INTERACT WITH OUR WEBSITE:
              </p>
              <p>
                We collect and use information from individuals who interact with
                particular features of our website in accordance with this
                section.
              </p>
              <p className="t_and_c_heaindg">E-Newsletter:</p>
              <p>
                {" "}
                When you sign up for our e-newsletter on our website or opt to
                receive news, offers from us by entering the name and email
                address and clicking subscribe or ticking a box at checkout
                indicating that you would like to receive your e-newsletter, we
                collect name and email address.
              </p>
              <p className="t_and_c_heaindg">
                TRANSFER AND STORAGE OF YOUR INFORMATION:
              </p>
              <p className="t_and_c_subheaindg">Registering on our website:</p>
              <p>
                When you register and create an account on our website, we collect
                the following information: name, email address, contact and any
                other information you provide to us when you complete the
                registration form, including any optional information, such as
                phone number or company name. If you do not provide the mandatory
                information required by the registration form, you will not be
                able to register or create an account on our website.
              </p>
              <p className="t_and_c_subheaindg">Processing your payment:</p>
              <p>
                After you place an order on our website you will need to make
                payment for the goods or services you have ordered. In order to
                process your payment we use a third party payment processor, your
                payment will be processed by the third party payment processor you
                choose to process your payment.
              </p>
              <p>
                The third party payment processor choose to process your payment
                collects, uses and processes your information, including payment
                information, in accordance with their privacy policies. You can
                access their privacy policies.
              </p>
              <p className="t_and_c_heaindg">
                TRANSFER AND STORAGE OF YOUR INFORMATION:
              </p>
              <p className="t_and_c_subheaindg">Marketing communications:</p>
              <p>
                At checkout you will have the option of receiving marketing
                communications from us.
              </p>
              <p className="t_and_c_subheaindg">THIRD PARTY SERVICES:</p>
              <p>
                In addition to receiving information about our services, you can
                opt in to receiving marketing communications from us in relation
                third party and services by email.
              </p>
              <p className="t_and_c_heaindg">
                INFORMATION COLLECTED OR OBTAINED FROM THIRD PARTIES:
              </p>
              <p>
                This section sets out how we obtain or collect information about
                you from third parties.
              </p>
              <p className="t_and_c_subheaindg">
                Information received from third parties:
              </p>
              <p>
                The website will be accessible or optimized on all browsers,
                computers, tablets, phones, or viewing platforms.
              </p>
              <p>
                Generally, we do receive information about you from third parties.
                It is also possible that third parties with whom we have had no
                prior contact may provide us with information about you.
              </p>
              <p>
                Information we obtain from third parties will generally be your
                name and contact details, but will include any additional
                information about you which they provide to us.
              </p>
              <p className="t_and_c_subheaindg">
                WHERE WE RECEIVE INFORMATION ABOUT YOU IN ERROR:
              </p>
              <p>
                If we receive information about you from a third party in error
                and/or we do not have a legal basis for processing that
                information, we will delete your information.
              </p>
              <p className="t_and_c_subheaindg">
                DISCLOSURE AND ADDITIONAL USES OF YOUR INFORMATION:
              </p>
              <p>
                This section sets out the circumstances in which will disclose
                information about you to third parties and any additional purposes
                for which we use your information.
              </p>
              <p className="t_and_c_subheaindg">
                Disclosure of your information to service providers:
              </p>
              <p>
                We use third parties to provide us with services which are
                necessary to run our business or to assist us with running our
                business.
              </p>
              <p>
                Your information will be shared with the service providers where
                necessary to provide you with the service you have requested,
                whether that is accessing our website, or ordering goods and
                services from us.
              </p>
              <p>
                We do not display the identities of all of our service providers
                publicly by name for security and competitive reasons. If you
                would like further information about the identities of our service
                providers, however, please contact us, directly via our contact
                form or by email and we will provide you with such information
                where you have a legitimate reason for requesting it.
              </p>
              <p className="t_and_c_subheaindg">
                Disclosure of Your Information to Other Third Parties:
              </p>
              <p>
                {" "}
                We disclose your information to other third parties in specific
                circumstances, as set out below. Providing information to third
                parties when they collects information through our use of
                Analytics on our website. They uses this information, including IP
                addresses and information from cookies, for a number of purposes,
                such as improving Analytics service.{" "}
              </p>
              <p className="t_and_c_heaindg">
                TRANSFER AND STORAGE OF YOUR INFORMATION:{" "}
              </p>
              <p>
                Sharing your information with third parties, which are either
                related to or associated with the running of our business, where
                it is necessary for us to do so. These third parties include our
                accountants, advisors, affiliates, business partners, independent
                contractors. Further information on each of these third parties is
                set out below.
              </p>
              <p>Accountants</p>
              <p>Advisors</p>
              <p>Affiliates</p>
              <p>Business partners</p>
              <p>Independent contractors</p>
              <p className="t_and_c_heaindg">
                DISCLOSURE AND USE OF YOUR INFORMATION FOR LEGAL REASONS:
              </p>
              <p className="t_and_c_subheaindg">
                {" "}
                Indicating possible criminal acts or threats to public security to
                a competent authority:
              </p>
              <p>
                If we suspect that criminal or potential criminal conduct has been
                occurred, we will in certain circumstances need to contact an
                appropriate authority, such as the police. This could be the case,
                for instance, if we suspect that we fraud or a cybercrime has been
                committed or if we receive threats or malicious communications
                towards us or third parties.
              </p>
              <p>
                We will generally only need to process your information for this
                purpose if you were involved or affected by such an incident in
                some way.
              </p>
              <p className="t_and_c_heaindg">
                {" "}
                HOW LONG WE RETAIN YOUR INFORMATION:
              </p>
              <p>
                {" "}
                This section sets out how long we retain your information. We have
                set out specific retention periods where possible. Where that has
                not been possible, we have set out the criteria we use to
                determine the retention period.
              </p>
              <p className="t_and_c_subheaindg">Retention periods:</p>
              <p className="t_and_c_subheaindg">Server log information:</p>
              <p>we retain information on our server logs for one year.</p>
              <p className="t_and_c_subheaindg">Order information:</p>
              <p>
                when you place an order for goods and services, we retain that
                information for six years following the end of the financial year
                in which you place your order, in accordance with our legal
                obligation to keep records for tax purposes.
              </p>
              <p className="t_and_c_subheaindg"> E-Newsletter:</p>
              <p>
                {" "}
                we retain the information you used to sign up for our e-newsletter
                for as long as you remain subscribed or if we decide to cancel our
                e-newsletter service, whichever comes earlier.
              </p>
              <p className="t_and_c_heaindg">
                {" "}
                CRITERIA FOR DETERMINING RETENTION PERIODS:
              </p>
              <p>
                In any other circumstances, we will retain your information for no
                longer than necessary, taking into account the following:
              </p>
              <p>
                The purpose and use of your information both now and in the future
                such as whether it is necessary to continue to store that
                information in order to continue to perform our obligations under
                a contract with you or to contact you in the future;
              </p>
              <p>
                Whether we have any legal obligation to continue to process your
                information;
              </p>
              <p>
                Whether we have any legal basis to continue to process your
                information;
              </p>
              <p>How valuable your information is;</p>
              <p>
                any relevant agreed industry practices on how long information
                should be retained;
              </p>
              <p>
                the levels of risk, cost and liability involved with us continuing
                to hold the information;
              </p>
              <p>
                how hard it is to ensure that the information can be kept up to
                date and accurate; and
              </p>
              <p>Any relevant surrounding circumstances.</p>
              <p className="t_and_c_heaindg">HOW WE SECURE YOUR INFORMATION:</p>
              <p>
                We take appropriate technical and organisational measures to
                secure your information and to protect it against unauthorised or
                unlawful use and accidental loss or destruction, including:
              </p>
              <p>
                Only sharing and providing access to your information to the
                minimum extent necessary, subject to confidentiality restrictions
                where appropriate, and on an anonymised basis wherever possible;
              </p>
              <p>Using secure servers to store your information;</p>
              <p>
                verifying the identity of any individual who requests access to
                information prior to granting them access to information;
              </p>
              <p className="t_and_c_heaindg">
                TRANSMISSION OF INFORMATION TO US BY EMAIL:
              </p>
              <p>
                {" "}
                Transmission of information over the internet is not entirely
                secure, and if you submit any information to us over the internet,
                you do so entirely at your own risk.
              </p>
              <p>
                We cannot be responsible for any costs, expenses, loss of profits,
                harm to reputation, damages, liabilities or any other form of loss
                or damage suffered by you as a result of your decision to transmit
                information to us by such means.
              </p>
              <p className="t_and_c_heaindg"> RIGHTS IN RELATION TO YOUR INFORMATION: </p>
              <p>
                Subject to certain limitations on certain rights, you have the following rights in relation to your information, which you can exercise by sending an email to support@ticketpenguin.co.uk:
              </p>

              <p>
                To request access to your information and information related to our use and processing of your information;
              </p>
              <p>To request the correction or deletion of your information;
              </p>
              <p>To request that we restrict our use of your information;</p>
              <p>To receive information which you have provided to us in a structured, commonly used and machine-readable format (e.g. a CSV file) and the right to have that information transferred to another data controller; </p>
              <p>To object to the processing of your information for certain purposes; and</p>
              <p>To withdraw your consent to our use of your information at any time where we rely on your consent to use or process that information. Please note that if you withdraw your consent, this will not affect the lawfulness of our use and processing of your information on the basis of your consent before the point in time when you withdraw your consent.</p>
              <p>The right not to be subject to a decision based solely on automated processing, including profiling which produces legal affects concerning you or similarly significantly affects you.</p>
              <p className="t_and_c_heaindg">VERIFYING YOUR IDENTITY WHERE YOU REQUEST ACCESS TO YOUR INFORMATION:</p>
              <p>Where you request access to your information, we are required by law to use all reasonable measures to verify your identity before doing so. </p>
              <p>These measures are designed to protect your information and to reduce the risk of identity fraud, identity theft or general unauthorised access to your information.</p>
              <p className="t_and_c_heaindg">HOW WE VERIFY IDENTITY:</p>
              <p>Where we possess appropriate information about you on file, we will attempt to verify your identity using that information. </p>
              <p>If it is not possible to identity you from such information, or if we have insufficient information about you, we may require original or certified copies of certain documentation in order to be able to verify your identity before we are able to provide you with access to your information. </p>
              <p>We will be able to confirm the precise information we require to verify your identity in your specific circumstances if and when you make such a request.</p>
              <p className="t_and_c_heaindg">RIGHT TO OBJECT TO THE PROCESSING OF YOUR INFORMATION FOR CERTAIN PURPOSES:</p>
              <p>You have the following rights in relation to your information, which you may exercise in the same way as you may exercise by sending an email to support@ticketpenguin.co.uk:</p>
              <p>To object to us using or processing your information where we use or process it in order to carry out a task in the public interest or for our legitimate interests, including ‘profiling’ based on any of these purposes; and</p>
              <p>To object to us using or processing your information for direct marketing purposes.</p>
              <p>You may also exercise your right to object to us using or processing your information for direct marketing purposes by:</p>
              <p>Clicking the unsubscribe link contained at the bottom of any marketing email we send to you and following the instructions which appear in your browser following your clicking on that link; </p>
              <p>Sending an email to support@ticketpenguin.co.uk, asking that we stop sending you marketing communications or by including the words “OPT OUT”.</p>
              <p className="t_and_c_heaindg">CHANGES TO OUR PRIVACY POLICY:</p>
              <p>We update and amend our Privacy Policy from time to time.</p>
              <p className="t_and_c_subheaindg">Minor changes to our Privacy Policy:</p>
              <p>Where we make minor changes to our Privacy Policy, we will update our Privacy Policy with a new effective date stated at the beginning of it. Our processing of your information will be governed by the practices set out in that new version of the Privacy Policy from its effective date onwards.</p>
              <p className="t_and_c_subheaindg">Major changes to our Privacy Policy or the purposes for which we process your information:</p>
              <p>Where we make major changes to our Privacy Policy or intend to use your information for a new purpose or a different purpose than the purposes for which we originally collected it, we will notify you by email (where possible) or by posting a notice on our website.</p>
              <p>We will provide you with the information about the change in question and the purpose and any other relevant information before we use your information for that new purpose.</p>
              <p>Wherever required, we will obtain your prior consent before using your information for a purpose that is different from the purposes for which we originally collected it.</p>
              <p className="t_and_c_heaindg">CHILDREN’S PRIVACY:</p>
              <p>We do not knowingly contact or collect information from persons under the age of 13. The website is not intended to solicit information of any kind from persons under the age of 13.</p>
              <p>It is possible that we could receive information pertaining to persons under the age of 13 by the fraud or deception of a third party. If we are notified of this, as soon as we verify the information, we will, where required by law to do so, immediately obtain the appropriate parental consent to use that information or, if we are unable to obtain such parental consent, we will delete the information from our servers. If you would like to notify us of our receipt of information about persons under the age of 13, please do so by sending an email to support@ticketpenguin.co.uk.</p>

              <p className="t_and_c_heaindg"> COPYRIGHT:</p>
              <p>
                {" "}
                The copyright in these Terms and Conditions is either owned by or
                licensed to, us and is protected by copyright laws around the
                world and copyright protection software. Unless expressly
                indicated otherwise, all intellectual property rights in this
                document and elsewhere on our website, including any content on
                our website, are reserved.
              </p>
              <p className="t_and_c_heaindg">CONTACT INFORMATION: </p>
              <p>
                {" "}
                If you have any questions regarding these terms and conditions of
                this website, please contact us by any of the following means;
              </p>
              <p>
                {" "}
                Web:{" "}
                <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk </a>
              </p>
              <p>
                Email:
                <a href="mailto:support@ticketpenguin.co.uk">
                  support@ticketpenguin.co.uk.
                </a>
              </p>
              <p>Address: 7 Bell Yard WC2A 2JR London United Kingdom</p>
              <p> © All rights reserved. January, 2023.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(PrivacyPolicies));
