const { createSlug } = require('./src/helpers/common')
const path = require(`path`)

// const createSlug = (string) => {
//   return slugify(string, {
//     replacement: '-',
//     remove: true,
//     lower: true,
//     strict: true,
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)

  const result = await graphql(`
    query {
      allFeedHofmannMedium {
        nodes {
          title
          link
          content {
            encoded
          }
          pubDate
          id
        }
      }
    }
  `)

  result.data.allFeedHofmannMedium.nodes.forEach(post => {
    createPage({
      path: `${createSlug(post.title)}/${post.id}`,
      component: blogPostTemplate,
      context: {
        slug: createSlug(post.title),
        id: post.id
      },
    })
  })
}
