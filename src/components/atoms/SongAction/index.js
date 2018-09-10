import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

const Body = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const WrapIcon = styled.View`
  /* background: orange; */
`

const SongAction = ({ icon, ...props }) => (
  <Body {...props}>
    <Icon name={icon} size={20} inactive />
  </Body>
)

export default SongAction
