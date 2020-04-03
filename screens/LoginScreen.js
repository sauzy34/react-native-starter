import React, { useContext } from 'react'
import { withTheme } from 'styled-components'
import { Button } from 'react-native'

import { FlexWrapper } from '../components'
import AuthContext from '../context'

function LoginScreen({ theme, ...props }) {
  const { signIn } = useContext(AuthContext)
  return (
    <FlexWrapper background={theme.white} height="100%" justifyContent="center" alignItems="center">
      <Button title="Login" onPress={() => signIn()}></Button>
    </FlexWrapper>
  )
}

export default withTheme(LoginScreen)
