import React, { useContext } from 'react'
import { withTheme } from 'styled-components'
import { Button } from 'react-native'

import AuthContext from '../context'
import { StyledText, FlexWrapper } from '../components'

function HomeScreen({ ...props }) {
  const { logout } = useContext(AuthContext)
  return (
    <FlexWrapper height="100%" background="#ddd" alignItems="center" justifyContent="center">
      <StyledText fontSize="20px">HomeScreen</StyledText>
      <Button title="Logout" onPress={() => logout()} />
    </FlexWrapper>
  )
}

export default withTheme(HomeScreen)
