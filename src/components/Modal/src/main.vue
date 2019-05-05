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
      v-if="isShow"
      v-trans-dom
    >
      <div
        class="sm-modal__container"
        :class="className"
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
    }
  },
  computed: {
    bgColor() {
      return `rgba(0,0,0, ${this.opacity})`
    }
  },
  methods: {
    afterEnter() {
      console.log('entered')
    },
    afterLeave() {
      console.log('leaved')
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