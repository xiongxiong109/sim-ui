// 基础核心模块打包入口

import './styles';

// directives
import transformDOM from './directives/transformDom'
import clickoutside from './directives/clickoutside'

// 插件形式注册
const SimUI = {
  install(Vue) {
    Vue.directive('trans-dom', transformDOM);
    Vue.directive('click-outside', clickoutside);
  }
}

export default SimUI