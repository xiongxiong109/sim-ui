<template>
  <sm-actionsheet
    :is-show="isShow"
    :list="list"
    @click-item="evtClickItem"
    @hide="isShow = false"
  />
</template>
<script>
import ActionSheet from '@/components/ActionSheet'
export default {
  data() {
    return {
      isShow: true,
      curItem: {},
      list: [
        { id: 1, nm: 'hello' },
        { id: 2, nm: 'sdsdsd' }
      ]
    }
  },
  methods: {
    // click-item is required
    evtClickItem(item) {
      this.curItem = item;
    }
  },
  components: {
    [ActionSheet.name]: ActionSheet
  }
}
</script>