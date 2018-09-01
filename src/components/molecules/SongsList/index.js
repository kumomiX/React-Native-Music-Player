import React from 'react'
import styled from 'styled-components'

const List = styled.ScrollView`
  width: 100%;
`

export default ({ children, ...props }) => <List {...props}>{children}</List>
