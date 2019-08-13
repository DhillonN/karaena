import React from "react"
import Layout from "../layout"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import FacebookPostsStyles from "./FacebookPostsStyles"
import Gallery from "../collection/Gallery"
import Seo from "../seo"
import {Location} from '@reach/router'
class FacebookPosts extends React.Component {
  render() {
    const { classes, postData } = this.props
    var title
    var description="";
    if (postData.field_post) {
      title = postData.field_post.value
        .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
        .split(" ")
        .slice(0, 6)
        .concat("...")
        .join(" ");
    } else if (postData.field_post_description) {
      title = postData.field_post_description.processed
        .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
        .split(" ")
        .slice(0, 6)
        .concat("...")
        .join(" ")
    }
    if(postData.field_post_description)
    {
      description=postData.field_post_description.processed
      .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "");
    }
    else description=postData.field_post.value
    .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")

    var postSEO={title:title,description:description,url:"",image:"https://karaenavincent.co.nz"+postData.relationships.field_sp_gallery[0].localFile.childImageSharp.fluid.src};

    return (
      <Layout>
        <Location>
        {({ location }) => {
        postSEO.url=location.href;

      }}
        </Location>
        <Seo pageTitle={title} pageDescription={description} postSEO={postSEO}/>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <h1 className={classes.title}>{title}</h1>
          <br />
          {postData.field_post ? (
            <p>
              {postData.field_post.value.replace(
                /(<p[^>]+?>|<p>|<\/p>)/gim,
                ""
              )}
            </p>
          ) : (
            ""
          )}
          {postData.field_post_description ? (
            <p>
              {postData.field_post_description.value.replace(
                /(<p[^>]+?>|<p>|<\/p>)/gim,
                ""
              )}
            </p>
          ) : (
            ""
          )}
          {postData.relationships.field_sp_gallery && (
            <Gallery
              images={postData.relationships.field_sp_gallery.map(
                ({ localFile }) => ({
                  id: localFile.id,
                  ...localFile.childImageSharp.fluid,
                })
              )}
            />
          )}
        </div>
      </Layout>
    )
  }
}
export default withStyles(FacebookPostsStyles)(FacebookPosts)
