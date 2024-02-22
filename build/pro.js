const Path = require('path')
const fs = require('fs')
const { compile } = require('./stylus')
const { mkdir, cp } = require('./fs')

const P = (...target) => Path.join(__dirname, '..', ...target)
const Dist = (...target) => P('dist', ...target)
const Src = (...target) => P('src', ...target)

function build_global() {
  compile(
    Src('global/index.styl'),
    Dist('last.css'),
  )
  console.log('last.css build success')
}

function cp_js() {
  cp(Src('js/'), Dist())
}

function build_cmp() {
  mkdir(Dist('cmp'))
  for(const name of [
    'triangle',
    'x',
    'switch',
  ])
    compile(Src(`cmp/${name}.styl`), Dist(`cmp/${name}.css`))
}

function cp_others() {
  for (const file of [
    'package.json',
    'README.md',
  ])
    cp(P(file), Dist(file))
}

function main() {
  fs.rmSync(Dist(), { recursive: true, force: true })
  mkdir(Dist())

  build_global()
  build_cmp()
  cp_js()
  cp_others()

  console.log('job done')
}

main()
