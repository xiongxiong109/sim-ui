// 1px边框组件测试
import { shallowMount } from '@vue/test-utils'
import RpxBlock from '@/components/RpxBlock'

describe('1px边框组件', () => {

  it('支持任意tag传入的渲染', () => {
    const wrapper = shallowMount(RpxBlock);

    expect(wrapper.contains('div')).toBe(true);

    wrapper.setProps({
      tag: 'li'
    })

    expect(wrapper.contains('li')).toBe(true);

  })

});