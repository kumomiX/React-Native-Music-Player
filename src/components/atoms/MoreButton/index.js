import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const MoreButton = props => (
  <TouchableOpacity {...props}>
    <Icon style={{ alignSelf: 'center' }} size={20} name="ios-more" />
  </TouchableOpacity>
)

export default MoreButton
