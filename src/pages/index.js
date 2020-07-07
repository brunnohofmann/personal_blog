import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import { createSlug, getImageSrcFromString } from '../helpers/common'

const HomeIndex = ({ data }) => {
  const { allFeedHofmannMedium } = data

  return (
    <Layout>
      <Helmet
        title="Brunno Hofmann - Sofware Developer"
        meta={[
          {
            name: 'description',
            content: 'This is my personal blog site. Here I wrote about tech and things I do in my daily life ;)',
          },
          { name: 'keywords', content: 'developer, software' },
        ]}
      >
      </Helmet>

      <Banner/>

      <div id="main">
        <section id="one" className="tiles">
          {allFeedHofmannMedium.nodes.map(post => (
            <article style={{ backgroundImage: `url(${getImageSrcFromString(post.content.encoded)})` }}>
              <header className="major">
                <h3>{post.title}</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to={`/${createSlug(post.title)}/${post.id}`} className="link primary"></Link>
            </article>
          ))}
        </section>

        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed
              nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet
              massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus
              et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
            <ul className="actions">
              <li><Link to="/landing" className="button next">Get Started</Link></li>
            </ul>
          </div>
        </section>
      </div>

    </Layout>
  )
}

export default HomeIndex

export const query = graphql`
    query MyQuery {
        allFeedHofmannMedium(limit: 6) {
            nodes {
                title
                link
                content {
                    encoded
                }
                pubDate
                id
            }
            totalCount
        }
    }
`
