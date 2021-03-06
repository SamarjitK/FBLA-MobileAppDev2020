import React from 'react';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from 'react-navigation-stack'
import TabBarIcon from '../../components/TabBarIcon';
import MemberHome from './MemberHome.js';
import MemberEvents from './MemberEvents.js';
import MemberAddCurrentEvent from './MemberAddCurrentEvent.js';
import MemberAllEvents from './MemberAllEvents.js';
import MemberEventDetails from './MemberEventDetails.js';
import MemberEventDVP from './MemberEventDVP.js';
import MemberAddCompEvent from './MemberAddCompEvent.js';
import MemberMyEventDetails from './MemberMyEventDetails.js';
import MemberCurrentEvents from './MemberCurrentEvents.js';
import MemberAbout from './MemberAbout.js';
import MemberCalendar from './MemberCalendar.js';
import MemberAddCalendarEvent from './MemberAddCalendarEvent.js'
import MemberSettings from './MemberSettings.js';
import MemberChangeProfile from './MemberChangeProfile.js';
import MemberAboutFBLA from './MemberAboutFBLA.js'
import MemberOfficers from './MemberOfficers'
import MemberChapterOfficers from './MemberChapterOfficers'
import SettingsQandA from './SettingsQandA';

const BottomTransition = (index, position, height) => {
  const sceneRange = [index - 1, index];
  const outputHeight = [height, 0];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputHeight,
  });
  return{
    transform: [{translateY: transition}]
  }
}
const NavigationConfig = () => {
  return {
    screenInterpolator: (sceneProps) => {
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = scene.index;
      const height = sceneProps.layout.initHeight;

      return BottomTransition(index, position, height)
    }
  }
}
const HomeStack = createStackNavigator({
    MemberHome: { screen: MemberHome },
    
  },
  {
    headerMode: 'none',
    lazy:false,
    navigationOptions: {
        headerVisible: false,
    },
    //transitionConfig: NavigationConfig,

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
    MemberMyEventDetails: {screen: MemberMyEventDetails},
    MemberAllEvents: {screen: MemberAllEvents},
    MemberEventDVP: {screen: MemberEventDVP},
    MemberEventDetails: {screen: MemberEventDetails},
    MemberAddCompEvent: {screen: MemberAddCompEvent},
    MemberCurrentEvents: {screen: MemberCurrentEvents},
    MemberAddCurrentEvent: {screen: MemberAddCurrentEvent}
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
    MemberAddCalendarEvent: {screen: MemberAddCalendarEvent},
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
    MemberOfficers: {screen: MemberOfficers},
    MemberChapterOfficers: {screen: MemberChapterOfficers}
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
  SettingsQandA: {screen: SettingsQandA},
  MemberChangeProfile: {screen: MemberChangeProfile}
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
