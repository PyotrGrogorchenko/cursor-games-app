import React from 'react'
import { mount } from 'enzyme'
import { Err } from './index'

describe('Err: wrapper', () => {
  test('All props', () => {
    const wrapper = mount(
      <Err error='TestTitle' errorInfo='TestInfo"' hideBtn/>
    )

    expect(wrapper.find('h1').text()).toEqual('TestTitle')
    expect(wrapper.find('h3').text()).toEqual('TestInfo')
    expect(wrapper.find('button')).toHaveLength(0)
  })

  test('Without props', () => {
    const wrapper = mount(
      <Err/>
    )

    expect(wrapper.find('h1').text()).toEqual('Sorry')
    expect(wrapper.find('h3').text()).toEqual('Something went wrong')
    expect(wrapper.find('button')).toHaveLength(1)
  })
})
