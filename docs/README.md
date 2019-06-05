# sim-ui

> 一个简单的`Vue`移动端组件库。

# 快速上手

使用[vue-cli](https://cli.vuejs.org/zh/) 3.x初始化vue项目

安装`sim-ui`模块
```bash
  npm i -S -d sim-ui
```

安装[babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
```bash
  npm i -D -d babel-plugin-import
```

配置`babel.config.js`(视项目内容而定)

```javascript
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
  	['import', {
  		libraryName: 'sim-ui',
  		libraryDirectory: 'src/components',
  		style: "style.css",
  		camel2DashComponentName: false
  	}]
  ]
}
```

`main.js`引入组件库入口文件

```javascript
  import Vue from 'vue'
  import App from './App.vue'

  import SimUI from 'sim-ui/main' // 引入入口文件
  import 'sim-ui/main.css' // 引入全局样式

  Vue.config.productionTip = false

  Vue.use(SimUI); // 使用组件库项目(这里并不会全量引入所有文件)

  new Vue({
    render: h => h(App),
  }).$mount('#app')

```

单个组件引入方式
```javascript
  // 如引入ActionSheet组件
  import { ActionSheet } from 'sim-ui'
  // 配置好babel-plugin-import的情况下, 相当于
  // import ActionSheet from 'sim-ui/src/components/ActionSheet'
  // import 'sim-ui/src/components/ActionSheet/style.css'
```

**注意: 按需加载其实是源文件方式的引入, 所以需要处理npm包中的vue文件的编译情况, 如果不是使用脚手架创建的标准项目, 需要手动配置webpack的loaders，使之能够正确解析npm包中的.vue文件**

# [查看组件列表](/components "components") #