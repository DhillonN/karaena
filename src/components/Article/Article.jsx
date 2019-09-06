import React, { Component } from "react"
import withStyles from '@material-ui/styles/withStyles'
import Img from 'gatsby-image'
import articleStyles from './ArticleStyles'
class Article extends Component {
  render() {
    const { articlesData, classes } = this.props

    return (
      <div style={{position:'relative', backgroundColor:'white'}}>
        {articlesData.map(({ node },i) => (
          <>

          {i & 1 ?
          (
            <div className={classes.articleContainer}>
             <div className={classes.articleText}>
              <h2>{node.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: node.body.processed }}/>
            </div>
            <div className={classes.articleImage}>
              <Img
                fluid={
                  node.relationships.field_image.localFile.childImageSharp.fluid
                }
              />
            </div>

          </div>
          ):
          <div className={classes.articleContainer}>
            <div className={classes.articleImage}>
              <Img
                fluid={
                  node.relationships.field_image.localFile.childImageSharp.fluid
                }
              />
            </div>
            <div className={classes.articleText}>
              <h2>{node.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: node.body.processed }}/>
            </div>
          </div>
          }
          </>
        ))}
      </div>
    )
  }
}
export default withStyles(articleStyles) (Article)
