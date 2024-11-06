import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {AppDrawerNavigator} from "./components/AppDrawerNavigator";
// import {ResetPasswordScreen} from "./Screens/ResetPasswordScreen";

import WelcomeScreen from './Screens/WelcomeScreen';
//import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'


export default function App() {
  return (
    <SafeAreaProvider>
    <AppContainer/>
    </SafeAreaProvider>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  TabNavigator:{screen:AppTabNavigator},
  // Reset:{screen : ResetPasswwordScreen},
})

const AppContainer =  createAppContainer(switchNavigator);

