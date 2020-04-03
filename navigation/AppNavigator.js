import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, LinksScreen, SettingsScreen, LoginScreen } from '../screens'
import Colors from '../constants/Colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon, FlexWrapper, StyledText } from '../components'
import AuthContext from '../context'

const headerStyle = {
  headerStyle: {
    backgroundColor: Colors.primary,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: 'transparent',
    elevation: 8,
    borderBottomWidth: 0,
    shadowRadius: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0.5
    }
  },
  headerBackTitle: null,
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20
  }
}

const tabBarOptions = {
  activeTintColor: '#fff',
  showLabel: true,
  inactiveTintColor: '#ddd',
  style: {
    backgroundColor: Colors.primary,
    paddingTop: 5
  }
}

function TabIcon({ icon, ...props }) {
  return (
    <FlexWrapper justifyContent="center" alignItems="center" pointerEvents="none">
      <Icon name={icon} />
    </FlexWrapper>
  )
}
const AuthStack = createStackNavigator()
const HomeStack = createStackNavigator()
const LinksStack = createStackNavigator()
const SettingsStack = createStackNavigator()
const Tabs = createBottomTabNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...headerStyle
        }}
      />
    </HomeStack.Navigator>
  )
}
function LinksStackScreen() {
  return (
    <LinksStack.Navigator>
      <LinksStack.Screen
        name="Links"
        component={LinksScreen}
        options={{
          ...headerStyle
        }}
      />
    </LinksStack.Navigator>
  )
}
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          ...headerStyle
        }}
      />
    </SettingsStack.Navigator>
  )
}

function AppStack() {
  return (
    <Tabs.Navigator initialRouteName="More" tabBarOptions={{ ...tabBarOptions }}>
      <Tabs.Screen
        name="home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ focused }) => <TabIcon icon={'home'} fill={focused ? '#fff' : 'red'} />,
          title: 'home',
          ...headerStyle
        }}
      />
      <Tabs.Screen
        name="links"
        component={LinksStackScreen}
        options={{
          tabBarLabel: 'links',
          tabBarIcon: ({ focused }) => <TabIcon icon={'search'} fill={focused ? '#fff' : 'red'} />,
          title: 'links',
          ...headerStyle
        }}
      />
      <Tabs.Screen
        name="settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'settings',
          tabBarIcon: ({ focused }) => <TabIcon icon={'account'} fill={focused ? '#fff' : 'red'} />,
          title: 'settings',
          ...headerStyle
        }}
      />
    </Tabs.Navigator>
  )
}

function AuthenticationStack() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  )
}

export default function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true)
  const [userDetails, setUserDetails] = useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn() {
        setIsLoading(false)
        setUserDetails({ user: 'activate' })
      },
      logout() {
        setIsLoading(false)
        setUserDetails(null)
      }
    }
  })

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <FlexWrapper height="100%" alignItems="center" justifyContent="center">
        <StyledText fontSize="26px" fontWeight="bold">
          Loading screen...
        </StyledText>
      </FlexWrapper>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>{isEmpty(userDetails) ? <AuthenticationStack /> : <AppStack />}</NavigationContainer>
    </AuthContext.Provider>
  )
}
