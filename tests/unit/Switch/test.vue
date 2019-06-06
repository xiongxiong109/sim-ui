<template>
  <sm-switch
    v-model="isOpen"
    :is-disabled="isDisabled"
  />
</template>
<script>

import Switch from '@/components/Switch'

export default {
  data() {
    return {
      isOpen: false,
      isDisabled: false
    }
  },
  components: {
    [Switch.name]: Switch
  }  
}

</script>