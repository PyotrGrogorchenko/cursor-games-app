import React from 'react'
import { mount } from 'enzyme'
import { AvatarUI } from './index'

describe('AvatarUI: wrapper', () => {
  test('Without props', () => {
    const wrapper = mount(
      <AvatarUI/>
    )

    expect(wrapper.find('svg')).toHaveLength(1)
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(0)
  })

  test('With props', () => {
    const wrapper = mount(
      <AvatarUI showBtn/>
    )

    expect(wrapper.find('svg')).toHaveLength(1)
    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button#upload-a-photo')).toHaveLength(1)
  })
})
