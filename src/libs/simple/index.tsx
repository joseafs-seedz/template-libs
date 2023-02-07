import React, { memo } from 'react'
import { Root } from './styled'

const OgSimple = () => {
  return <Root>simple test</Root>
}

export const Simple = memo(OgSimple)
