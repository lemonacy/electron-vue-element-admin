# electron-vue-element-admin

基于最新的Node，最新的vue-element-admin和最新的Electron，并且package.json中依赖的package都使用最新的版本，让完整版的vue-element-admin成功跑在Electron中。

Workable electron-vue-element-admin with latest Electron, latest vue-element-admin and latest dependency packages. It also work well on MacOS/Windows both in developmemnt mode and production mode.

2020-04-25更新说明：
1. 更新组件到最新版本：
    + Node v13.12.0
    + electron v8.2.3
    + vue v2.6.11
    + element-ui v2.13.1
    + vue-element-admin v4.2.1
    + eslint v6.8.0
    + babel v7.9.0
    + webpack: v4.43.0
2. 修改eslint配置适配原版的vue-element-admin代码格式
3. 修复`.vue`文件中`image`的`src`编译为`src=[object Module]`的问题

2020-03-24更新说明：
1. simulatedgreg/electron-vue不能使用最新版本Node（v13.11.0）的问题
2. simulatedgreg/electron-vue中使用的Electron版本比较老的问题
3. element-ui的图表组件不正常工作的问题
4. axios支持后端KOA session（基于cookie）
5. vue-element-admin在Windows系统上Sidebar菜单点击404问题
6. Electron在打包后登录后进入不了Dashboard的问题

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build
```
