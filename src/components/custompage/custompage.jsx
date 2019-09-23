import React, { Component } from "react"
import withStyles from "@material-ui/styles/withStyles"
import Img from "gatsby-image"
import { Parallax } from "react-parallax"
import articleStyles from "./custompagestyles"
import Article from "../Article/Article"
class CustomPage extends Component {
  render() {
    const { data, classes } = this.props
    console.log(this.props.data)
    const insideStyles = {
      background: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    }
    function renderElement(type, ele) {
      switch (type) {
        case "SanityImageText":
          return (
            <Article
              title={ele.text}
              text={ele.text}
              image={ele.asset.fluid}
              position="left"
            />
          )
        case "SanityTextImage":
          return (
            <Article
              title={ele.text}
              text={ele.text}
              image={ele.asset.fluid}
              position="right"
            />
          )
        case "SanityCta":
          return <p>Memphis farts</p>
        case "SanityParallax":
          return (
            <>
              {console.log(ele)}
              <Parallax
                strength={500}
                bgImage={ele.bgImage.asset.fluid.src}
                bgImageSrcSet={ele.bgImage.asset.fluid.srcSet}
                bgImageSizes={ele.bgImage.asset.fluid.sizes}
              >
                <div style={{ height: "100vh", width: "100vw" }}>
                  <h1 style={insideStyles}>{ele.button}</h1>
                </div>
              </Parallax>
            </>
          )
        default:
          return <p>Nothing detected</p>
      }
    }
    return (
      <div>
        <h1>{data.title}</h1>
        {console.log(data)}
        {data.sanityPage.elements.map(({ __typename }, i) => (
          <div>{renderElement(__typename, data.sanityPage.elements[i])}</div>
        ))}
      </div>
    )
  }
}
export default withStyles(articleStyles)(CustomPage)
