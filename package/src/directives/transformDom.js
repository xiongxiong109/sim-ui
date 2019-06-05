// 自动将组件挂载到document.body下, 借鉴vux

const transformDOM = {
  inserted(el) {
    // 创建一个注释节点
    const comment = document.createComment('');
    el.parentNode.replaceChild(comment, el);
    document.body.appendChild(el);
  }
}

export default transformDOM