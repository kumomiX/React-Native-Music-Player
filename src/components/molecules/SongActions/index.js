import React from 'react'
import styled from 'styled-components'
import SongAction from '../../atoms/SongAction'

const Body = styled.View`
  flex-direction: row;
  height: 50;
  /* background: yellow; */
`

const SongActions = props => (
  <Body {...props}>
    <SongAction icon="md-checkmark" />
    <SongAction icon="md-shuffle" />
    <SongAction icon="md-repeat" />
    <SongAction icon="ios-more" />
  </Body>
)

export default SongActions
