import React from 'react'
import styled, { css } from 'styled-components'

const Primary = css`
  color: ${p => p.theme.palette.primary.main};
`

const Typography = styled.Text`
  font-family: 'Futura New';
  font-weight: ${p => (p.strong ? 500 : 200)};
  font-size: 18;
  line-height: 16;
  color: ${p => (p.color ? p.theme.palette[color].main : 'black')};

  ${p => p.primary && Primary};
`

export default Typography
