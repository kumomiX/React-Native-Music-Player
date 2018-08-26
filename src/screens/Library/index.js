// @flow
import React from 'react'
import styled from 'styled-components'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/molecules/Header'

import type { Props } from './types'

const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.palette.primary.background};
  color: ${p => p.theme.palette.primary.contrastText};
`

export default class HomeScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => {
    return {
      title: navigation.getParam('otherParam'),
      header: <Header navigation={navigation}>Header</Header>,
    }
  }

  render() {
    return (
      <Screen>
        <Text
          onPress={() =>
            this.props.navigation.navigate('SongScreen', {
              song: 'Boy Harsher - Pain',
            })
          }
        >
          Music Library
        </Text>
      </Screen>
    )
  }
}
