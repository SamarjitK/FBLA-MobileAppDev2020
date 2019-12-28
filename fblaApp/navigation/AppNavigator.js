import React from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import AuthLoading from '../screens/Auth/AuthLoading';
import AuthDecision from '../screens/Auth/AuthDecision';
import AuthLogin from '../screens/Auth/AuthLogin';
import MemberTabNavigator from '../screens/Member/MemberTabNavigator.js';

const DeveloperAuthStack = createSwitchNavigator({
    DeveloperAuthLoading: { screen: AuthLoading },
});
const MemberAuthStack = createSwitchNavigator({
    PlayerAuthLoading: {screen: AuthLoading}
});
const AuthStack = createSwitchNavigator({
    AuthLoading: {screen: AuthLoading},
    AuthDecision: {screen: AuthDecision},
    AuthLogin: {screen: AuthLogin},
    MemberTabNavigator: {screen: MemberTabNavigator}
});
export default createAppContainer(createDrawerNavigator(
    {
      DeveloperAuthStack: DeveloperAuthStack,
      MemberAuthStack: MemberAuthStack,
      AuthStack: AuthStack
      //    SettingsScreen: SettingsScreen,
      //SideMenu: SideMenu,
    },
    {
      initialRouteName: 'AuthStack',
      //contentComponent: PlayerSideMenu,
      drawerWidth: 300
      //contentComponent: ({ navigation }) => (
      //<SideMenu navigation={navigation} />)    
    }
  ));