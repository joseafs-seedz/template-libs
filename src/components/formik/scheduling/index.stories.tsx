import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FormikScheduling } from '.'

export default {
  title: 'Components/Formik/Scheduling',
  component: FormikScheduling,
  args: {
    name: 'lorem',
  },
} as ComponentMeta<typeof FormikScheduling>

const Template: ComponentStory<typeof FormikScheduling> = (args) => (
  <FormikScheduling {...args} />
)

export const Scheduling = Template.bind({})
Scheduling.args = {}
