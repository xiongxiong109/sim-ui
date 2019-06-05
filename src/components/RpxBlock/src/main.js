export default {
  name: 'sm-rpx',
  props: {
    tag: { // 包裹元素的tagName
      type: String,
      default: 'div'
    },
    // 边框位置(bottom, top, around)
    side: {
      type: String,
      default: 'bottom'
    }
  },
  render: function(createElement) {
    // 创建动态标签
    return createElement(this.tag, {
      class: {
        'sm-rpx-block': true,
        'is-bottom': this.side == 'bottom'        
      },
      on: this.$listeners,
    }, this.$slots.default)
  }
}