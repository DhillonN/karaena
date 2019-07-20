import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Projects from '../components/Projects/projects'
import Testimonials from '../components/Testimonials/Testimonials'
import Landingpage from '../components/LandingPage/LandingPage'
import "typeface-montserrat"
import classNames from 'classnames'
import withStyles from '@material-ui/styles/withStyles'
import mainStyles from './mainStyles'
const index=({data,classes})=>(
<Layout>
  <Landingpage pagedata={data.nodeFrontPage}/>
  <div className={classNames(classes.main, classes.mainRaised)}>
<Projects projectsData={data.allNodeProjects}></Projects>
<Testimonials testimonialsData={data.allNodeTestimonials}/>
</div>
</Layout>

)
export default withStyles(mainStyles) (index)

export const query = graphql`
  query {
    nodeFrontPage {
      id
      title
      body {
        processed
      }
      relationships {
        field_photo {
          localFile {
            url
            publicURL
            childImageSharp{
              fluid{
                srcWebp
            }
            fixed{
              src
            }
          }
          }
        }
      }
    }
    allNodeProjects {
      edges {
        node {
          id
          title
          field_subtext
          relationships {
            field_photo {
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
    allNodeTestimonials {
      edges {
        node {
          title
          field_webpage {
            uri
          }
          field_position
          field_organisation
          field_show_on_frontpage
          body {
            processed
          }
          relationships {
            field_photo {
              localFile {
                url
                childImageSharp{
                  fluid(maxWidth:250){
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
              }
            }
          }
        }
      }
    }
    nodeAboutPage {
      id
      title
      body {
        processed
        summary
      }
      relationships {
        field_photo {
          localFile {
            url
            childImageSharp{
              fluid(maxWidth:500){
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
          }
        }
      }
    }
  }
`
