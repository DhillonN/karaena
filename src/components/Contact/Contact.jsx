import React from "react"
import Call from "@material-ui/icons/Call"
import Email from "@material-ui/icons/Email"
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from "./ContactStyles"
{/*import { karaenaGold } from "../../assets/global"
import {
  FacebookProvider,
  CustomChat,
} from "dhillon-react-facebook"*/}
class ContactPage extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <>
        {/*<FacebookProvider appId="417448411986006" chatSupport={true}>*/}
          <a
            className={classes.links}
            href="mailto:info@karaenavincent.com"
            tooltip="Email"
          >
            <Email className={classes.icons} />
            info@karaenavincent.com
          </a>
          <a
            color="primary"
            className={classes.links}
            tooltip="Call"
            href="tel:006421796055"
          >
            <Call className={classes.icons} />
            +64 21786055
          </a>

      {/*    <CustomChat
            minimized="true"
            themeColor={karaenaGold}
            pageId="135947143102513"
          />
      </FacebookProvider>*/}
      </>
    )
  }
}
export default withStyles(PageStyles)(ContactPage)

