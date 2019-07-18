import React from 'react'
import {graphql} from 'gatsby'
import Gallery from '../components/collection/Gallery'
import Layout from '../components/layout';
import classNames from 'classnames'
import withStyles from '@material-ui/styles/withStyles'
import projectStyles from '../components/FacebookPosts/FacebookPostsStyles'

const projectpages= ({data, classes})=>{
    const project=data.nodeProjects
    return(
      <Layout>
    <div className={classNames(classes.main, classes.mainRaised)}>
      <h1 className={classes.title}>
        {project.title}
      </h1>
     <Gallery images={project.relationships.field_gallery.map(({ localFile }) => (
      {
        id:localFile.id,
        ...localFile.childImageSharp.fluid,
      }
    ))}></Gallery></div></Layout>
    )
}
export default withStyles(projectStyles)(projectpages)
export const query=graphql`
query($id: String!){
nodeProjects (id: {eq: $id}) {
    id
    title
    relationships{
      field_gallery{
        localFile{
          id
          url
          childImageSharp{
            fluid{
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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