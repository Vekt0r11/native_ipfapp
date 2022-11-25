import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'

//Screens
import Main from './src/screens/Main'
import Login from './src/screens/Login'
import Post from './src/components/Post'

const { Navigator, Screen } = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'}/>
      <Navigator defaultScreenOptions={Login}>
        <Screen
          name='login'
          component={Login}
          options={{
            headerShown: false
          }}
          props={Navigator}
        />
        <Screen
          name='main'
          component={Main}
          options={{
            headerShown: false
          }}
          props={Navigator}
        />
        <Screen
          name='post'
          component={Post}
          options={{
            headerShown: false
          }}
          props={Navigator}
        />
      </Navigator>
    </NavigationContainer>
  );
}
