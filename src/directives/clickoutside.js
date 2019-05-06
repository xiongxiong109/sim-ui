/**
 * 实现click outside指令, 当点击元素之外的区域的时候, 触发click outside方法
 * 对于弹出层式的组件开发十分有用
 */

import Vue from 'vue'

// 存储所有的click outside的元素
const nodeList = [];
let startClick;
const ctx = '@@clickoutsideContext';
let seed = 0;

if (!Vue.prototype.$isServer) {
  // 给document绑定全局点击事件
  document.addEventListener('mousedown', ev => startClick = ev);
  document.addEventListener('mouseup', ev => {
    nodeList.forEach(node => node[ctx].documentHandler(ev, startClick))
  })
}

function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    // 通过contains判断点击元素是否包含在el中
    // console.log(mouseup.target);
    // console.log(mousedown.target);
    // console.log(el);
    if (
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mousedown.target
    ) {
      return;
    }
    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

const clickoutside = {
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind(el) {
    // 从nodeList中移除对应的dom
    // console.log(el);
    let len = nodeList.length;
    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
}

export default clickoutside