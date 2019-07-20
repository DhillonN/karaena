import React from "react"
import Slider from "react-slick"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import PageStyles from "./TestimonialsStyles"
import Card from "../Card/Card"
import CardBody from "../Card/CardBody"
import Grid from "../Grid/GridContainer"
import GridItems from "../Grid/GridItem"
import Image from "gatsby-image"

const Testimonials = ({ classes, testimonialsData }) => {
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgFit
  )
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  }
  return (
    <section id="testimonials">
      <h2 className={classes.title}>What Our Clients Say</h2>
        <div className={classes.container}>
        <Slider {...settings}>
          {testimonialsData.edges.map(({ node }, i) => (
            <div key={i}>
                <Card plain key={i} className={classes.card}>
                <CardBody testimonials>
                    <span
                      className={classes.description}
                      dangerouslySetInnerHTML={{
                        __html: node.body.processed,
                      }}
                    />
                  </CardBody>
                    <Image
                      fluid={
                        node.relationships.field_photo.localFile.childImageSharp
                          .fluid
                      }
                      alt={node.title}
                      className={imageClasses}
                    />
                  <h4 className={classes.cardTitle}>{node.title}</h4>
                  <small className={classes.smallTitle}>
                    {node.field_position}
                  </small>
                  <a className={classes.Link} href={node.field_webpage}>
                    {node.field_organisation}
                  </a>

                </Card>
</div>
          ))}
        </Slider></div>
    </section>
  )
}
export default withStyles(PageStyles)(Testimonials)
