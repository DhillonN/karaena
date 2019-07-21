/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allNodeProjects {
        edges {
          node {
            id
            title
          }
        }
      }
      allNodeSocialPost {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(projects => {
    projects.data.allNodeProjects.edges.forEach(({ node }) => {
      var pathString=(node.title).replace(/\s/g,'-');
      console.warn(pathString);
      createPage({
        path: pathString,
        component: path.resolve("./src/templates/projectpages.js"),
        context: {
          id: node.id,
        },
      })
    })
    projects.data.allNodeSocialPost.edges.forEach(({node})=>{
      createPage({
        path: node.id,
        component: path.resolve("./src/templates/SocialPages.js"),
        context: {
          id: node.id,
        },
      })
    })
  })
}
