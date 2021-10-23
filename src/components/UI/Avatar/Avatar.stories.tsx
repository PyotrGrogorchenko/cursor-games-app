import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AvatarUI } from './index'

// eslint-disable-next-line no-restricted-syntax
export default {
  title: 'UI/Avatar',
  component: AvatarUI
} as ComponentMeta<typeof AvatarUI>

const Template: ComponentStory<typeof AvatarUI> = (args) => <AvatarUI {...args}/>

export const Default = Template.bind({})
Default.args = {}
