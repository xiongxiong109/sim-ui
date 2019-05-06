<template>
  <transition
    name="fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      class="sm-modal"
      :style="{
        'background-color': bgColor
      }"
      v-if="isFirstMount"
      v-show="isShow"
      v-trans-dom
    >
      <div
        class="sm-modal__container"
        :class="className"
        v-click-outside="onClickOutSide"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
// 蒙层组件
export default {
  name: 'sm-modal',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Number,
      default: .6
    },
    className: {
      type: String,
      default: ''
    },
    clickModalHide: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    bgColor() {
      return `rgba(0,0,0, ${this.opacity})`
    }
  },
  data() {
    return {
      // 仅仅在第一次show的时候挂载dom, 后面只通过v-show控制显示隐藏
      isFirstMount: this.isShow
    }
  },
  created() {
    if (!this.isFirstMount) {
      this.unwatch = this.$watch('isShow', newV => {
        if (newV) {
          this.isFirstMount = newV;
          this.unwatch();
        }
      })
    }
  },
  methods: {
    afterEnter() {
      this.$emit('entered')
    },
    afterLeave() {
      this.$emit('entered')
    },
    onClickOutSide() {
      this.clickModalHide && this.$emit('hide');
    }
  }
}
</script>
<style>
  .sm-modal {
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
  }
</style>