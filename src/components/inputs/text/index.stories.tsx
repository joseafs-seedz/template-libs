import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputText } from '.'

export default {
  title: 'Components/Inputs/InputText',
  component: InputText,
  args: {
    name: 'storybook',
    onChange: (e) => console.log('test Change', e.target.value),
  },
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
