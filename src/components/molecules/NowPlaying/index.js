// @flow

import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import Container from '../../atoms/Container'
import ExpandButton from '../../atoms/ExpandButton'
import { TouchableOpacity } from 'react-native'
import type { Props } from './types'

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

const Actions = styled.View`
  margin-top: 25;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 45;
`

const Info = styled.View`
  flex-direction: row;
  height: 55%;
  align-items: center;
`

const PlayPause = styled(Icon)`
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

/**
 *  Bottom Now Playing Component
 */
const NowPlaying = ({
  song,
  isPlaying = true,
  progress,
  onExpand,
  ...rest
}: Props) =>
  song ? (
    <Body {...rest}>
      <ProgressBar progress={progress} />
      <Container style={{ alignItems: 'flex-start' }}>
        <Actions>
          <TouchableOpacity>
            <PlayPause name={isPlaying ? 'ios-pause' : 'ios-play'} size={25} />
          </TouchableOpacity>

          <Info>
            <Artist>{song.artist}</Artist>
            <Title>{song.title}</Title>
          </Info>
          <ExpandButton style={{ marginLeft: 'auto' }} onPress={onExpand} />
        </Actions>
      </Container>
    </Body>
  ) : (
    <React.Fragment />
  )

export default NowPlaying
