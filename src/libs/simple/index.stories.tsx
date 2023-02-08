import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Simple } from './index'

export default {
  title: 'Components/Simple',
  component: Simple,
} as ComponentMeta<typeof Simple>

const Template: ComponentStory<typeof Simple> = () => <Simple />

export const Primary = Template.bind({})
Primary.args = {}
