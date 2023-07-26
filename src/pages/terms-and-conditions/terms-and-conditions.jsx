import React, { Component } from "react";

import SearchBar from "../../components/main-search-bar";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { evenDetails } from "../../redux/upcoming-event/action";

class TermsAndConditions extends Component {
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
  <title>Ticket Penguin Terms And Conditions</title>
      <div className="conta_iner my-4">
        <div className="search_results">
        
          <div className="container-event-name">
          <div className="section-heading text-left">
                  <h2>Terms and Conditions</h2>
                  {/* <p>Showing 10 of 'Wembley Stadium Results' </p> */}
                </div>
            <p>
              The following terms and conditions, govern your access to and use
              of the <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk</a> website, including any content, and
              services offered on or through <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk</a>
              (the "website"), (collectively, "we" or "us").
            </p>
            <p>PLEASE READ THE PRIVACY POLICY AND ALL OF THE FOLLOWING TERMS AND
            CONDITIONS BEFORE USING THIS SITE. BY CONTINUING TO ACCESS OR USE
            THIS SITE OR ANY SERVICE ON THIS SITE, YOU SIGNIFY YOUR ACCEPTANCE
            OF THESE TERMS AND CONDITIONS.  These Terms and Conditions are
            effective from 19th January 2023. </p>
            <p className="t_and_c_heaindg">ABOUT US: </p>
            <p>Ticket Penguin LTD, (we,
            our and us) operates the website.</p><p> Ticket Penguin LTD is an online
            ticketing website with an integrated ticketing system to provide
            online tickets to its customers for events, which is based in United
            Kingdom.
            Our mailing address is 7 Bell Yard WC2A 2JR London United
            Kingdom.</p>
            <p>Our email address is <a href="mailto:support@ticketpenguin.co.uk">support@ticketpenguin.co.uk.</a></p>
            <p><a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk</a> is compliant with the 2018 E.U. GDPR</p>
            <p className="t_and_c_heaindg">ACCEPTANCE: </p>
            <p>Please read these Terms and Conditions and Privacy
            Policy very carefully. If you do not agree to any of the provisions
            set out in those documents, you must not use the website services.
            By accessing or using the Platform, registering an account, or by
            viewing, accessing, streaming, uploading or downloading any content
            or information from or to the website, you represent and warrant
            that you have read and understood these Terms and Conditions, and
            that you are either 13 years of age or more, or the applicable age
            of majority in your jurisdiction.</p> 
            <p className="t_and_c_heaindg">SERVICE:</p> 
            <p>Your use of the Service
            is at your sole risk. The Service are provided on an “as is” and “as
            available” basis.</p>
            <p> You understand and agree that we shall not be
            liable for any direct, indirect, incidental, special, consequential
            or exemplary damages, including but not limited to any loss of
            profit, loss of goodwill, loss of business reputation, loss of data,
            cost of procurement of substitute services, or other intangible
            loss, resulting from: (i) the service (ii) the results of the
            service (iii) the use or the inability to use the service; (iv) any
            changes which we may make to the service, or any permanent or
            temporary termination of the service; (v) Any inappropriate incident
            occur at the event or any other matter relating to the services.</p>
            <p> The
            service provided by the <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk</a> is as follow;</p> 
            <p>Sale
            of Tickets</p> <p>Ticket means all tickets or vouchers sold to customers,
            evidencing the entitlement of admission to an event. </p>
            <p className="t_and_c_heaindg">ACCOUNT
            DETAILS:</p> <p>If we provide you with account information such as a user
            name, identification number, account code, and/or password, you must
            keep such information confidential and secret and not disclose it to
            anyone. All account information is provided for use of the named
            account holder only, and not for any other person. You are
            responsible for any consequences of unauthorized access to your
            account due to any disclosure of your account information to any
            third party. </p>
            <p>We reserve the right to withdraw access to your account
            without notice for any actual or suspected breach of these Terms and
            Conditions or any other documentation referred to in them,
            including, without limitation, where we suspect that there has been
            unauthorized access to your account, or any unauthorized disclosure
            of your login information.</p> 
            <p>If you know or suspect that the
            confidentiality of your login information has been compromised, for
            example, by the disclosure of such information to any third party,
            you must immediately change your password. If you are unable to
            change your password, you must immediately notify us by email, at
            <a href="mailto:support@ticketpenguin.co.uk">support@ticketpenguin.co.uk.</a></p> 
            <p className="t_and_c_heaindg">REFUND:</p>
            <p> Buyers are subject to a 24 hour
            cancellation policy, however once this time period has expired
            refunds cannot be issued. Ticket Penguin has the right to refund
            your order if they cannot fulfil the sale for the tickets sold –
            this is also subject to additional compensation for the customer if
            necessary.</p> 
            <p className="t_and_c_heaindg">USER’S CONTENT:</p>
            <p> Users may post and upload content on
            <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk.</a> You represent that you have the right to
            post any content which you post on <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk,</a> and that
            such content, or its use by us as contemplated by this Agreement,
            does not violate these Terms, applicable law, or the intellectual
            property rights of any other person. You grant us a non-exclusive,
            transferable, sub-licensable, worldwide license to use any content
            that you post on or in connection with <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk.</a></p>
            <p className="t_and_c_heaindg">MODIFICATIONS TO THESE TERMS AND CONDITIONS:</p>
            <p> We reserve the right to
            update these Terms and Conditions and any other documentation
            referred to in any of these documents from time to time. We may
            change our Terms and Conditions and other documentation for any
            reason, including:</p>
            <p> To reflect any changes in the way we carry out
            our business;</p>
            <p> To account for any changes we make to our website,
            including, without limitation, any new features or functionality we
            provide, any adjustments to the means by which we provide notices to
            you, or any changes in the content, purpose or availability of the
            website;</p>
            <p>To accurately describe our current data-processing
            activities so that you are kept up to date with our latest
            practices;</p>
            <p>To ensure, that our documentation complies and remains
            compliant with any and all current and future applicable laws,
            regulations and official guidance.</p> 
            <p>If required by law, we will
            provide you with notice of any changes in these Terms and Conditions
            or the other documentation referred to in them by posting a notice
            on the website and/or by posting an updated version of these Terms
            and Conditions or other such documentation on our website with a new
            effective date stated at the beginning of them.</p>
            <p className="t_and_c_heaindg">INFORMATION AND
            CONTENT ON OUR WEBSITE PROVIDED ON NON-RELIANCE BASIS:</p> 
            <p>Our website
            is made available to you in order to provide you with general
            information about us, our business, and any services that we offer
            from time to time. We do not make our website available for any
            other purposes, except as expressly provided in these Terms and
            Conditions. We make no representations and provide no warranties
            whatsoever, whether express or implied, that any of the content or
            materials available on our website from time to time are accurate,
            up to date or complete.</p> 
            <p className="t_and_c_heaindg">OTHER DOCUMENTS GOVERNING YOUR USE OF OUR
            WEBSITE:</p> 
            <p>In addition to these Terms and Conditions, your use of our
            website is also governed by the following document: Our privacy
            policy is available at <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk.</a> Our privacy policy
            governs our use of your information. It sets out the types of
            information we collect, the reasons we collect it, how we use it,
            where we may pass it on to any third parties, in what circumstances
            and for what reasons, and any other relevant information relating to
            our use and/or processing of your information and your rights in
            relation to your information.</p> 
            <p className="t_and_c_heaindg">LINKS TO OTHER WEBSITES:</p> 
            <p>Links to
            third party content or websites may appear on our website from time
            to time. We are not responsible for the content of any websites
            accessible via any link(s) on our website. All content on third
            party websites is outside of our control, and we do not represent or
            warrant that such content is related to us or our website, suitable
            or appropriate for use or viewing, lawful or accurate.</p>
            <p>You should
            check the terms & conditions and privacy policy of any such third
            party to establish how they may use your information before you
            decide to use their website and its features.</p>
            <p className="t_and_c_heaindg">AVAILABILITY OF OUR
            WEBSITE:</p>
            <p> We make no representations and provide no warranties that:
            The website will be made available at any specific time or from any
            specific geographical location; your access to the website will be
            continuous or uninterrupted; or</p> 
            <p>The website will be accessible or
            optimized on all browsers, computers, tablets, phones, or viewing
            platforms.</p>
            <p> We reserve the right to suspend access to all or part of
            the website for any reason, including for business or operational
            reasons, such as improving the appearance or functionality of the
            website, content updates, periodic maintenance, or to resolve any
            issues that we become aware of. Wherever we anticipate that we need
            to suspend access to the website for a considerable period of time,
            we will try to provide you with prior notice where reasonably
            practicable.</p> 
            <p className="t_and_c_heaindg">PERMITTED USE OF MATERIALS ON OUR WEBSITE:</p>
            <p>The content
            on our website is provided for your personal, private, and
            non-commercial use only. You may print or share the content from our
            website for lawful personal, private, and non-commercial purposes,
            and you may also make others within your organization aware of the
            content on our website. You may not otherwise extract, reproduce or
            distribute the content of our website without our prior written
            consent.</p> 
            <p className="t_and_c_heaindg">PROHIBITED USES OF OUR WEBSITE:</p>
            <p> You must not reproduce
            duplicate, copy or resell any part of our website or any content
            from our website, save and except to the extent expressly permitted
            in these Terms and Conditions. </p>
            <p>You must not, without our prior
            written consent, access, interfere with, damage or disrupt in any
            way our website or any part of it, our systems, any of our hardware
            or equipment or any networks on which our website is hosted, any
            software that we use to create or modify the website or to make the
            website available to you, or any hardware, equipment, network,
            server, software or technology owned or operated by us or any third
            party.</p>
            <p>You must use our website for lawful purposes only and in
            accordance with these Terms and Conditions. You must not use our
            website: For any purpose that is unlawful or that in any way
            breaches any applicable laws or regulations, whether local, national
            or international;</p> 
            <p> For any fraudulent purposes whatsoever; </p>
            <p>To conduct
            any unsolicited or unauthorized advertising or direct or indirect
            marketing to anyone by any means, or to otherwise spam, communicate
            with or market to anyone any goods, services or business not
            authorized by us;</p>
            <p> To upload, host or transmit any viruses, malware,
            adware, spyware, worms, Trojan horses, keystroke loggers, spyware,
            logic bombs, time bombs or any other harmful programs or code which
            could adversely affect the use or operation of the website, our
            hardware or systems, or the computers, tablets, phones or other
            devices of any users or other third parties, or to upload any
            content or materials containing any such content;</p>
            <p> You will not
            partake in any behaviour that victimizes, harasses, degrades, or
            intimidates an individual or group of individuals on the basis of
            religion, gender, sexual orientation, race, ethnicity, age, or
            disability.</p>
            <p> To communicate with, harm or attempt to harm in any way;
            or </p>
            <p className="t_and_c_heaindg">LIMITATIONS OF LIABILITY: </p>
            <p>OUR ENTIRE LIABILITY, AND YOUR
            EXCLUSIVE REMEDY, IN LAW, IN EQUITY, OR OTHERWISE, WITH RESPECT TO
            THE WEBSITE CONTENT, AND SERVICES AND/OR FOR ANY BREACH OF THESE
            TERMS AND CONDITIONS IS SOLELY LIMITED TO THE AMOUNT YOU PAID, FOR
            PRODCUTS AND SERVICES PURCHASED VIA THE WEBSITE.</p>
            <p> WE WILL NOT BE
            LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR
            CONSEQUENTIAL DAMAGES IN CONNECTION WITH THESE TERMS AND CONDITIONS
            OR THE SERVICES IN ANY MANNER, INCLUDING LIABILITIES RESULTING FROM</p>

            <p>YOUR USE OF OUR WEBSITE;</p>
            <p> ANY CORRUPTION OR LOSS OF DATA;</p>
            <p> ANY
            INABILITY TO ACCESS OUR WEBSITE, INCLUDING, WITHOUT LIMITATION, ANY
            INTERRUPTIONS, SUSPENSION OR WITHDRAWAL OF OUR WEBSITE (FOR ANY
            REASON WHATSOEVER);</p>
            <p> ANY USE YOU MAKE OF ANY CONTENT OR MATERIALS ON
            OUR WEBSITE, INCLUDING ANY RELIANCE YOU MAKE ON SUCH CONTENT OR
            MATERIAL;</p>
            <p> ANY LOSS OF SAVINGS;</p>
            <p> ANY OTHER SECONDARY, CONSEQUENTIAL OR
            INDIRECT LOSSES,</p>
            <p> AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
            OF SUCH LOSS OR DAMAGE, WITHOUT LIMITATION, YOU ASSUME AND SHALL BE
            LIABLE FOR THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR
            CORRECTION IN THE EVENT OF ANY SUCH LOSS, DAMAGE, COSTS, EXPENSES,
            LIABILITIES OR PENALTIES ARISING.</p>
            <p> WE SHALL NOT BE LIABLE FOR ANY
            DAMAGE THAT YOU COULD HAVE AVOIDED BY FOLLOWING OUR ADVICE TO APPLY
            AN UPDATE OFFERED TO YOU FREE OF CHARGE OR FOR DAMAGE THAT WAS
            CAUSED BY YOU FAILING TO CORRECTLY FOLLOW INSTALLATION INSTRUCTIONS
            OR TO HAVE IN PLACE THE MINIMUM SYSTEM REQUIREMENTS ADVISED BY US.</p>
           <p> YOU AGREE THAT IN THE EVENT THAT YOU INCUR ANY DAMAGES, LOSSES OR
            INJURIES ARISING OUT OF, OR IN CONNECTION WITH, OUR ACTS OR
            OMISSIONS, THE DAMAGES, IF ANY, CAUSED TO YOU ARE NOT IRREPARABLE OR
            SUFFICIENT TO ENTITLE YOU TO AN INJUNCTION PREVENTING ANY
            EXPLOITATION OF ANY WEBSITE, SERVICE, PROPERTY, OTHER CONTENT OWNED
            OR CONTROLLED BY US, AND YOU WILL HAVE NO RIGHTS TO ENJOIN OR
            RESTRAIN THE DEVELOPMENT, PRODUCTION, DISTRIBUTION, ADVERTISING,
            EXHIBITION OR EXPLOITATION OF ANY WEBSITE, PROPERTY, SERVICE, OR
            OTHER CONTENT OWNED OR CONTROLLED BY US.</p>
            <p> To the extent that any of
            the provisions of this clause are unenforceable as outright
            exclusions of liability, they shall be construed as limitations on
            liability, limiting our liability to you to the maximum extent
            permitted by law. </p>
            <p className="t_and_c_heaindg">DISCLAIMERS:</p>
            <p> THE WEBSITE IS PROVIDED ON AN “AS
            IS”, “AS AVAILABLE” AND “WITH ALL FAULTS” BASIS. TO THE FULLEST
            EXTENT PERMISSIBLE BY LAW, WE DO NOT MAKE ANY REPRESENTATIONS OR
            WARRANTIES OR ENDORSEMENTS OF ANY KIND WHATSOEVER, EXPRESS OR
            IMPLIED, AS TO:</p>
            <p> THE SERVICE;</p>
            <p> THE WEBSITE CONTENT; </p>
            <p>USER CONTENT; OR</p>

            <p>SECURITY ASSOCIATED WITH THE TRANSMISSION OF INFORMATION TO THE
            WEBSITE.</p> 
            <p>IN ADDITION, WE HEREBY DISCLAIM ALL WARRANTIES, EXPRESS OR
            IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT,
            TITLE, CUSTOM, TRADE, QUIET ENJOYMENT, SYSTEM INTEGRATION AND
            FREEDOM FROM COMPUTER VIRUS.</p>
            <p> WE DO NOT REPRESENT OR WARRANT THAT THE
            SERVICE WILL BE ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE
            CORRECTED OR THAT THE SERVICE OR THE SERVER THAT MAKES THE SERVICE
            AVAILABLE IS FREE FROM ANY HARMFUL COMPONENTS, INCLUDING, WITHOUT
            LIMITATION, VIRUSES. WE DO NOT MAKE ANY REPRESENTATIONS OR
            WARRANTIES THAT THE INFORMATION (INCLUDING ANY INSTRUCTIONS) ON THE
            SERVICE IS ACCURATE, COMPLETE, OR USEFUL. YOU ACKNOWLEDGE THAT YOUR
            USE OF THE WEBSITE IS AT YOUR SOLE RISK. WE DO NOT WARRANT THAT YOUR
            USE OF THE WEBSITE IS LAWFUL IN ANY PARTICULAR JURISDICTION, AND WE
            SPECIFICALLY DISCLAIM SUCH WARRANTIES. SOME JURISDICTIONS LIMIT OR
            DO NOT ALLOW THE DISCLAIMER OF IMPLIED OR OTHER WARRANTIES SO THE
            ABOVE DISCLAIMER MAY NOT APPLY TO YOU TO THE EXTENT SUCH
            JURISDICTION'S LAW IS APPLICABLE TO YOU AND THESE TERMS AND
            CONDITIONS. </p>
            <p>BY ACCESSING OR USING THE WEBSITE YOU REPRESENT AND
            WARRANT THAT YOUR ACTIVITIES ARE LAWFUL IN EVERY JURISDICTION WHERE
            YOU ACCESS OR USE THE SERVICE.</p>
            <p> WE DO NOT ENDORSE CONTENT AND
            SPECIFICALLY DISCLAIM ANY RESPONSIBILITY OR LIABILITY TO ANY PERSON
            OR ENTITY FOR ANY LOSS, DAMAGE (WHETHER ACTUAL, CONSEQUENTIAL,
            PUNITIVE OR OTHERWISE), INJURY, CLAIM, LIABILITY OR OTHER CAUSE OF
            ACTION OF ANY KIND OR CHARACTER BASED UPON OR RESULTING FROM ANY
            CONTENT.</p>
            <p className="t_and_c_heaindg"> INDEMNIFICATION:</p>
            <p> You and also any third party for or on
            behalf of whom you operate an account or activity on the website,
            agree to defend, indemnify and hold us harmless from and against any
            claims, liabilities, damages, losses and expenses, including,
            without limitation, reasonable legal and attorneys’ fees and costs,
            arising out of or in any way connected with any of the following:</p>
            
            <p>Your uploads, access to or use of the website;</p>
            <p> Your breach or
            alleged breach of these Terms and Conditions; </p>
            <p>Your violation of any
            third-party right, including, without limitation, any intellectual
            property right, publicity, confidentiality, property, or privacy
            right; </p>
            <p>Your violation of any laws, rules, regulations, codes,
            statutes, ordinances or orders of any governmental and
            quasi-governmental authorities, including, without limitation, all
            regulatory, administrative and legislative authorities; or</p>
            <p> Any
            misrepresentation made by you.</p>
            <p> You will cooperate as fully required
            by us in the defence of any claim. We reserve the right to assume
            the exclusive defence and control of any matter subject to
            indemnification by you, and you will not, in any event, settle any
            claim without our prior written consent.</p>
            <p className="t_and_c_heaindg"> SEVERABILITY: </p>
            <p>In the event

            any provision of these Terms is deemed to be void, invalid, or
            unenforceable, that provision shall be severed from the remainder of
            these Terms and Conditions so as not to cause the invalidity or
            unenforceability of the remainder of these Terms. All remaining
            provisions of these terms shall then continue in full force and
            effect. If any provision shall be deemed invalid due to its scope or
            breadth, such provision shall be deemed valid to the extent of the
            scope and breadth permitted by law.</p>
            <p className="t_and_c_heaindg"> GOVERNING LAW:</p>
            <p> These Terms and
            Conditions, any documents they refer to, and any disputes arising
            from or in relation to them or any documents they refer to, whether
            contractual or non-contractual, shall be governed by and construed
            in accordance with the law of the United Kingdom.</p>
            <p className="t_and_c_heaindg"> COPYRIGHT:</p>
            <p> The
            copyright in these Terms and Conditions is either owned by or
            licensed to, us and is protected by copyright laws around the world
            and copyright protection software. Unless expressly indicated
            otherwise, all intellectual property rights in this document and
            elsewhere on our website, including any content on our website, are
            reserved.</p> 
            <p className="t_and_c_heaindg">CONTACT INFORMATION: </p>
            <p> If you have any questions regarding
            these terms and conditions of this website, please contact us by any
            of the following means;</p>
            <p> Web: <a href="www.ticketpenguin.co.uk">www.ticketpenguin.co.uk </a></p>
            <p>Email:
            <a href="mailto:support@ticketpenguin.co.uk">support@ticketpenguin.co.uk.</a></p>
            <p>Address: 7 Bell Yard WC2A 2JR London
            United Kingdom</p>
            <p> © All rights reserved. January, 2023.</p>
          </div>
        </div>

        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});
export default withRouter(connect(mapStateToProps, {})(TermsAndConditions));
