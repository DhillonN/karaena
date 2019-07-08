/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";
import classNames from 'classnames'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import Button from "../CustomButtons/Button";

import headerLinksStyle from "./headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
       <Link to="/" className={classes.navLink}>Home</Link>
       <span className={classes.underline}></span>
      </ListItem>
      <ListItem className={classes.listItem}>
       <Link to="/about" className={classes.navLink}> About</Link>
       <span className={classes.underline}></span>
      </ListItem>
      <ListItem className={classes.listItem}>
       <Link to="/blog" className={classes.navLink}> Blog </Link>
       <span className={classes.underline}></span>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
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
          title="Follow us on instagram"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
