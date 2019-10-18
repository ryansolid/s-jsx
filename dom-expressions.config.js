module.exports = {
  output: 'src/runtime.js',
  includeTypes: true,
  variables: {
    imports: [ `import wrap from 's-js'` ],
    includeContext: false
  }
}