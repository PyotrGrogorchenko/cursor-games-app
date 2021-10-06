import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './index'

// eslint-disable-next-line no-restricted-syntax
export default {
  title: 'UI/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>

export const Default = Template.bind({})
Default.args = {
  id: '1',
  type: 'text',
  label: 'Имя',
  width: '300px'
}
