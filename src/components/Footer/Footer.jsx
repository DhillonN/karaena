/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { ListItem, withStyles } from "@material-ui/core";
import { FaPhone as Phone, FaFacebook, FaInstagram,FaLinkedin } from 'react-icons/fa';
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "./footerStyle.jsx";
import Tooltip from '@material-ui/core/Tooltip/Tooltip'
import Button from '../CustomButtons/Button'


function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.right}>

        <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow me on linked in"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/karaena-vincent-456b44123/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaLinkedin/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on facebook"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/karaenavincentphotography"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/karaenavincent_photography"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram/>
          </Button>
        </Tooltip>
      </ListItem>


        </div>
        <div className={classes.address}>
          <p>39 Green Lane Motueka, 7120 Nelson Tasman New Zealand.</p>
        </div>
        <div className={classes.left}>
          &copy; {1900 + new Date().getYear()}
       Karaena Vincent Photography
        </div>


      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
