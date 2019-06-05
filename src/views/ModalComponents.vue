<template>
  <div>
    <p>Modal</p>
    <button @click="isShowModal = !isShowModal">Toggle Modal</button>
    <sm-modal
      :is-show="isShowModal"
      @hide="isShowModal = false"
    >
      <p>Modal content</p>
    </sm-modal>
    <p>Show ActionSheet</p>
    <button @click="evtShowActionSheet">show actionSheet</button>
    <sm-actionsheet
      :is-show="isShowAction"
      :list="actionList"
      @click-item="evtClickActionItem"
      @hide="isShowAction = false"
    />
    {{curSelect}}
  </div>
</template>
<script>
// import Modal from 'sim-ui-pack/Modal'
import Modal from '@/components/Modal'
import ActionSheet from '@/components/ActionSheet'

export default {
  data() {
    return {
      isShowModal: false,
      isShowAction: false,
      curSelect: {},
      actionList: [
        { id: 'ok', nm: 'OK' },
        { id: 'cancel', nm: 'Cancel' }
      ]
    }
  },
  methods: {
    evtShowActionSheet() {
      this.isShowAction = true;
    },
    evtClickActionItem(item) {
      this.curSelect = item;
      this.isShowAction = false;
    }
  },
  components: {
    [Modal.name]: Modal,
    [ActionSheet.name]: ActionSheet
  }
}
</script>