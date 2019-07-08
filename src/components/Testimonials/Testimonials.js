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
    <>
      <h2 className={classes.title}>What Our Clients Say</h2>
<Grid>
        <Slider {...settings}>
          {testimonialsData.edges.map(({ node }, i) => (
            <GridItems key={i} xs={12} sm={12} md={4}>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <Card plain key={i}>
                  <GridItems
                    xs={12}
                    sm={12}
                    md={6}
                    className={classes.itemGrid}
                  >
                    <Image
                      fluid={
                        node.relationships.field_photo.localFile.childImageSharp
                          .fluid
                      }
                      alt={node.title}
                      className={imageClasses}
                    />
                  </GridItems>
                  <h4 className={classes.cardTitle}>{node.title}</h4>
                  <small className={classes.smallTitle}>
                    {node.field_position}
                  </small>
                  <a className={classes.Link} href={node.field_webpage}>
                    {node.field_organisation}
                  </a>
                  <CardBody testimonials>
                    <span
                      className={classes.description}
                      dangerouslySetInnerHTML={{
                        __html: node.body.processed,
                      }}
                    />
                  </CardBody>
                </Card>
              </div>
            </GridItems>
          ))}
        </Slider>
      </Grid>
    </>
  )
}
export default withStyles(PageStyles)(Testimonials)
