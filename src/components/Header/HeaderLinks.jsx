/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
