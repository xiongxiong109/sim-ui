<template>
  <ul class="sm-actionsheet-list">
    <sm-rpx
      v-for="item in list"
      tag="li"
      class="sm-u-fxc sm-act-btn"
      :key="item.id"
      @click="$emit('click-item', item)"
    >
      <span class="sm-u-ellips">{{item.nm}}</span>
    </sm-rpx>
  </ul>
</template>
<script>
import RpxBlock from '../../RpxBlock';

export default {
  props: {
    // 列表数组
    list: {
      type: Array,
      required: true
    }
  },
  components: {
    [RpxBlock.name]: RpxBlock
  }
}
</script>