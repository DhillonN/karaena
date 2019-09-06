import React from "react"
import { Link } from "gatsby"
import Card from "../../components/Card/Card"
import withStyles from "@material-ui/core/styles/withStyles"
import classNames from "classnames"
import Image from "gatsby-image"
import Masonry from "react-masonry-component"
import BlogListStyle from "./BlogListStyle"

class BlogList extends React.Component {
  render() {
    const { data, classes } = this.props
    return (
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
                {node.relationships.field_sp_image ||
                node.relationships.field_sp_gallery[0] ? (
                  <Card key={node.id} className={classes.containerCard}>
                    <Link
                      key={i.toString()}
                      className={classes.postLink}
                      to={`/${node.id}`}
                    >
                      <div>
                        {node.relationships.field_sp_image ? (
                          <Image
                            className={classes.imgRaised}
                            fluid={
                              node.relationships.field_sp_image.localFile
                                .childImageSharp.fluid
                            }
                          />
                        ) : (
                          <Image
                            className={classes.imgRaised}
                            fluid={
                              node.relationships.field_sp_gallery[0].localFile
                                .childImageSharp.fluid
                            }
                          />
                        )}
                      </div>
                      <div className={classes.description}>
                        {" "}
                        {node.field_post ? (
                          <h3>
                            {node.field_post.value
                              .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
                              .split(" ")
                              .slice(0, 6)
                              .concat("...")
                              .join(" ")}
                          </h3>
                        ) : (
                          <>
                            {" "}
                            {node.field_post_description ? (
                              <h3>
                                {node.field_post_description.processed
                                  .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
                                  .split(" ")
                                  .slice(0, 6)
                                  .concat("...")
                                  .join(" ")}
                              </h3>
                            ) : (
                              ""
                            )}
                          </>
                        )}
                      </div>
                    </Link>
                  </Card>
                ) : (
                  ""
                )}
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    )
  }
}
export default withStyles(BlogListStyle)(BlogList)
