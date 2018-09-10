// @flow

import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Typography from '../../atoms/Typography'

const Wrapper = styled.View`
  width: 100%;
  height: ${p => p.theme.sizes.offsetMargin * 3};
  background: ${p => p.theme.palette.background.main};
  color: ${p => p.theme.palette.background.contrastText};

  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const Playlist = ({ playlist }) => (
  <View>
    <Typography primary style={{ lineHeight: 30 }}>
      Playlist
    </Typography>
    <Typography primary strong>
      {playlist}
    </Typography>
  </View>
)

type Props = {
  navigation: {
    goBack: () => void,
  },
}

const SongScreenHeader = (props: Props) => (
  <Wrapper>
    <Container style={{ alignItems: 'center', background: 'green' }}>
      <Playlist playlist={props.children} />
      <TouchableOpacity
        style={{ marginLeft: 'auto', marginTop: 'auto', background: 'blue' }}
        onPress={() => props.navigation.goBack()}
      >
        <Icon name="ios-arrow-dropdown" size={45} />
      </TouchableOpacity>
    </Container>
  </Wrapper>
)

export default SongScreenHeader
