import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View``

const Body = styled.View`
  position: relative;
  height: 2;
  background: ${p => p.theme.palette.primary['100']};
  width: ${p => p.progress + '%'};
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
`

const Progress = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${p => p.progress + '%'};
  height: 2;
  background: ${p => p.theme.palette.primary.main};
`

const THUMB_SIDE = 12

const Thumb = styled.TouchableOpacity`
  width: ${THUMB_SIDE};
  height: ${THUMB_SIDE};
  border-radius: 50;
  background: ${p => p.theme.palette.primary.main};
  position: absolute;
  left: ${p => p.progress - 2 + '%'};
  top: ${THUMB_SIDE / -2};
  bottom: 0;
  right: 0;
`

const ProgressBar = ({ progress }) => (
  <Body>
    <Progress progress={progress} />

    <Thumb progress={progress} />
  </Body>
)

export default ProgressBar
