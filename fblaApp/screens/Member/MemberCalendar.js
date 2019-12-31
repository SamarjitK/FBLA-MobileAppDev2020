import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button} from 'native-base'

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class MemberCalendar extends React.Component {

 
  render() {
    return ( 
    
    <View style = {{
        flex:1,
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
        backgroundColor: 'rgb(255,255,255)',
    }}>
        <Header
            outerContainerStyles={{ zIndex: 1, height:90}}
            backgroundColor='rgb(0,82,155)'
            innerContainerStyles = {{alignItems: 'center'}}
            centerComponent = {
                <Text style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: '400',
                    textAlign: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    fontSize: 20,
                    fontWeight: '600',
                    marginTop: 35
                }}>CALENDAR</Text>
              }
        />
        
            <Agenda/>
            
            
        
    </View>
    
    )
  }
}
