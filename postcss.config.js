module.exports = (ctx) => ({
  parser: ctx.file.extname === '.sss' ? ctx.options.parser : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    'postcss-custom-media': {},
    'postcss-conditionals': {},
    'postcss-each': {},
    'postcss-color-function': {},
    'postcss-cssnext': { 'browsers': '> 0.1%' },
    'postcss-current-selector': {},
    'postcss-nested-ancestors': {},
    'postcss-nested': {},
    'postcss-size': {},
    'stylefmt': { 'syntax': 'sugarss' },
    'cssnano': ctx.env === 'production' ? {} : false
  }
})
