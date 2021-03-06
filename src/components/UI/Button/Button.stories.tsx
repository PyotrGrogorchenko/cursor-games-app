import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './index'

// eslint-disable-next-line no-restricted-syntax
export default {
  title: 'UI/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const Btn = Template.bind({})
Btn.args = {
  icon: 'home',
  children: 'Button',
  size: 'm',
  variant: 'outlined',
  color: 'primary',
  href: '',
  disabled: false
}

export const Link = Template.bind({})
Link.args = {
  icon: 'github',
  children: 'github.com',
  size: 'm',
  variant: 'outlined',
  color: 'success',
  href: 'https://github.com/PyotrGrogorchenko/cursor-games-app',
  disabled: false
}
