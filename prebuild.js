const fetch = require('node-fetch')
const parser = require('xml2json')

const { createSlug } = require('./src/helpers/common')
const { createFile, toYaml } = require('./src/helpers/files')

const RSS_URL = 'https://medium.com/feed/@brunnohofmann'

const fetchRssData = async () => {
  const response = await fetch(RSS_URL)
  const content = await response.text()
  return parser.toJson(content, { object: true })
}

const createPostsFiles = async () => {
  const myPosts = await fetchRssData()

  myPosts.rss.channel.item.forEach(post => {
    const date = new Date(post.pubDate)
    const slug = createSlug(post.title)
    const yamlContent = toYaml(post)
    createFile(`src/content/posts/${date.getTime()}${slug}.yaml`, yamlContent)
  })
}

createPostsFiles().catch(err => console.log('Thow an error', err))
