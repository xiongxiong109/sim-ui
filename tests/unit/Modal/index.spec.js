// 蒙层组件
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Modal from '@/components/Modal'
import Entry from '@/baseEntry.js'

describe('蒙层组件', () => {
  
  beforeAll(() => {
    Vue.use(Entry)
  })
  
  it('仅在第一次isShow时创建dom', () => {

    const wrapper = mount(Modal);

    expect(wrapper.contains('div')).toBe(false);

    wrapper.setProps({ isShow: true });

    expect(wrapper.contains('div')).toBe(true);

  })

  it('点击蒙层触发隐藏', () => {

    const wrapper = mount(Modal, {
      propsData: {
        isShow: true
      }
    });

    const dom = wrapper.find('.sm-modal');
    expect(wrapper.props().clickModalHide).toBe(true);
    dom.trigger('click');
    expect(wrapper.emitted('hide')).toBeTruthy();

  })

  it('设置clickModalHide禁用蒙层隐藏', () => {

    const wrapper = mount(Modal, {
      propsData: {
        isShow: true
      }
    });

    const dom = wrapper.find('.sm-modal');

    wrapper.setProps({ clickModalHide: false });
    dom.trigger('click');
    expect(wrapper.emitted('hide')).toBeFalsy();

  })

  it('cover all', () => {
    const wrapper = mount(Modal);
    wrapper.vm.afterEnter();
    expect(wrapper.emitted('entered')).toBeTruthy();
    wrapper.vm.afterLeave();
    expect(wrapper.emitted('leaved')).toBeTruthy();
  })
})