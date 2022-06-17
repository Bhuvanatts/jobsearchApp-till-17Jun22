import React from 'react'
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import BottomTabNavigator from './src/navigation/TabNavigator';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from './src/navigation/DrawerNavigator'
import DetailScreen from './src/screens/DetailScreen';

export default function App() {
  return (
    <Provider theme={theme}>
      {/* <NavigationContainer>
          <DrawerNavigation/>
      </NavigationContainer> */}
      <DetailScreen/>
    </Provider>
  )
}
