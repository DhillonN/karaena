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
import { FaPhone, FaFacebook, FaInstagram,FaLinkedin } from 'react-icons/fa';

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
       <Link to="/#about" className={classes.navLink}> About</Link>
       <span className={classes.underline}></span>
      </ListItem>
      <ListItem className={classes.listItem}>
       <Link to="/blog" className={classes.navLink}> Blog </Link>
       <span className={classes.underline}></span>
      </ListItem>
      <ListItem className={classes.listItem}>
       <p className={classes.topCall}> CALL +64 21796 055</p>
      </ListItem>

    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
