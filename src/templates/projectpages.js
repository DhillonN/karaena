import React from "react"
import { graphql } from "gatsby"
import Gallery from "../components/collection/Gallery"
import Layout from "../components/layout"
import classNames from "classnames"
import withStyles from "@material-ui/styles/withStyles"
import projectStyles from "../components/FacebookPosts/FacebookPostsStyles"
import Seo from '../components/seo'

const projectpages = ({ data, classes }) => {
  const project = data.nodeProjects
  const seo=
  {
    "@context": "http://schema.org",
    "@type": "Product",
    "name": project.title,
    "description": project.title+" Service.",
    "image": {
        "@type": "ImageObject",
        "representativeOfPage": "True",
        "url": "https://karaenavincent.co.nz"+project.relationships.field_photo.localFile.childImageSharp.fluid.src,
        "width": project.relationships.field_photo.localFile.childImageSharp.fluid.presentationWidth,
        "height": project.relationships.field_photo.localFile.childImageSharp.fluid.presentationHeight
    },
    "brand": {
        "@type": "Brand",
        "@id": "kvp",
        "name": "Karaena Vincent Photography",
        "description": "Professional Photography",
        "url": "https://karaenavincent.co.nz/",
        "sameAs": "https:/facebook.com/karaenavincentphotography",
        "logo": {
            "@type": "ImageObject",
            "representativeOfPage": "True",
            "url": "https://karaenavincent.co.nz/icons/icon-512x512.png",
            "width": "512",
            "height": "512"
        }
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "10",
        "bestRating": "5",
        "worstRating": "3"
    }
};
  return (
    <Layout>
      <Seo pageTitle={project.title} pageDescription={project.field_pagedescription} productSEO={seo}/>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <h1 className={classes.title}>{project.title}</h1>
        <Gallery
          images={project.relationships.field_gallery.map(
            ({ localFile }, i) => ({
              id: localFile.id,
              alt: project.field_gallery[i].alt,
              ...localFile.childImageSharp.fluid,
            })
          )}
        ></Gallery>
      </div>
    </Layout>
  )
}
export default withStyles(projectStyles)(projectpages)
export const query = graphql`
  query($id: String!) {
    nodeProjects(id: { eq: $id }) {
      id
      title
      field_pagedescription
      field_gallery {
        alt
      }
      relationships {
        field_photo
      {
        localFile
        {
          childImageSharp{
            fluid{
              src
              presentationWidth
              presentationHeight
            }
          }
        }
      }
        field_gallery {
          localFile {
            publicURL
            id
            url
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
                originalImg
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
`
