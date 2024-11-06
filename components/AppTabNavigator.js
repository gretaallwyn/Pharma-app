import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomerDetailsScreen from '../Screens/CustomerDetails';
import CustomerInfoScreen from "../Screens/CustomerInfoScreen";



export const AppTabNavigator = createBottomTabNavigator({
  CustomerInfo : {
    screen: CustomerInfoScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/new-customer-icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Customer Information",
    }
  },
  CusotmerDetails: {
    screen: CustomerDetailsScreen,
    navigationOptions :{
     tabBarIcon : <Image source={require("../assets/customer-my-medicine.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Enter Customer Details",
    }
  }
});