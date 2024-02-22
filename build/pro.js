const stylus = require('stylus')
const fs = require('fs')
const Path = require('path')

const P = (...target) => Path.join(__dirname, '..', ...target)
const Dist = (...target) => P('dist', ...target)
const Src = (...target) => P('src', ...target)

function build_global() {
  const content_index = fs.readFileSync('./src/global/index.styl').toString()
  stylus(content_index)
    .set('paths', ['src/global'])
    .render((err, css) => {
      if (err)
        throw err

      fs.writeFileSync(Dist('last.css'), css, {
        flag: 'w'
      })
      console.log('last.css build success')
    })
}

function cp_js() {
  fs.cpSync(Src('js/'), Dist(), {
    recursive: true,
  })
}

function main() {
  try {
    const root = Dist()
    fs.mkdirSync(root)
  } catch(err) {
    if (err.code === 'EEXIST')
      console.log('dist 文件夹已存在')
    else
      throw err
  }

  build_global()
  cp_js()

  console.log('job done')
}

main()
