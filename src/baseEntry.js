// 基础核心模块打包入口

import './styles';

// base components
import Switch from './components/Switch'

// directives
import transformDOM from './directives/transformDom'

// 插件形式注册
const SimUI = {
  install(Vue) {
    Vue.directive('trans-dom', transformDOM);
  }
}

export default SimUI

export {
  Switch
}