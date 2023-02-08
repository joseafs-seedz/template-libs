import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FormSimple } from '.'

export default {
  title: 'Components/Form/Simple',
  component: FormSimple,
  args: {
    name: 'lorem',
  },
} as ComponentMeta<typeof FormSimple>

const Template: ComponentStory<typeof FormSimple> = (args) => (
  <FormSimple {...args} />
)

export const Scheduling = Template.bind({})
Scheduling.args = {}
