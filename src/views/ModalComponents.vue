<template>
  <div>
    <p>Modal</p>
    <button @click="isShowModal = !isShowModal">Toggle Modal</button>
    <sm-modal :is-show="isShowModal">
      <p>Modal content</p>
    </sm-modal>
  </div>
</template>
<script>
import Modal from '@/components/Modal'

export default {
  data() {
    return {
      isShowModal: false
    }
  },
  components: {
    [Modal.name]: Modal
  }
}
</script>