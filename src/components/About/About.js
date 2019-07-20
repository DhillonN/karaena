import React from "react"
import Img from "gatsby-image"
import withStyles from "@material-ui/styles/withStyles"
import aboutStyles from "./aboutStyles"

const About = ({ aboutData, classes }) => (
  <section id="about">
      <h1 className={classes.title}>{aboutData.title}</h1>
    <div className={classes.aboutContainer}>
      <div
        className={classes.aboutDescription}
        dangerouslySetInnerHTML={{
          __html: aboutData.body.processed,
        }}
      ></div>
    </div>
  </section>
)
export default withStyles(aboutStyles)(About)
