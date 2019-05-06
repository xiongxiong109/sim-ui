<template>
  <div>
    <div class="item">
      <p>Switch组件</p>
      <sm-switch v-model="isOpenSwitch" />
      <p>禁止点击</p>
      <sm-switch v-model="isOpenSwitch" :isDisabled="true" />
    </div>
  </div>
</template>
<script>
// import Switch from 'sim-ui-pack/Switch'
import Switch from '@/components/Switch'

export default {
  data() {
    return {
      isOpenSwitch: true
    }
  },
  components: {
    [Switch.name]: Switch
  }  
}
</script>
<style scoped>
.item {
  margin: 10px 0 5px;
}
</style>