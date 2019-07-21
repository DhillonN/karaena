import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    position: "relative",
    minHeight: "1px",
   padding:0,
    flexBasis: "auto",
    overflow:"hidden",
    "@media (min-width:576px)":{
      paddingRight: "15px",
    paddingLeft: "15px",
    }
  }
};

function GridItem({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
