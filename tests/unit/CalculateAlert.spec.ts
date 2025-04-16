import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CalculateAlert from '../../src/components/CalculateAlert.vue'

describe('CalculateAlert.vue', () => {
  it('renders the initial counter value', () => {
    const wrapper = mount(CalculateAlert)
    const badge = wrapper.find('ion-badge')
    expect(badge.text()).toBe('0')
  })

  it('increments the counter when "+" button is clicked', async () => {
    const wrapper = mount(CalculateAlert)
    const incrementButton = wrapper.findAllComponents({
      name: 'ButtonDefault'
    })[1]
    await incrementButton.trigger('click')
    const badge = wrapper.find('ion-badge')
    expect(badge.text()).toBe('1')
  })

  it('decrements the counter when "-" button is clicked', async () => {
    const wrapper = mount(CalculateAlert)
    const decrementButton = wrapper.findAllComponents({
      name: 'ButtonDefault'
    })[0]
    await decrementButton.trigger('click')
    const badge = wrapper.find('ion-badge')
    expect(badge.text()).toBe('-1') // Counter resets to 0
  })
})
