/**
 * @format
 * @flow
 */

import React, { Fragment } from 'react'
import RootStack from './screens'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <RootStack />
    </Fragment>
  </ThemeProvider>
)

export default App
