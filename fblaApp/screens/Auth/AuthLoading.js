import React from 'react'
import { View, ActivityIndicator, Dimensions, Image, Text } from 'react-native'
import logo from '../../assets/images/fbla-logo.png'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class AuthLoading extends React.Component {


  render() {
    return (
    <View style = {{
      flex:1,
      width:SCREEN_WIDTH,
      height:SCREEN_HEIGHT,
      justifyContent: 'center',
      backgroundColor: 'rgb(255,255,255)'
    }}>
        <View style = {{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={logo} style={{
                width: 205,
                height: 205,
                resizeMode: 'contain'
            }} />

            <Text onPress={() => this.props.navigation.navigate('AuthDecision')}>Click here to go to login</Text>
        </View>
    </View>
    )
  }
}
