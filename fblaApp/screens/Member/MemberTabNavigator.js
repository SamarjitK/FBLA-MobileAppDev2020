import React from 'react';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from 'react-navigation-stack'
import TabBarIcon from '../../components/TabBarIcon';
import MemberHome from './MemberHome.js';
import MemberEvents from './MemberEvents.js';
import MemberAbout from './MemberAbout.js';
import MemberCalendar from './MemberCalendar.js';
import MemberSettings from './MemberSettings.js';

const HomeStack = createStackNavigator({
    MemberHome: { screen: MemberHome },
  }, 
  {
    headerMode: 'none',
    lazy:false,
    navigationOptions: {
        headerVisible: false,
    },
    
    initialRouteName: 'MemberHome',
  });

    HomeStack.navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 12, fontWeight: "bold", color: 'rgb(0,82,155)' }}>Home</Text>,
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-home'
            : 'md-information-circle'
        }
        />
    ),
};

const EventsStack = createStackNavigator({
    MemberEvents: { screen: MemberEvents },
  },
  {
    headerMode: 'none',
    lazy:false,
    navigationOptions: {
        headerVisible: false,
    },
    
    initialRouteName: 'MemberEvents',
  });
  
  
  EventsStack.navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 12, fontWeight: "bold", color: 'rgb(0,82,155)' }}>Events</Text>,
  
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-clipboard' : 'md-clipboard'}
      />
    ),
};

const CalendarStack = createStackNavigator({
    MemberCalendar: { screen: MemberCalendar },
},
{
  headerMode: 'none',
  lazy:false,
  navigationOptions: {
      headerVisible: false,
  },
  
  initialRouteName: 'MemberCalendar',
});
  
CalendarStack.navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 12, fontWeight: "bold", color: 'rgb(0,82,155)' }}>Calendar</Text>,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        
        name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
        style = 'light'
      />
    ),
  };

const SettingsStack = createStackNavigator({
  MemberSettings: { screen: MemberSettings },
  MemberAbout: {screen: MemberAbout},
},
{
  headerMode: 'none',
  lazy:false,
  navigationOptions: {
      headerVisible: false,
  },
  
  initialRouteName: 'MemberSettings',
});

SettingsStack.navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 12, fontWeight: "bold", color: 'rgb(0,82,155)' }}>Settings</Text>,

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
   
};



export default createMaterialBottomTabNavigator({
  HomeStack: { screen: HomeStack },
  EventsStack: { screen: EventsStack },
  CalendarStack: {screen: CalendarStack},
  SettingsStack: { screen: SettingsStack },
  
}, 
{
  initialRouteName: 'HomeStack',
  barStyle: { backgroundColor: 'white' },
  lazy:false,
  
});
