import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Generic = ({data: {post}, ...props}) => {
  return (
    <Layout>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content="Generic Page"/>
        <base target="_blank" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{post.title}</h1>
            </header>
            <div className='post_content' dangerouslySetInnerHTML={{__html: post.content.encoded}}></div>
          </div>
        </section>
      </div>

    </Layout>
  )
}

export default Generic

export const query = graphql`
    query ($id: String!) {
        post: feedHofmannMedium(id: {eq : $id}) {
            title
            pubDate
            link
            id
            guid
            content {
                encoded
            }
        }
    }
`
