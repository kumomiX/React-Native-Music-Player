// @flow
import React from 'react'
import styled, { withTheme } from 'styled-components'
import type { Props } from './types'

import Header from '../../components/molecules/Header'
import SongsList from '../../components/molecules/SongsList'
import Song from '../../components/molecules/Song'
import NowPlaying from '../../components/molecules/NowPlaying'

import songs from '../../songs'

const Screen = styled.View`
  flex: 1;
  background: ${p => p.theme.palette.background.main};
  color: ${p => p.theme.palette.background.contrastText};
`

class LibraryScreen extends React.Component<Props> {
  state = {
    progress: 0,
    active: 1,
    activeSong: songs[1],
  }

  static navigationOptions = ({ navigation }: Props) => {
    return {
      title: navigation.getParam('otherParam'),
      header: <Header navigation={navigation}>Header</Header>,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.active !== state.active) {
      return {
        activeSong: songs.find(_ => _.id === props.active),
      }
    }
    return state
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
              active={this.state.active === song.id}
            />
          ))}
        </SongsList>
        <NowPlaying
          progress={this.state.progress}
          song={songs.find(_ => _.id === this.state.active)}
          onExpand={() =>
            this.props.navigation.navigate('SongScreen', {
              song: this.state.activeSong,
            })
          }
        />
      </Screen>
    )
  }
}

export default withTheme(LibraryScreen)
