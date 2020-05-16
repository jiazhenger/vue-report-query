import Vue from 'vue'
import Charge from '@cpt/charge'

describe('charge.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Charge)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.p10').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
