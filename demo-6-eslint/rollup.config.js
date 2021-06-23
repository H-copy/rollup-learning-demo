import packageJson from './package.json'
import pluginNodeResolve from '@rollup/plugin-node-resolve'
import pluginCommonjs from '@rollup/plugin-commonjs'
import pluginEslint from '@rollup/plugin-eslint'
import pluginTypescript2 from 'rollup-plugin-typescript2'

const cjs = {
  input: 'src/index.ts',
  output: {
    name: packageJson.name,
    file: 'lib/index.cjs.js',
    format: 'cjs'
  },
  plugins: [
    pluginEslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['./src/**'],
    }),
    pluginNodeResolve(),
    pluginCommonjs(),
    pluginTypescript2({
      tsconfig: './tsconfig.es5.json'
    }),
  ]
}

const esm = {
  input: 'src/index.ts',
  output: {
    name: packageJson.name,
    file: 'lib/index.esm.js',
    format: 'esm',
  },
  plugins: [
    pluginEslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['./src/**'],
    }),
    pluginNodeResolve(),
    pluginCommonjs(),
    pluginTypescript2({
      tsconfig: './tsconfig.es6.json'
    }),
  ]
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
 * 这里设置tsconfig.json tarrget: 'es5' 
 * 将 ES6 转换为 ES
 */
export default [ cjs, esm, umd ]