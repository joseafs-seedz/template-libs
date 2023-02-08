import React from 'react'
import { memo } from 'react'
import { Input, Label, Root } from './styled'

export interface Props {
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: React.InputHTMLAttributes<unknown>['type']
  label?: string
  required?: boolean
  value?: string | number
  min?: string | number
  max?: string | number
  placeholder?: string
}

const OgInputText = ({
  name,
  type,
  label,
  value,
  min,
  max,
  required,
  placeholder,
  onChange,
}: Props) => {
  return (
    <Root>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        id={name}
        required={required}
        data-testid={`input-${name}`}
        name={name}
        min={min}
        max={max}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Root>
  )
}

export const InputText = memo(OgInputText)
