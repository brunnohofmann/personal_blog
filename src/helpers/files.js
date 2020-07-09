var fs = require('fs')
const yaml = require('js-yaml')

const createFile = (path, content) => {
  fs.writeFile(path, content, function(err) {
    if (err) throw err
    console.log('File saved!')
  })
}

const toYaml = content => {
  return yaml.safeDump(content)
}

module.exports = {
  createFile,
  toYaml,
}
