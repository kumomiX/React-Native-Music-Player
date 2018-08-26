import styled from 'styled-components'

/**
 * Limits max width of contained elements
 */
const Container = styled.View`
  max-width: ${p => p.theme.sizes.maxWidth};
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
`

export default Container
