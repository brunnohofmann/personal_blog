import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import { createSlug, getImageSrcFromString } from '../helpers/common'

const HomeIndex = ({ data }) => {
  const {
    allPostsQuery: { posts },
  } = data

  return (
    <Layout>
      <Helmet
        title="Brunno Hofmann - Sofware Developer"
        meta={[
          {
            name: 'description',
            content:
              'This is my personal blog site. Here I wrote about tech and things I do in my daily life ;)',
          },
          { name: 'keywords', content: 'developer, software' },
        ]}
      ></Helmet>

      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          {posts.map(({ post }) => (
            <article
              style={{
                backgroundImage: `url(${getImageSrcFromString(
                  post.content_encoded
                )})`,
              }}
            >
              <header className="major">
                <h3>{post.title}</h3>
              </header>
              <Link
                to={`/${createSlug(post.title)}`}
                className="link primary"
              />
            </article>
          ))}
        </section>

        <div className="align-center m5">
          <Link to="/blog" className="button big">
            More posts
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const query = graphql`
  query IndexQuery {
    allPostsQuery: allFile(sort: { fields: name, order: DESC }, limit: 6) {
      posts: nodes {
        post: childPostsYaml {
          title
          link
          content_encoded
          pubDate
          id
        }
      }
    }
  }
`
