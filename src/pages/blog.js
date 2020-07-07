import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import BannerBlog from '../components/BannerBlog'
import { createSlug, getImageSrcFromString } from '../helpers/common'

const Blog = ({ data }) => {
  const { allPosts } = data

  return (
    <Layout>
      <Helmet>
        <title>Brunno Hofmann - Blog</title>
        <meta name="description" content="Here I wrote about tech and things I do in my daily life ;)"/>
      </Helmet>

      <BannerBlog/>

      <div id="main">
        <section id="two" className="spotlights">
          {allPosts.nodes.map(post => (
            <section>
              <Link to={`/${createSlug(post.title)}`} className="image">
                <img src={getImageSrcFromString(post.content.encoded)} alt=""/>
              </Link>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>{post.title}</h3>
                  </header>
                  <ul className="actions">
                    <li><Link to={`/${createSlug(post.title)}`} className="button">Read more</Link></li>
                  </ul>
                </div>
              </div>
            </section>
          ))
          }
        </section>
      </div>

    </Layout>
  )
}

export default Blog

export const query = graphql`
    query MyBlogQuery {
        allPosts: allFeedHofmannMedium {
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
`
