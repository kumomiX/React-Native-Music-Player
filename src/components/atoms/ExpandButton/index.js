import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'

const DropUpIcon = styled(Icon).attrs({
  size: 45,
  name: 'ios-arrow-dropup',
})`
  color: ${p => p.theme.palette.background.main};
`

const ExpandButton = props => (
  <TouchableOpacity {...props}>
    <DropUpIcon />
  </TouchableOpacity>
)

export default ExpandButton
