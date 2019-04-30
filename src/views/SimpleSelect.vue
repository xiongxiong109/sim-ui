<template>
  <div>
    <p>选择、步进器</p>
    <div class="item">
      <sm-switch v-model="isOpenSwitch" />
    </div>
  </div>
</template>
<script>
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