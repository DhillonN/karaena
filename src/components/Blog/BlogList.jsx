import React from "react"
import { Link } from "gatsby"
import Card from "../../components/Card/Card"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import Image from "gatsby-image"
import Masonry from "react-masonry-component"
import BlogListStyle from "./BlogListStyle"

class BlogList extends React.Component{

  render(){
    const {data,classes}=this.props;
    return(
<div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Masonry
         className={classes.masonry} // default ''
          // default {}
         disableImagesLoaded={false} // default false
         updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >

          {data.allNodeSocialPost.edges.map(({ node }, i) => (
          <div className={classes.column}>

            <Card key={node.id}  className={classes.containerCard}>
                  <Link  className={classes.postLink} to={`/${node.id}`}>
                    <div key={i.toString()} >
                      {node.relationships.field_sp_image ? (
                        <Image
                          className={classes.imgRaised}
                          fluid={
                            node.relationships.field_sp_image.localFile
                              .childImageSharp.fluid
                          }
                        />
                      ) : (
                        <>
                          {node.relationships.field_sp_gallery ? (
                            <Image
                              className={classes.imgRaised}
                              fluid={
                                node.relationships.field_sp_gallery[0].localFile
                                  .childImageSharp.fluid
                              }
                            />
                          ) : (
                            ""
                          )}
                        </>
                      )}
                    </div>
                    <div className={classes.description}>
                      {" "}
                      {node.field_post ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: node.field_post.processed,
                          }}
                        />
                      ) : (
                        <>
                          {" "}
                          {node.field_post_description ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: node.field_post_description.processed,
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </>
                      )}
                    </div>
                  </Link>
                </Card></div>
              ))}
        </Masonry>
      </div>
  </div>
    )
  }
}
export default withStyles(BlogListStyle)(BlogList)

