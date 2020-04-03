import React from 'react'
import { withTheme } from 'styled-components'

import { StyledText, FlexWrapper } from '../components'

function SettingsScreen({ ...props }) {
  return (
    <FlexWrapper height="100%" background="#ddd" alignItems="center" justifyContent="center">
      <StyledText fontSize="20px">SettingsScreen</StyledText>
    </FlexWrapper>
  )
}

export default withTheme(SettingsScreen)
