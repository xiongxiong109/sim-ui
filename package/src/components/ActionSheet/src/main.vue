<template>
  <sm-modal
    :is-show="isShowModal"
    wrapper-class="sm-sheet__wrapper"
    @enter="onEntering"
    @hide="evtHide"
  >
    <transition
      name="modal-up"
      appear
      @after-leave="isShowModal = false"
    >
      <div
        class="sm-sheet__container"
        v-show="isShowPanel"
      >
        <action-list
          :list="list"
          @click-item="$listeners['click-item']"
        />
      </div>
    </transition>
  </sm-modal>
</template>
<script>
  import Modal from '../../Modal';
  import ItemList from './ItemList';

	export default {
		name: 'sm-actionsheet',
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array
      }
    },
    data() {
      return {
        isShowPanel: false,
        isShowModal: this.isShow
      }
    },
    watch: {
      isShow(v) {
        /**
        * 通过isShow控制动画的交互
        * 组件展示时, modal先出现, 面板后出现
        * 组件消失时, 面板先收起, modal后隐藏
        */
        if (v) {
          this.isShowModal = v;
        } else {
          this.isShowPanel = v;
        }
      }
    },
    methods: {
      onEntering() {
        this.isShowPanel = true;
      },
      evtHide() {
        this.$emit('hide');
      }
    },
    components: {
      [Modal.name]: Modal,
      'action-list': ItemList
    }
	}
</script>
<style>
  @import './style.css';
</style>