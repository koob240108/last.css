const fs = require('fs')

exports.mkdir = function(path) {
  // try {
    fs.mkdirSync(path)
  // } catch(err) {
    // if (err.code === 'EEXIST')
      // console.log(path + ' 文件夹已存在')
    // else
      // throw err
  // }
}

exports.write_file = function(path, content) {
  fs.writeFileSync(path, content, {
    flag: 'w'
  })
}

exports.read_file = function(path) {
  return fs.readFileSync(path).toString()
}

exports.cp = function(source, dist) {
  fs.cpSync(source, dist, {
    recursive: true,
  })
}
