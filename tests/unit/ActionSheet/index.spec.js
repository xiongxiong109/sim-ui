import { mount } from '@vue/test-utils';
import Vue from 'vue'
import Entry from '@/baseEntry'
import Page from './test'
import ActionSheet from '@/components/ActionSheet'
import ItemList from '@/components/ActionSheet/src/ItemList'

describe('ActionSheet', () => {

  beforeAll(() => {
    Vue.use(Entry);
  })

  it('render itemLists', () => {

    const wrapper = mount(Page)
    const list = wrapper.find(ItemList);

    list.find('li').trigger('click');

    const emitInfo = list.emitted('click-item');

    // 触发了点击item回调
    expect(emitInfo).toBeTruthy();
    // 点击回调传值
    expect(emitInfo[0][0]).toEqual(wrapper.vm.curItem);

  })

  it('动画交互顺序测试', () => {
    const wrapper = mount(ActionSheet);

    expect(wrapper.vm.isShowModal).toEqual(wrapper.props().isShow);

    // 打开dom
    wrapper.setProps({ isShow: true });
    // 先显示蒙层
    expect(wrapper.vm.isShowModal).toBe(true);
    expect(wrapper.vm.isShowPanel).toBe(false);

    // 再显示isShowPanel
    setTimeout(() => {
      expect(wrapper.vm.isShowPanel).toBe(true);
    }, 300);

  })

  it('交互顺序测试', () => {
    const wrapper = mount(Page);
    const actionWrapper = wrapper.find(ActionSheet);

    wrapper.setData({ isShow: true });

    // 关闭dom
    wrapper.setData({ isShow: false });

    // 再关闭蒙层
    setTimeout(() => {
      expect(actionWrapper.emitted('hide')).toBeTruthy();
      expect(actionWrapper.vm.isShowModal).toBe(false);
    }, 300);
  })

  it('cover all', () => {
    const wrapper = mount(ActionSheet);
    wrapper.vm.onEntering();
    expect(wrapper.vm.isShowPanel).toBe(true);
    wrapper.vm.evtHide();
    expect(wrapper.emitted('hide')).toBeTruthy();
  })

})