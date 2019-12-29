import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button} from 'native-base'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class MemberAbout extends React.Component {

 
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
            
        />
        <View style = {{
            justifyContent: 'center',
            alignItems: 'center',
        }}>    
            <Text> MEMBER ABOUT</Text>
            <Text onPress={() => this.props.navigation.navigate('AuthDecision')}>Click here to go to login</Text>
        </View>
    </View>
    )
  }
}
