import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button} from 'native-base'
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
            leftComponent ={
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AuthDecision')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-contact' type='ionicon' size = {30} color='white' />
                </Button>
            } 
        />
        <View style = {{
            justifyContent: 'center',
            alignItems: 'center',
        }}>    
            <Text> MEMBER CALENDAR</Text>
            <Text onPress={() => this.props.navigation.navigate('AuthDecision')}>Click here to go to login</Text>
        </View>
    </View>
    )
  }
}
