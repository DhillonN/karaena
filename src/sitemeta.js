import {useStaticQuery, graphql} from 'gatsby'

export const siteMetaData=()=> {
  const meta = useStaticQuery(
    graphql`
      query {
        nodeSeo {
          field_metadata {
            title
            description
            keywords
          }
        }
        allSite {
          nodes {
            siteMetadata {
              title
              siteUrl
              author
              pathPrefix
              siteLogo
              siteFBAppID
              userTwitter
            }
          }
        }
      nodeAboutPage {
        relationships {
          field_photo {
            localFile {
              childImageSharp {
                fluid {
                  presentationWidth
                  presentationHeight
                  src
                }
              }
            }
          }
        }
      }
    }
    `
  )
  return meta
}