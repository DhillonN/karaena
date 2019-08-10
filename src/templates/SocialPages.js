import React from 'react'
import {graphql} from 'gatsby'
import FacebookPosts from '../components/FacebookPosts/FacebookPosts'

export default ({data})=>{
    const post=data.nodeSocialPost
    return(
     <FacebookPosts postData={post}/>
    )
}

export const query=graphql`
query($id: String!){
nodeSocialPost (id: {eq: $id}) {
    id
    title
    field_posted
    field_post{
      processed
      value
    }
    field_post_description{
      processed
      value
    }
    field_social_feed_link{
      uri
    }
    relationships{
      field_sp_image{
        localFile{
          id
          childImageSharp{
            fluid{
             ...GatsbyImageSharpFluid_withWebp_noBase64
             presentationWidth
             originalImg
             aspectRatio
            }
          }
        }
      }
      field_sp_gallery{
        localFile{
          id
          childImageSharp{
            fluid(maxWidth:1920){
              ...GatsbyImageSharpFluid_withWebp_noBase64
              presentationWidth
              originalImg
              aspectRatio
            }
          }
        }
      }
    }
  }
}`