import styled from 'styled-components'

/**
 * Limits max width of contained elements
 */
const Container = styled.View`
  /* max-width: ${p => p.theme.sizes.maxWidth + '%'}; */
  margin: 0 ${p => p.theme.sizes.offsetMargin + 'px'};
  flex-direction: row;
  flex: 1;
`

export default Container
