import { render } from '@testing-library/react'
import React from 'react'
// import { ThemeUI } from '~/theme/theme-provider';
import { ButtonText } from '.'

const component = (disabled?: boolean) => (
  // <ThemeUI>
  <ButtonText text="Text test" disabled={disabled}></ButtonText>
  // </ThemeUI>
)

describe('ButtonText', () => {
  it('Should have text', () => {
    const { queryByText } = render(component())
    expect(queryByText('Text test')).toBeTruthy()
  })
})
