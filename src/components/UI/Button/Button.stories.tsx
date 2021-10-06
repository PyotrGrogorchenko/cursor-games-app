import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './index'

// eslint-disable-next-line no-restricted-syntax
export default {
  title: 'UI/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const All = Template.bind({})
All.args = {
  icon: 'home',
  children: 'Home',
  size: 'm'
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'home',
  size: 'm'
}

export const Text = Template.bind({})
Text.args = {
  children: 'Home',
  size: 'm'
}
