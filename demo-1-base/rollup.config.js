import packageJson from './package.json'

export default {
  input: 'src/index.js',
  output: {
    name: packageJson.name,
    file: packageJson.main,
    format: 'cjs'
  },
}