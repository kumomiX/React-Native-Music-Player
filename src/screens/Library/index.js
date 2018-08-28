// @flow
import React from 'react'
import styled, { withTheme } from 'styled-components'

import Header from '../../components/molecules/Header'
import SongsList from '../../components/molecules/SongsList'
import Song from '../../components/molecules/Song'

import songs from '../../songs'

import type { Props } from './types'

const Screen = styled.View`
  flex: 1;
  background: ${p => p.theme.palette.background.main};
  color: ${p => p.theme.palette.background.contrastText};
`

class LibraryScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation }: Props) => {
    return {
      title: navigation.getParam('otherParam'),
      header: <Header navigation={navigation}>Header</Header>,
    }
  }

  render() {
    return (
      <Screen>
        <SongsList
          style={{ marginTop: this.props.theme.sizes.offsetMargin * 1.5 }}
        >
          {songs.map(song => (
            <Song
              key={song.id}
              song={song}
              onPress={() =>
                this.props.navigation.navigate('SongScreen', {
                  song,
                })
              }
            />
          ))}
        </SongsList>
      </Screen>
    )
  }
}

export default withTheme(LibraryScreen)
