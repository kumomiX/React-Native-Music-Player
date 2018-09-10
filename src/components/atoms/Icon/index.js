import React from 'react'
import styled, { css } from 'styled-components'
import VectorIcon from 'react-native-vector-icons/Ionicons'

const ifInactive = css`
  color: ${p => p.theme.palette.greyscale.light};
`

const Icon = styled(VectorIcon)`
  ${p => p.inactive && ifInactive};
`

export default Icon
