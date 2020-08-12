import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../components/button'
import Footer from '../../components/footer'
import Grid from '../../components/grid'
import Header from '../../components/header'
import { ButtonContainer as HeaderButtonContainer } from '../../components/header/styles'
import Heading from '../../components/heading'
import Modal from '../../components/modal'
import RegisterForm from '../../components/register-form'
import SEO from '../../components/seo'
import Layout from '../../layouts'
import { toggleModal } from '../../state'
import { Container, Copy, List, ListItem, SpaceContainer, SVGContainer } from '../../styles/shared'

const PrivacyPage: FC = () => {
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(toggleModal(true))
  }

  return (
    <Layout>
      <SEO title='For single-parents to connect & find love'/>
      <Modal>
        <RegisterForm/>
      </Modal>
      <Header>
        <HeaderButtonContainer>
          <Button onClick={openModal}>Sign up to our private beta</Button>
        </HeaderButtonContainer>
      </Header>
      <Container padding-bottom-xl stretch>
        <Container padding-bottom-xxxl>
          <Grid>
            <Grid.Column xs={{ start: 2, end: 12 }} md={{ start: 3, end: 11 }}>
              <Heading level={1}>Privacy policy</Heading>
              <Container align='left'>
                <Copy align='left'>TRUEME APP (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application (the “Application”).   Please read this Privacy Policy carefully.  IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION.</Copy>
                <Copy align='left'>We reserve the right to make changes to this Privacy Policy at any time and for any reason.  We will alert you about any changes by updating the “Last updated” date of this Privacy Policy.  You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Application after the date such revised Privacy Policy is posted.</Copy>
                <Copy align='left'>This Privacy Policy does not apply to the third-party online/mobile store from which you install the Application or make payments, including any in-game virtual items, which may also collect and use data about you.  We are not responsible for any of the data collected by any such third party. </Copy>

                <Heading level={3}>Collection of your information</Heading>
                <Copy align='left'>We may collect information about you in a variety of ways.  The information we may collect via the Application depends on the content and materials you use, and includes:</Copy>
                <Heading level={4}>Personal data</Heading>
                <Copy align='left'>Demographic and other personally identifiable information (such as your name and email address) that you voluntarily give to us when choosing to participate in various activities related to the Application, such as chat, posting messages in comment sections or in our forums, liking posts, sending feedback, and responding to surveys.  If you choose to share data about yourself via your profile, online chat, or other interactive areas of the Application, please be advised that all data you disclose in these areas is public and your data will be accessible to anyone who accesses the Application.</Copy>
                <Heading level={4}>Derivative data</Heading>
                <Copy align='left'>Information our servers automatically collect when you access the Application, such as your native actions that are integral to the Application, including liking, re-blogging, or replying to a post, as well as other interactions with the Application and other users via server log files.</Copy>
                <Heading level={4}>Financial data</Heading>
                <Copy align='left'>Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Application. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.</Copy>
                <Heading level={4}>Geo-location data</Heading>
                <Copy align='left'>We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using the Application, to provide location-based services. If you wish to change our access or permissions, you may do so in your device’s settings.</Copy>
                <Heading level={4}>Mobile device access</Heading>
                <Copy align='left'>We may request access or permission to certain features from your mobile device, including your mobile device’s camera and other features. If you wish to change our access or permissions, you may do so in your device’s settings.</Copy>
                <Heading level={4}>Mobile device data</Heading>
                <Copy align='left'>Device information such as your mobile device ID number, model, and manufacturer, version of your operating system, phone number, country, location, and any other data you choose to provide.</Copy>
                <Heading level={4}>Push notifications</Heading>
                <Copy align='left'>We may request to send you push notifications regarding your account or the Application. If you wish to opt-out from receiving these types of communications, you may turn them off in your device’s settings.</Copy>
                <Heading level={4}>Third party data</Heading>
                <Copy align='left'>Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Application permission to access this information.</Copy>

                <Heading level={3}>Use of your information</Heading>
                <Copy align='left'>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.  Specifically, we may use information collected about you via the Application to:</Copy>
                <List as='ol'>
                  <ListItem>Create and manage your account.</ListItem>
                  <ListItem>Email you regarding your account or order.</ListItem>
                  <ListItem>Enable user-to-user communications.</ListItem>
                  <ListItem>Fulfill and manage purchases, orders, payments, and other transactions related to the Application.</ListItem>
                  <ListItem>Generate a personal profile about you to make future visits to the Application more personalized.</ListItem>
                  <ListItem>Increase the efficiency and operation of the Application.</ListItem>
                  <ListItem>Monitor and analyze usage and trends to improve your experience with the Application.</ListItem>
                  <ListItem>Notify you of updates to the Application.</ListItem>
                  <ListItem>Offer new products, services, mobile applications, and/or recommendations to you.</ListItem>
                  <ListItem>Perform other business activities as needed.</ListItem>
                  <ListItem>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</ListItem>
                  <ListItem>Process payments and refunds.</ListItem>
                  <ListItem>Request feedback and contact you about your use of the Application. </ListItem>
                  <ListItem>Resolve disputes and troubleshoot problems.</ListItem>
                  <ListItem>Respond to product and customer service requests.</ListItem>
                  <ListItem>Send you a newsletter.</ListItem>
                  <ListItem>Solicit support for the Application.</ListItem>
                </List>

                <Heading level={3}>Disclosure of your information</Heading>
                <Copy align='left'>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</Copy>
                <Heading level={4}>By Law or to Protect Rights</Heading>
                <Copy align='left'>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.  This includes exchanging information with other entities for fraud protection and credit risk reduction.</Copy>
                <Heading level={4}>Third-Party Service Providers</Heading>
                <Copy align='left'>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</Copy>
                <Heading level={4}>Marketing Communications</Heading>
                <Copy align='left'>With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</Copy>
                <Heading level={4}>Interactions with Other Users</Heading>
                <Copy align='left'>If you interact with other users of the Application, those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs.</Copy>
                <Heading level={4}>Online postings</Heading>
                <Copy align='left'>When you post comments, contributions or other content to the Applications, your posts may be viewed by all users and may be publicly distributed outside the Application in perpetuity</Copy>
                <Heading level={4}>Affiliates</Heading>
                <Copy align='left'>We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</Copy>
                <Heading level={4}>Business partners</Heading>
                <Copy align='left'>We may share your information with our business partners to offer you certain products, services or promotions.</Copy>
                <Heading level={4}>Offer Wall</Heading>
                <Copy align='left'>The Application may display a third-party-hosted “offer wall.”  Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for acceptance and completion of an advertisement offer.  Such an offer wall may appear in the Application and be displayed to you based on certain data, such as your geographic area or demographic information.  When you click on an offer wall, you will leave the Application.  A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account.</Copy>
                <Heading level={4}>Social media contacts</Heading>
                <Copy align='left'>If you connect to the Application through a social network, your contacts on the social network will see your name, profile photo, and descriptions of your activity.</Copy>
                <Heading level={4}>Other third parties</Heading>
                <Copy align='left'>We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law. </Copy>
                <Heading level={4}>Sale or Bankruptcy</Heading>
                <Copy align='left'>If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity.  If we go out of business or enter bankruptcy, your information would be an asset transferred or acquired by a third party.  You acknowledge that such transfers may occur and that the transferee may decline honor commitments we made in this Privacy Policy.</Copy>
                <Copy align='left'>We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations.  If you no longer wish to receive correspondence, emails or other communications from third parties, you are responsible for contacting the third party directly.</Copy>

                <Heading level={3}>Tracking technologies</Heading>
                <Heading level={4}>Cookies and Web Beacons</Heading>
                <Copy align='left'>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Application to help customize the Application and improve your experience. When you access the Application, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Application. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.</Copy>
                <Heading level={4}>Internet-Based Advertising</Heading>
                <Copy align='left'>Additionally, we may use third-party software to serve ads on the Application, implement email marketing campaigns, and manage other interactive marketing initiatives.  This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us.  For more information about opting-out of interest-based ads, visit the <a href='http://www.networkadvertising.org/choices/' target='_blank'>Network Advertising Initiative Opt-Out Tool</a> or <a href='http://www.aboutads.info/choices/' target='_blank'>Digital Advertising Alliance Opt-Out Tool.</a></Copy>
                <Heading level={4}>Website Analytics</Heading>
                <Copy align='left'>We may also partner with selected third-party vendors, such as <a href='https://support.google.com/analytics/answer/6004245?hl=en' target='_blank'>Google Analytics</a>, to allow tracking technologies and remarketing services on the Application through the use of first party cookies and third-party cookies, to, among other things, analyze and track users’ use of the Application, determine the popularity of certain content, and better understand online activity. By accessing the Application, you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can install and/or update your settings for one of the following: <a href='https://tools.google.com/dlpage/gaoptout/' target='_blank'>Google Analytics Opt-Out Plugin</a></Copy>
                <Copy align='left'>You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or erasing or otherwise altering your browser’s cookies files may also clear certain opt-out cookies, plug-ins, or settings.</Copy>

                <Heading level={3}>Third-party websites</Heading>
                <Copy align='left'>The Application may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Application, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Application.</Copy>
                <Heading level={3}>Security of your information</Heading>
                <Copy align='left'>We use administrative, technical, and physical security measures to help protect your personal information.  While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.  Any information disclosed online is vulnerable to interception and misuse by unauthorized parties.  Therefore, we cannot guarantee complete security if you provide personal information.</Copy>
                <Heading level={3}>Policy for children</Heading>
                <Copy align='left'>We do not knowingly solicit information from or market to children under the age of 18. If you become aware of any data we have collected from children under age 18, please contact us using the contact information provided below.</Copy>
                <Heading level={3}>Controls for do-not-track features</Heading>
                <Copy align='left'>Most web browsers and some mobile operating systems [and our mobile applications] include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.  No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.  If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.</Copy>
                <Heading level={3}>Options regarding your information</Heading>
                <Heading level={4}>Account information</Heading>
                <Copy align='left'>You may at any time review or change the information in your account or terminate your account by:</Copy>
                <List>
                  <ListItem>Logging into your account settings and updating your account</ListItem>
                  <ListItem>Contacting us using the contact information provided below</ListItem>
                </List>
                <Copy align='left'>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements</Copy>
                <Heading level={4}>Emails and Communications</Heading>
                <Copy align='left'>If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:</Copy>
                <List>
                  <ListItem>Noting your preferences at the time you register your account with the Application.</ListItem>
                  <ListItem>Logging into your account settings and updating your preferences.</ListItem>
                  <ListItem>Contacting us using the contact information provided below.</ListItem>
                </List>
                <Copy align='left'>If you no longer wish to receive correspondence, emails, or other communications from third parties, you are responsible for contacting the third party directly. </Copy>
                <Heading level={3}>Contact Us</Heading>
                <Copy align='left'>If you have questions or comments about this Privacy Policy, please contact us at:</Copy>
                <Copy align='left'>
                  Trueme Group Pty Ltd<br/>
                  3/5 Bridge Street<br/>
                  Newtown 3220<br/>
                  Victoria, Australia<br/>
                  <a href='mailto:hello@trueme.app'>hello@trueme.app</a>
                </Copy>
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </Layout>
  )
}

export default PrivacyPage
