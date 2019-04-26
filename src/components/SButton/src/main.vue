<template>
  <div class="sm__btn--wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sm-button'
}
</script>

<style>
  .sm__btn--wrapper {
    background-color: #ccc;
  }
</style>