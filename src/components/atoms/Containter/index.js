import styled from 'styled-components'

/**
 * Limits max width of contained elements
 */
const Container = styled.View`
  /* max-width: ${p => p.theme.sizes.maxWidth + '%'}; */
  margin: 0 ${p => p.theme.sizes.offsetMargin + 'px'};
  flex-direction: row;
  align-items: center;
`

export default Container
