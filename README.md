# electron-vue-element-admin

基于最新的Node13.11.0，最新的vue-element-admin和最新的Electron8.1.1，并且package.json中依赖的package都使用最新的版本（截止2020-03-24），让完整版的vue-element-admin成功跑在Electron中。

Workable electron-vue-element-admin with latest Electron, latest vue-element-admin and latest dependency packages. It also work well on MacOS/Windows both in developmemnt mode and production mode.

解决的问题：
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

# run unit & end-to-end tests
npm test
```
