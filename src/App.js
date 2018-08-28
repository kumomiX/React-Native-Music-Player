/**
 * @format
 * @flow
 */

import React, { Fragment } from 'react'
import RootStack from './screens'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import NowPlaying from './components/molecules/NowPlaying'
import songs from './songs'

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <RootStack />
      <NowPlaying song={songs[1]} />
    </Fragment>
  </ThemeProvider>
)

export default App
