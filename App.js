import React, { useState, useEffect } from 'react'
import { Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native'
import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'
import NetInfo from '@react-native-community/netinfo'
import AppNavigator from './navigation/AppNavigator'
import { ThemeProvider } from 'styled-components'
import Colors from './constants/Colors'

function App({ ...props }) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setIsConnected(isConnected)
    })
  }, [])
  async function loadResourcesAsync() {
    return Promise.all([
      Asset.loadAsync([require('./assets/images/icon.png'), require('./assets/images/icon.png')]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  async function handleLoadingError(error) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  async function handleFinishLoading() {
    setIsLoadingComplete(true)
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return <AppLoading startAsync={loadResourcesAsync} onError={handleLoadingError} onFinish={handleFinishLoading} />
  } else if (!isConnected) {
    return <View style={styles.container}>{alert('Not Internet Connection')}</View>
  } else {
    return (
      <ThemeProvider theme={Colors}>
        <React.Fragment>
          <SafeAreaView style={{ backgroundColor: Colors.primary }}>
            <View style={styles.container}>
              {Platform.OS === 'ios' ? (
                <React.Fragment />
              ) : (
                <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
              )}
            </View>
          </SafeAreaView>
          <AppNavigator />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App
