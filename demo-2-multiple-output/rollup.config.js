import packageJson from './package.json'

/**
 * 保证各种类模块，输出不同的路径或文件，防止覆盖。
 */
export default {
  input: 'src/index.js',
  output: [
    {
      name: packageJson.name,
      file: 'lib/index.cjs.js',
      format: 'cjs'
    },
    {
      name: packageJson.name,
      file: 'lib/index.esm.js',
      format: 'esm'
    },
    {
      name: packageJson.name,
      file: 'lib/index.umd.js',
      format: 'umd'
    },
  ]
}