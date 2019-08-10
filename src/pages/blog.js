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
    allNodeSocialPost(sort: {fields: field_posted, order: DESC}) {
      edges {
        node {
          id
          field_posted
          field_post {
            processed
            value
          }
          field_post_description {
            processed
            value
          }
          field_social_feed_link {
            uri
          }
          relationships {
            field_sp_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
            field_sp_gallery {
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
  }
`
