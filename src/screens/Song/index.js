//@flow
import React from 'react'
import styled from 'styled-components'
import { Platform, StyleSheet, Text, View } from 'react-native'
import type { Props } from './types'

const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.palette.primary.background};
  color: ${p => p.theme.palette.primary.contrastText};
`

export default class HomeScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => ({
    title: navigation.getParam('song'),
    header: null,
  })

  render() {
    return (
      <Screen>
        <Text>Song: {this.props.navigation.getParam('song')}</Text>
      </Screen>
    )
  }
}
