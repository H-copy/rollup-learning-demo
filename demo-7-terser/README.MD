# rollup 代码压缩
1. 安装压缩插件 `rollup-plugin-terser`
```shell
cnpm i -D rollup-plugin-terser
```
2. 修改 rollup 配置
需要注意压缩插件 `terser` 非默认导出
```js
import { terser } from 'rollup-plugin-terser'

{
  plugins: [
    ...
    terser() // 放在插件列表末尾, 最后导出压缩文件
  ]
}
```