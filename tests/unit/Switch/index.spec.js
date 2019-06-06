// Switch 组件测试
import { mount } from '@vue/test-utils'
import Page from './test'
import Switch from '@/components/Switch'

const factory = () => {
  const wrapper = mount(Page);
  const smSwitch = wrapper.find(Switch);
  const switchBtn = smSwitch.find('div');
  return {
    wrapper,
    smSwitch,
    switchBtn
  }
}

describe('Switch Component', () => {

  it('isDisabled控制开关行为', () => {

    const { wrapper, smSwitch } = factory();

    wrapper.setData({
      isOpen: false,
      isDisabled: false
    })

    expect(smSwitch.vm.isDisabled).toBe(false);
  })

  it('正常状态下点击, v-model控制双向数据变化', () => {

    const { wrapper, smSwitch, switchBtn } = factory();
    
    wrapper.setData({
      isOpen: false,
      isDisabled: false
    })

    switchBtn.trigger('click');
    // 触发input
    expect(smSwitch.emitted('input')).toBeTruthy();
    // v-model
    expect(smSwitch.vm.value).toBe(true)
    expect(wrapper.vm.isOpen).toEqual(smSwitch.vm.value);
    // 确保UI的快照, snapshot
    expect(wrapper.element).toMatchSnapshot()
  })

  it('禁用状态下点击无效', () => {

    const { wrapper, smSwitch, switchBtn } = factory();

    wrapper.setData({
      isDisabled: true,
      isOpen: false
    });

    switchBtn.trigger('click');
    // 不触发input事件
    expect(smSwitch.emitted('input')).toBeFalsy();
    // 数据无变化
    expect(wrapper.vm.isOpen).toEqual(smSwitch.vm.value);
    expect(wrapper.element).toMatchSnapshot()

  })

})