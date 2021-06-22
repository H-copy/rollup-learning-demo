import packageJson from './package.json'
import pluginBabel from '@rollup/plugin-babel'



const cjs = {
  input: 'src/index.js',
  output: {
    name: packageJson.name,
    file: 'lib/index.cjs.js',
    format: 'cjs'
  },
  plugins: [
    pluginBabel({
      include: ['src/**'],
      exclude: ['node_modules/**']
    })
  ]
}

const esm = {
  input: 'src/index.js',
  output: {
    name: packageJson.name,
    file: 'lib/index.esm.js',
    format: 'esm'
  }
}

const umd = {
  ...cjs,
  output: {
    name: packageJson.name,
    file: 'lib/index.umd.js',
    format: 'umd'
  }
}

/**
 * 这里通过导出配置列表，生成不同配置下的打包文件.
 * cjs, umd 通过babel 转换为 ES5 语法
 * esm 沿用 ES6 语法
 */
export default [ cjs, esm, umd ]