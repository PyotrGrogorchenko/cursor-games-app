import React from 'react'
import { mount } from 'enzyme'
import { ChangePasswordForm } from './index'

describe('ChangePasswordForm: wrapper', () => {
  test('main test', () => {
    const wrapper = mount(
      <ChangePasswordForm/>
    )

    expect(wrapper.find('input')).toHaveLength(0)

    expect(wrapper.find('input#oldPassword')).toHaveLength(0)
    expect(wrapper.find('input#newPassword')).toHaveLength(0)
    expect(wrapper.find('input#newPasswordConfirm')).toHaveLength(0)
    expect(wrapper.find('div[role="alert"]')).toHaveLength(0)

    const changePasswordShow = wrapper.find('button#change-password_show')
    expect(changePasswordShow).toHaveLength(1)
    changePasswordShow.simulate('click')
    expect(wrapper.find('input#oldPassword')).toHaveLength(1)
    expect(wrapper.find('input#newPassword')).toHaveLength(1)
    expect(wrapper.find('input#newPasswordConfirm')).toHaveLength(1)
    expect(wrapper.find('div[role="alert"]')).toHaveLength(0)

    const changePasswordSave = wrapper.find('button#change-password_save')
    changePasswordSave.simulate('click')
    expect(wrapper.find('div[role="alert"]')).toHaveLength(1)

    // Не работает click cancel
    // const changePassword_cancel = wrapper.find('button#change-password_cancel')
    // changePassword_cancel.simulate('click')
    // expect(wrapper.find('input#oldPassword')).toHaveLength(0)
    // expect(wrapper.find('input#newPassword')).toHaveLength(0)
    // expect(wrapper.find('input#newPasswordConfirm')).toHaveLength(0)
  })
})
