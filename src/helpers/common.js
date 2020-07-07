const slugify  = require('slugify')

const getImageSrcFromString = (string) => {
  const rgx = new RegExp('src\s*=\s*"(.+?)"')
  const imgSrc = rgx.exec(string)
  return imgSrc[1]
}

const createSlug = (string) => {
  return slugify(string, {
    replacement: '-',
    remove: true,
    lower: true,
    strict: true,
  })
}

module.exports = {
  getImageSrcFromString,
  createSlug
}
