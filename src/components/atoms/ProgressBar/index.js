import React from 'react'
import styled from 'styled-components'
import Slider from 'react-native-slider'

const THUMB_SIDE = 12

const sliderProps = {
  minimumValue: 0,
  maximumValue: 100,
  step: 1,
}

const Progress = styled(Slider).attrs({
  ...sliderProps,
  thumbTintColor: p => p.theme.palette.primary.main,
  minimumTrackTintColor: p => p.theme.palette.primary.main,
  maximumTrackTintColor: p => p.theme.palette.primary['100'],
  trackStyle: {
    height: 2,
  },
  thumbStyle: {
    height: THUMB_SIDE,
    width: THUMB_SIDE,
  },
})``

const ProgressBar = ({ progress }) => <Progress value={progress - 1} />

export default ProgressBar
