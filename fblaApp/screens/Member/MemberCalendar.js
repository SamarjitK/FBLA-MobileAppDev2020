import React from 'react'
import { View, Dimensions, Text, ScrollView, YellowBox } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button} from 'native-base'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

YellowBox.ignoreWarnings([
  'componentWillReceiveProps', // TODO: Remove when fixed
  'componentWillMount', // TODO: Remove when fixed
])

export default class MemberCalendar extends React.Component {

 
  render() {
    return ( 
    
    <View style = {{
        flex:1,
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
        backgroundColor: 'rgb(245,245,245)',
    }}>
        <Header
            outerContainerStyles={styles.memberHeader}
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
              rightComponent = {
                <Button transparent style = {{ marginTop: 35, justifyContent: 'flex-start', alignItems: 'center', marginRight: 10}} onPress={() => this.props.navigation.navigate('MemberAddCalendarEvent')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-add-circle-outline' type='ionicon' size = {26} color='white' />
                </Button>
            }
        />
        
            <Agenda/>
            
            
        
    </View>
    
    )
  }
}
