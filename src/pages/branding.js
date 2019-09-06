import React from "react"
import { graphql } from "gatsby"
import Article from "../components/Article/Article"
import { Parallax } from "react-parallax"
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}
const Branding = ({ data }) => (
  <div>
    <Parallax
      strength={500}
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

    <Article articlesData={data.allNodeArticle.edges} />

    <Parallax
      blur={{ min: -20, max: 20 }}
      strength={-300}
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
  </div>
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
