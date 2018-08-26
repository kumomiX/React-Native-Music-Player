import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'
import Container from '../../atoms/Containter'
import Icon from 'react-native-vector-icons/Ionicons'

const Wrapper = styled.View`
  width: 100%;
  height: ${p => p.theme.sizes.offsetMargin * 2.5};
  background: ${p => p.theme.palette.background.main};
  color: ${p => p.theme.palette.background.contrastText};

  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const Title = styled.Text`
  font-size: 25;
  font-weight: 500;
  font-family: ${p => p.theme.fonts.header};
  margin-left: ${p => p.theme.sizes.offsetMargin};
`

const StyledIcon = styled(Icon)``

/**
 * App header
 * @param {*} children - react children
 * @param {Object} navigation - navigation object from react-navigation
 */
const Header = ({ navigation, children }) => (
  <Wrapper>
    <Container>
      {navigation.state.routeName === 'LibraryScreen' && (
        <StyledIcon
          name="ios-arrow-back"
          size={18}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      )}
      {navigation.state.routeName === 'PlaylistScreen' && (
        <StyledIcon
          name="ios-arrow-back"
          size={20}
          onPress={() => navigation.navigate('LibraryScreen')}
        />
      )}

      <Title>{children}</Title>
    </Container>
  </Wrapper>
)

export default Header
