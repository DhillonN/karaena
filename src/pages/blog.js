import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogList from "../components/Blog/BlogList"


const BlogPage = ({ data }) => (
  <div>
    <Layout>
     <BlogList data={data}></BlogList>
    </Layout>
  </div>
)

export default BlogPage

export const query = graphql`
  query {
    allNodeSocialPost {
      edges {
        node {
          id
          field_posted
          field_post {
            processed
          }
          field_post_description {
            processed
          }
          field_social_feed_link {
            uri
          }
          relationships {
            field_sp_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            field_sp_gallery {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
