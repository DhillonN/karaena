import React from "react"
import Parallax from "../Parallax/Parallax"
import Button from "../CustomButtons/Button"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from "./landingPageStyles"
class LandingPage extends React.Component {
  render() {
    const fields = this.props.pagedata
    const classes = this.props.classes
    return (
      <>
        <Parallax
          image={
            fields.relationships.field_photo.localFile.childImageSharp.fixed
              .srcWebp
          }
        >
          <div className={classes.filter}>
            <h1 className={classNames(classes.title)}>{fields.title}</h1>
            <span
              className={classNames(classes.subtitle)}
              dangerouslySetInnerHTML={{ __html: fields.body.processed }}
            />
          </div>
          <Button
            className={classes.button}
            size="lg"
            color="primary"
            href="https://app.acuityscheduling.com/schedule.php?owner=17979620"
            target="_blank"
          >
            Book your free consultation
          </Button>
        </Parallax>
      </>
    )
  }
}

export default withStyles(PageStyles)(LandingPage)
