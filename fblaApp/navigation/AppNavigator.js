import React from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import AuthLoading from '../screens/Auth/AuthLoading';
import AuthDecision from '../screens/Auth/AuthDecision';
import AuthLogin from '../screens/Auth/AuthLogin';
import AuthSignUp from '../screens/Auth/AuthSignUp';
//import AuthTabNavigator from '../screens/Auth/AuthTabNavigator';
import MemberTabNavigator from '../screens/Member/MemberTabNavigator.js';


const MemberAuthStack = createSwitchNavigator({
    PlayerAuthLoading: {screen: AuthLoading}
});
const AuthStack = createSwitchNavigator({
    AuthLoading: {screen: AuthLoading},
    AuthDecision: {screen: AuthDecision},
    AuthLogin: {screen: AuthLogin},
    AuthSignUp: {screen: AuthSignUp},
    //AuthTabNavigator: {screen: AuthTabNavigator},
    MemberTabNavigator: {screen: MemberTabNavigator}
});
export default createAppContainer(createDrawerNavigator(
    {
      MemberAuthStack: MemberAuthStack,
      AuthStack: AuthStack
    },
    {
      initialRouteName: 'AuthStack',
      drawerWidth: 300  
    }
  ));