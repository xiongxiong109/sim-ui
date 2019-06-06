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

})