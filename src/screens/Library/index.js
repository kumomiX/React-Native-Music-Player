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
  state = {
    progress: 0,
  }

  static navigationOptions = ({ navigation }: Props) => {
    return {
      title: navigation.getParam('otherParam'),
      header: <Header navigation={navigation}>Header</Header>,
    }
  }

  onProgressChange = val => this.setState({ progress: val })

  render() {
    return (
      <Screen>
        <SongsList>
          {songs.map((song, i) => (
            <Song
              key={song.id}
              song={song}
              onPress={() =>
                this.props.navigation.navigate('SongScreen', {
                  song,
                })
              }
              progress={this.state.progress}
              onChange={this.onProgressChange}
              style={{
                marginTop:
                  i === 0 ? this.props.theme.sizes.offsetMargin * 2 : 0,
              }}
            />
          ))}
        </SongsList>
      </Screen>
    )
  }
}

export default withTheme(LibraryScreen)
