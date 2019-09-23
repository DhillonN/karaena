import React from 'react'
import {graphql} from 'gatsby'
import Custompage from '../components/custompage/custompage'
import Layout from '../components/layout'


const custompage=({data})=>
(
    <Layout>
    <Custompage data={data}/>
    </Layout>
)

export default custompage

export const query=graphql`
query ($id: String!) {
    sanityPage(id: {eq: $id}) {
      title
      elements {
        __typename
        ... on SanityCta {
          callAction
          subText
        }
        ... on SanityImageText {
          text
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        ... on SanityParallax {
          button
          bgImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
                srcSet
            sizes
              }
            }
          }
        }
        ... on SanityTextImage {
          text
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
  `