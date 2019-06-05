<template>
  <div
    class="sm-switch__wrapper"
    :class="{'is-open': this.value}"
    @click="evtClick"
  ></div>
</template>
<script>
// 开关选择按钮
export default {
  name: 'sm-switch',
  props: {
    value: { // v-model双向绑定值
      type: Boolean,
      default: false
    },
    isDisabled: { // 是否禁止点击
      type: Boolean,
      default: false
    }
  },
  methods: {
    evtClick() {
      !this.isDisabled && this.$emit('input', !this.value);
    }
  }
}
</script>
<style>
  .sm-switch__wrapper {
    width: 44px;
    height: 24px;
    border: 1px solid #e0e0e0;
    border-radius: 24px;
    position: relative;
    transition: .3s ease-out;
  }
  .sm-switch__wrapper:active:after {
    transform: scale(.9);
  }
  .sm-switch__wrapper:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    transition: .3s cubic-bezier(0.45, 1, 0.4, 1);
    background-color: #fff;
    transform: scale(1);
  }
  .sm-switch__wrapper:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 22px;
    height: 22px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 4px rgba(0,0,0,0.2);
    transition: .3s ease-out;
  }
  .sm-switch__wrapper.is-open {
    background-color: #19A0F0;
  }
  .sm-switch__wrapper.is-open:before {
    transform: scale(0);
  }
  .sm-switch__wrapper.is-open:after {
    left: 20px;
  }
</style>