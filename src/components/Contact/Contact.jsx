import React from "react"
import Button from "../CustomButtons/Button"
import Call from "@material-ui/icons/Call"
import Email from "@material-ui/icons/Email"
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from "./ContactStyles"
import { karaenaGold } from "../../assets/global"
import {
  FacebookProvider,
  CustomChat,
} from "dhillon-react-facebook"
class ContactPage extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <>
        <FacebookProvider appId="417448411986006" chatSupport={true}>
          <a
            className={classes.links}
            href="mailto:info@karaenavincent.com"
            tooltip="Email"
          >
            <Email className={classes.icons} />
          </a>
          <a
            color="primary"
            className={classes.links}
            tooltip="Call"
            href="tel:006421796055"
          >
            <Call className={classes.icons} />
          </a>

          <CustomChat
            minimized={true}
            themeColor={karaenaGold}
            pageId="135947143102513"
          />
        </FacebookProvider>
      </>
    )
  }
}
export default withStyles(PageStyles)(ContactPage)
{
  /*<!-- Load Facebook SDK for JavaScript -->
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
</div>*/
}
