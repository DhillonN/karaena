import React from "react"
import Parallax from "../Parallax/Parallax"
import Button from "../CustomButtons/Button"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from "./landingPageStyles"
import Img from "gatsby-image/withIEPolyfill"
import {Link} from "gatsby"
class LandingPage extends React.Component {
  render() {
    const fields = this.props.pagedata
    const classes= this.props.classes
    return (
      <div className={classes.wrapper}>
        <div className={classes.frontImage}>
            <Img
              fluid={
                fields.relationships.field_photo.localFile.childImageSharp.fluid
              }
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>
          <div className={classes.frontMatter}>
            <h1>{fields.title}</h1>
            <span dangerouslySetInnerHTML={{ __html: fields.body.processed }} />
            <Button color="primary">Book Now</Button><br/>
          </div>
      </div>
    )
  }
}

export default withStyles(PageStyles)(LandingPage)
