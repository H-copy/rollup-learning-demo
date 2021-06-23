# rollup 引入eslint 校验
1. 安装 `eslint`
```shell
// 全局安装
cnpm i -g eslint

// 调用初始化命令. 根据提示安装配置文件
eslint --init
```
当前项目使用 ts，所以需要选择使用 typescript
2. 安装 `@rollup/plugin-eslint`
```shell
cnpm i -D  @rollup/plugin-eslint
```
3. 修改 rollup 引入插件
```js

pluginEslint({
  throwOnError: true,  // 开启错误提示，出现错误将终止打包
  throwOnWarning: true, // 开启警告提示, 出现警告将终止打包
  include: ['./src/**'],
  // exclude: ['node_modules/**']  默认排除 node_modules 校验
})

```