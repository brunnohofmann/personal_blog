const { createSlug } = require('./src/helpers/common')
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)

  const result = await graphql(`
    query {
      data: allPostsYaml {
        posts: nodes {
          title
          id
        }
      }
    }
  `)

  result.data.data.posts.forEach(post => {
    const slug = createSlug(post.title)
    console.log('Created page: ', slug)

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug: createSlug(post.title),
        id: post.id,
      },
    })
  })
}
