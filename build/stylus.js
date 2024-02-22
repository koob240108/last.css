const stylus = require('stylus')
const { write_file, read_file } = require('./fs')

exports.compile = function(source, dist) {
  stylus(
    read_file(source)
  )
    .set('paths', ['src/global'])
    .render((err, css) => {
      if (err)
        throw err

      write_file(dist, css)
    })

}