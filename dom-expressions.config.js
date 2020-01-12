module.exports = {
  output: 'src/runtime.js',
  includeTypes: true,
  variables: {
    imports: [ `import wrap, {value, sample as ignore} from 's-js'` ],
    declarations: {
      wrapCondition: `(fn) => {
        const s = value(ignore(fn));
        wrap(() => s(fn()))
        return s;
      }`
    },
    includeContext: false,
    wrapConditionals: true
  }
}