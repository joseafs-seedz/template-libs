import styled, { css } from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const Label = styled.label``

export const Input = styled.input`
  display: flex;
  flex: 1;
  outline: unset;

  padding: 16px;
  border-radius: 4px;
  border: solid 1px #f6f6f6;
`

/* ${({ theme }) => css`
  padding: ${theme.space * 2}px;
  border-radius: ${theme.shape.radius}px;
  border: solid 1px ${theme.palette.grey[400]};
`} */
