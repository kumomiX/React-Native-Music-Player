// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import type { Props } from './types'
import Container from '../../atoms/Container'

const SIDE_SIZE = 38

const Body = styled.View`
  /* height: 80; */
  display: flex;
  flex-direction: row;
  margin-bottom: ${p => p.theme.sizes.offsetMargin};
`

const CoverWrapper = styled.View`
  padding-left: ${p => p.theme.sizes.offsetMargin};
  padding-right: 20;
  ${p =>
    p.active &&
    css`
      padding-top: ${p => p.theme.sizes.offsetMargin * 0.5};
      padding-bottom: ${p => p.theme.sizes.offsetMargin * 0.5};
      background: ${p => p.theme.palette.primary['100']};
    `};
`

const Cover = styled.Image`
  width: ${SIDE_SIZE};
  height: ${SIDE_SIZE};
`

const Actions = styled.View`
  height: ${SIDE_SIZE};
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin-right: ${p => p.theme.sizes.offsetMargin};
  margin-top: ${p => (p.active ? p.theme.sizes.offsetMargin * 0.5 : 0)};
`

const Description = styled.View`
  height: 100%;
  justify-content: space-between;
`

const Artist = styled.Text`
  font-family: 'Futura New';
  font-weight: 200;
  font-size: 18;
  line-height: 16;
  color: ${p => p.theme.palette.greyscale['light']};
`

const Title = styled.Text`
  font-family: 'Futura New';
  font-weight: 500;
  font-size: 18;
  line-height: 18;
  color: ${p =>
    p.active
      ? p.theme.palette.primary['main']
      : p.theme.palette.background.contrastText};
`

/**
 * General song component
 * @param {*} song - song info
 */
const Song = ({ song: { title, artist, img, active }, ...rest }: Props) => (
  <Body {...rest}>
    <CoverWrapper active={active}>
      <Cover source={img} />
    </CoverWrapper>

    <Actions active={active}>
      <Description>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </Description>
      <Icon style={{ alignSelf: 'center' }} size={20} name="ios-more" />
    </Actions>
  </Body>
)

export default Song
