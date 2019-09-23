import React, { Component } from "react"
import withStyles from '@material-ui/styles/withStyles'
import Img from 'gatsby-image'
import articleStyles from './ArticleStyles'
class Article extends Component {
  render() {
    const { title,image,text, classes,position } = this.props

    return (
      <div style={{position:'relative', backgroundColor:'white'}}>
        {position=="left" ?
          (
            <div className={classes.articleContainer}>
             <div className={classes.articleText}>
              <h2>{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: text }}/>
            </div>
            <div className={classes.articleImage}>
              <Img fluid={image}/>
            </div>

          </div>
          ):
          <div className={classes.articleContainer}>
            <div className={classes.articleImage}>
              <Img fluid={image}/>
            </div>
            <div className={classes.articleText}>
              <h2>{title}</h2>
              <div dangerouslySetInnerHTML={{ __html: text }}/>
            </div>
          </div>
          }
      </div>
    )
  }
}
export default withStyles(articleStyles) (Article)
