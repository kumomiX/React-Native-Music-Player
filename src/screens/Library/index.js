// @flow
import React from 'react'
import styled, { withTheme } from 'styled-components'

import Header from '../../components/molecules/Header'
import SongsList from '../../components/molecules/SongsList'
import Song from '../../components/atoms/Song'
import Container from '../../components/atoms/Containter'

import type { Props } from './types'

const Screen = styled.View`
  flex: 1;
  background: ${p => p.theme.palette.background.main};
  color: ${p => p.theme.palette.background.contrastText};
`

const songs = [
  {
    artist: 'Boy Harsher',
    title: 'Pain',
    id: 0,
    img: require('../../pain.jpg'),
  },
  {
    artist: 'Noname',
    title: 'Diddy Bop',
    id: 1,
    img: require('../../diddybop.jpeg'),
    active: true,
  },
  {
    artist: 'Crystal Castles',
    title: 'Kept',
    id: 2,
    img: require('../../kept.jpg'),
  },
]

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
