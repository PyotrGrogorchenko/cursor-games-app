import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from './index'
import { initStore } from '../../../store'
import { ProviderWrapper } from '../../../../.storybook/Provider'

// eslint-disable-next-line no-restricted-syntax
export default {
  title: 'UI/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <ProviderWrapper store={initStore()}>
    <Avatar {...args}/>
  </ProviderWrapper>
)

export const Default = Template.bind({})
Default.args = {}
