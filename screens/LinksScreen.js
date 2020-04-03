import React from 'react'
import { withTheme } from 'styled-components'

import { StyledText, FlexWrapper } from '../components'

function LinksScreen({ ...props }) {
  return (
    <FlexWrapper height="100%" background="#ddd" alignItems="center" justifyContent="center">
      <StyledText fontSize="20px">LinksScreen</StyledText>
    </FlexWrapper>
  )
}

export default withTheme(LinksScreen)
