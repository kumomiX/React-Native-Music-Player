import React from 'react'
import styled from 'styled-components'

const List = styled.View`
  width: 100%;
`

export default ({ children, ...rest }) => <List {...rest}>{children}</List>
