import React from "react"
import Layout from "../layout"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import FacebookPostsStyles from "./FacebookPostsStyles"
import Gallery from '../collection/Gallery'

class FacebookPosts extends React.Component {

  render() {
    const { classes, postData } = this.props;
    return (
      <Layout>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <h1 className={classes.title}>{postData.title}</h1><br/>
          {postData.field_post? <p>{postData.field_post.value.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")}</p>:""}
          {postData.field_post_description?<p>{postData.field_post_description.value.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")}</p>:""}
          {postData.relationships.field_sp_gallery &&(
          <Gallery images={postData.relationships.field_sp_gallery.map(({ localFile }) => (
              {
                id:localFile.id,
                ...localFile.childImageSharp.fluid,
              }
            ))}
            />
          )}
        </div>
      </Layout>
    )
  }
}
export default withStyles(FacebookPostsStyles)(FacebookPosts)
