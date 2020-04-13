import React from 'react';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from 'react-navigation-stack'
import TabBarIcon from '../../components/TabBarIcon';
import MemberHome from './MemberHome.js';
import MemberEvents from './MemberEvents.js';
import MemberAllEvents from './MemberAllEvents.js';
import MemberEventDetails from './MemberEventDetails.js';
import MemberAbout from './MemberAbout.js';
import MemberCalendar from './MemberCalendar.js';
//import MemberAddCalendarEvent from './MemberAddCalendarEvent.js'
import MemberSettings from './MemberSettings.js';
import MemberChangeProfile from './MemberChangeProfile.js';
import MemberAboutFBLA from './MemberAboutFBLA.js'
import MemberOfficers from './MemberOfficers'
import SettingsQandA from './SettingsQandA';


const HomeStack = createStackNavigator({
    MemberHome: { screen: MemberHome },
    MemberChangeProfile: {screen: MemberChangeProfile}
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
    MemberAllEvents: {screen: MemberAllEvents},
    MemberEventDetails: {screen: MemberEventDetails},
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
    //MemberAddCalendarEvent: {screen: MemberAddCalendarEvent},
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

const AboutStack = createStackNavigator({
    MemberAbout: { screen: MemberAbout },
    MemberAboutFBLA: {screen: MemberAboutFBLA},
    MemberOfficers: {screen: MemberOfficers}
},
{
  headerMode: 'none',
  lazy:false,
  navigationOptions: {
      headerVisible: false,
  },

  initialRouteName: 'MemberAbout',
});

AboutStack.navigationOptions = {
    tabBarLabel: <Text style={{ fontSize: 12, fontWeight: "bold", color: 'rgb(0,82,155)' }}>About</Text>,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}

        name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'}
        style = 'light'
      />
    ),
  };

const SettingsStack = createStackNavigator({
  MemberSettings: { screen: MemberSettings },
  SettingsQandA: {screen: SettingsQandA}
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
  AboutStack: {screen: AboutStack},
  SettingsStack: { screen: SettingsStack },

},
{
  initialRouteName: 'HomeStack',
  barStyle: { backgroundColor: 'white' },
  lazy:false,

});
