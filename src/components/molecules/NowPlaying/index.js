// @flow

import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import Container from '../../atoms/Container'
import { TouchableOpacity } from 'react-native'

const ProgressBar = styled.View`
  position: absolute;
  height: 2;
  top: 1;
  left: 0;
  background: ${p => p.theme.palette.background.main};
  width: ${p => p.progress + '%'};
`

const Body = styled.View`
  flex-direction: row;
  height: 110;
  background: ${p => p.theme.palette.primary['main']};
  position: relative;
`

const Info = styled.View`
  margin-top: 25;
  flex-direction: row;
  align-items: center;
  flex: 1;
`

const Button = styled(Icon)`
  color: ${p => p.theme.palette.background.main};
`

const Artist = styled.Text`
  font-family: 'Futura New';
  font-weight: 500;
  font-size: 16;
  line-height: 16;
  color: ${p => p.theme.palette.background.main};
  margin-left: 20;
`

const Title = styled.Text`
  font-family: 'Futura New';
  font-weight: 200;
  font-size: 16;
  line-height: 16;
  color: ${p => p.theme.palette.background.main};
  margin-left: 10;
`

const ExpandButton = styled(Icon)`
  color: ${p => p.theme.palette.background.main};
`

const NowPlaying = ({ children, song: { title, artist }, progress = 40 }) => (
  <Body>
    <ProgressBar progress={progress} />
    <Container style={{ alignItems: 'flex-start' }}>
      <Info>
        <Button name="ios-play" size={25} />
        <Artist>Hucci</Artist>
        <Title>Evil</Title>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <ExpandButton name="ios-arrow-dropup" size={40} />
        </TouchableOpacity>
      </Info>
    </Container>
  </Body>
)

export default NowPlaying
