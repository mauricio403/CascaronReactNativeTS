import 'react-native-gesture-handler';
import React from 'react'
import { Navigator } from './src/navigator/navigator';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <Navigator></Navigator>
    </NavigationContainer>
  )
}

export default App
