//@flow
import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Platform, StyleSheet, Text, View } from 'react-native'
import type { Props } from './types'

import songs from '../../songs'

import Header from '../../components/molecules/SongScreenHeader'
import SongActions from '../../components/molecules/SongActions'

const Screen = styled.View`
  flex: 1;
  align-items: center;
  background: ${p => p.theme.palette.background.main};
  color: ${p => p.theme.palette.background.contrastText};
`

class SongScreen extends React.Component<Props> {
  state = {
    song: null,
  }

  static navigationOptions = ({ navigation }: Props) => {
    const song = navigation.getParam('song')
    return {
      header: (
        <Header navigation={navigation}>
          {navigation.getParam('song').title}
        </Header>
      ),
    }
  }

  componentDidMount() {
    const song = songs.find(
      _ => _.id === this.props.navigation.getParam('song')
    )
    this.setState({ song })
  }

  render() {
    return (
      <Screen>
        <SongActions
          style={{ marginTop: this.props.theme.sizes.offsetMargin * 2 }}
        />
      </Screen>
    )
  }
}

export default withTheme(SongScreen)
