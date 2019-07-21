import React from "react"
import { Container, Button, Link } from "react-floating-action-button"
import Call from "@material-ui/icons/Call"
import Email from "@material-ui/icons/Email"
import Chat from "@material-ui/icons/Chat"
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from './ContactStyles'
import { FacebookProvider, Like, MessageUs, Feed } from 'react-facebook';
class ContactPage extends React.Component {
  render() {
  const {classes}=this.props
  console.log(classes)
    return (
        <>
        <FacebookProvider appId="417448411986006">
       
        <Feed link="https://www.facebook.com/karaenavincentphotography/">
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
      <Container className={classes.container}>
        <Link styles={{}}className={classes.chat} href="#" tooltip="Email Me">
          <Email />
        </Link>
        <Button styles={{}}className={classes.chat} tooltip="Call Me" onClick={() => alert("Calling......")}>
          <Call />
        </Button> 
        <Like href="https://www.facebook.com/karaenavincentphotography/" colorScheme="dark" showFaces />
       
        <Button  styles={{}}className={classes.chat} tooltip="Contact Me">
        <MessageUs size="standard" color="white" messengerAppId="417448411986006" pageId="135947143102513"/>
        </Button>
      </Container> </FacebookProvider>
      </>
    )
  }
}
export default withStyles(PageStyles) (ContactPage)
{/*<!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v3.2'
    });
  };

  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!-- Your customer chat code -->
<div class="fb-customerchat"
  attribution=setup_tool
  page_id="135947143102513">
</div>*/}