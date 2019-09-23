import React from "react"
import { graphql } from "gatsby"
import Article from "../components/Article/Article"
import { Parallax} from "react-parallax"
import Howitworks from "../components/Howitworks/howitworks"
import Layout from "../components/layout"
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}
const Branding = ({ data }) => (
  <Layout>
  <div>
    <Parallax
      strength={100}
      bgImage={
        data.allNodeParallaxPersonalBranding.edges[0].node.relationships
          .field_photo.localFile.childImageSharp.fluid.src
      }
      bgImageSrcSet={
        data.allNodeParallaxPersonalBranding.edges[0].node.relationships
          .field_photo.localFile.childImageSharp.fluid.srcset
      }
      bgImageSizes={
        data.allNodeParallaxPersonalBranding.edges[0].node.relationships
          .field_photo.localFile.childImageSharp.fluid.sizes
      }
    >
      <div style={{ height: "100vh", width: "100vw" }}>
        <h1 style={insideStyles}>
          {data.allNodeParallaxPersonalBranding.edges[0].node.title}
        </h1>
      </div>
    </Parallax>

    <Article articlesData={data.allNodeArticle.edges} />

    <Parallax

      strength={500}
      bgImage={
        data.allNodeParallaxPersonalBranding.edges[1].node.relationships
          .field_photo.localFile.childImageSharp.fluid.src
      }
    >
      <div style={{ height: "75vh", width: "100vw" }}>
        <h1 style={insideStyles}>
          {data.allNodeParallaxPersonalBranding.edges[1].node.title}
        </h1>
      </div>
    </Parallax>

    <Article articlesData={data.allNodeArticle.edges} />
    <Parallax
      strength={200}
      bgImage={
        data.allNodeParallaxPersonalBranding.edges[0].node.relationships
          .field_photo.localFile.childImageSharp.fluid.src
      }
    >
      <div style={{ height: "100vh", width: "100vw" }}>
        <h1 style={insideStyles}>
          {data.allNodeParallaxPersonalBranding.edges[0].node.title}
        </h1>
      </div>
    </Parallax>
    <Howitworks hiwData={data.allNodeHowItWorks.edges[0].node} />
  </div>
  </Layout>
)
export default Branding
export const query = graphql`
  query {
    allNodeArticle {
      edges {
        node {
          title
          body {
            value
            format
            processed
            summary
          }
          field_button_text
          field_image {
            alt
            title
            width
            height
          }
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
    allNodeParallaxPersonalBranding {
      edges {
        node {
          field_photo {
            alt
          }
          title
          field_button_text
          field_subtext
          relationships {
            field_photo {
              localFile {
                childImageSharp {
                  fluid(maxWidth:1920) {
                    src
                    srcSet
                  sizes
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
    allNodeHowItWorks {
      edges {
        node {
          title
          field_step_photo {
            alt
            title
            width
            height
          }
          field_step
          field_step_details
          field_button
          relationships {
            field_step_photo {
              localFile {
                childImageSharp {
                  fluid {
                    src
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
