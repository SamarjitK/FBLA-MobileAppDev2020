import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { createStackNavigator } from 'react-navigation-stack'
import AuthLoading from '../screens/Auth/AuthLoading';
import AuthDecision from '../screens/Auth/AuthDecision';
import AuthLogin from '../screens/Auth/AuthLogin';
import AuthSignUp from '../screens/Auth/AuthSignUp';
import AuthSignUpAdmin from '../screens/Auth/AuthSignUpAdmin';
//import AuthTabNavigator from '../screens/Auth/AuthTabNavigator';
import MemberTabNavigator from '../screens/Member/MemberTabNavigator.js';
import Terms from '../screens/Auth/Terms';

const MemberAuthStack = createStackNavigator({
    PlayerAuthLoading: {screen: AuthLoading}
});
const AuthStack = createStackNavigator({
    
    AuthDecision: {screen: AuthDecision},
    Terms: {screen: Terms},
    AuthLogin: {screen: AuthLogin},
    AuthSignUp: {screen: AuthSignUp},
    AuthSignUpAdmin: {screen: AuthSignUpAdmin},
    //AuthTabNavigator: {screen: AuthTabNavigator},
    
},
{
  headerMode: 'none',
  lazy:false,
  navigationOptions: {
      headerVisible: false,
  },
  initialRouteName: 'AuthDecision',
});
export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: {screen: AuthLoading},
      AuthStack: AuthStack,
      MemberTabNavigator: {screen: MemberTabNavigator},
      MemberAuthStack: MemberAuthStack,
      
    },
    {
      initialRouteName: 'AuthLoading',
      drawerWidth: 300  
    }
  ));