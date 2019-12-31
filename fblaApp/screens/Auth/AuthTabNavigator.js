import React from 'react';
import { Platform, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import AuthLogin from 'C:\Sahil\Mobile App Dev\FBLA-MobileAppDev2020\fblaApp\screens\Auth\AuthLogin.js';
import AuthSignUp from 'C:\Sahil\Mobile App Dev\FBLA-MobileAppDev2020\fblaApp\screens\Auth\AuthSignUp.js';

const LoginStack = createStackNavigator({
    AuthLogin: { screen: AuthLogin },
  }, 
  {
    headerMode: 'none',
    lazy:false,
    navigationOptions: {
        headerVisible: false,
    },
    
    initialRouteName: 'AuthLogin',
  });

    LoginStack.navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 12, fontWeight: "bold", color: 'rgb(0,82,155)' }}>Login</Text>,
    
};

const SignUpStack = createStackNavigator({
    AuthSignUp: { screen: AuthSignUp },
  },
  {
    headerMode: 'none',
    lazy:false,
    navigationOptions: {
        headerVisible: false,
    },
    
    initialRouteName: 'AuthSignUp',
  });
  
  
  EventsStack.navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 12, fontWeight: "bold", color: 'rgb(0,82,155)' }}>Sign Up</Text>,
};




export default createMaterialTopTabNavigator({
  LoginStack: { screen: LoginStack },
  SignUpStack: { screen: SignUpStack },
  
  
}, 
{
  initialRouteName: 'LoginStack',
  barStyle: { backgroundColor: 'white' },
  lazy:false,
  
});

