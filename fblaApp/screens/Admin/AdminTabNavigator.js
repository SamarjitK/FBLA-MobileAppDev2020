import React from 'react';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from 'react-navigation-stack'
import TabBarIcon from '../../components/TabBarIcon';
import AdminHome from './AdminHome.js';
import AdminEvents from './AdminEvents.js';
import AdminAllEvents from './AdminAllEvents.js';
import AdminEventDetails from './AdminEventDetails.js';
import AdminAddCurrentEvent from './AdminAddCurrentEvent.js';
import AdminAbout from './AdminAbout.js';
import AdminCalendar from './AdminCalendar.js';
import AdminSettings from './AdminSettings.js';
import AdminCreateAnnouncement from './AdminCreateAnnouncement.js';
import AdminEditAnnouncement from './AdminEditAnnouncement.js';
import AdminEditAttendance from './AdminEditAttendance.js';
import AdminCurrentEvents from './AdminCurrentEvents.js'
import AdminAttendance from './AdminAttendance.js'
import AdminWeeklyMeetings from './AdminWeeklyMeetings.js'
import AdminAddMeeting from './AdminAddMeeting.js'
import AdminEventTeams from './AdminEventTeams.js'
import AdminChapterOfficers from './AdminChapterOfficers.js'
import AdminAddChapterOfficer from './AdminAddChapterOfficer.js'
import AdminCurrentEventSignups from './AdminCurrentEventSignups.js'

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
    AdminHome: { screen: AdminHome },
    AdminCreateAnnouncement: {screen: AdminCreateAnnouncement},
    AdminEditAnnouncement: {screen: AdminEditAnnouncement}
  },
  {
    headerMode: 'none',
    lazy:false,
    navigationOptions: {
        headerVisible: false,
    },
    //transitionConfig: NavigationConfig,

    initialRouteName: 'AdminHome',
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
    AdminEvents: { screen: AdminEvents },
    AdminAllEvents: {screen: AdminAllEvents},
    AdminAddCurrentEvent: {screen: AdminAddCurrentEvent},
    AdminCurrentEvents: {screen: AdminCurrentEvents},
 
    AdminEventDetails: {screen: AdminEventDetails},
    AdminAttendance: {screen: AdminAttendance},
    AdminWeeklyMeetings: {screen: AdminWeeklyMeetings},
    AdminAddMeeting: {screen: AdminAddMeeting},
    AdminEventTeams: {screen: AdminEventTeams},
    AdminEditAttendance: {screen: AdminEditAttendance},
    AdminCurrentEventSignups: {screen: AdminCurrentEventSignups},
    
  },
  {
    headerMode: 'none',
    lazy:false,
    navigationOptions: {
        headerVisible: false,
    },

    initialRouteName: 'AdminEvents',
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
    AdminCalendar: { screen: AdminCalendar },
},
{
  headerMode: 'none',
  lazy:false,
  navigationOptions: {
      headerVisible: false,
  },

  initialRouteName: 'AdminCalendar',
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
    AdminAbout: { screen: AdminAbout },
    AdminChapterOfficers: {screen: AdminChapterOfficers},
    AdminAddChapterOfficer: {screen: AdminAddChapterOfficer}
},
{
  headerMode: 'none',
  lazy:false,
  navigationOptions: {
      headerVisible: false,
  },

  initialRouteName: 'AdminAbout',
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
  AdminSettings: { screen: AdminSettings },
},
{
  headerMode: 'none',
  lazy:false,
  navigationOptions: {
      headerVisible: false,
  },

  initialRouteName: 'AdminSettings',
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
