import React from 'react'
import { View, ActivityIndicator, Dimensions, Image, Text } from 'react-native'
import logo from '../../assets/images/fbla-logo.png'
import { FirebaseAuth } from '../../providers/firebase.js';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class AuthLoading extends React.Component {

  componentDidMount() {
    FirebaseAuth.getAuth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'MemberTabNavigator' : 'AuthDecision')  
    })
  }

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
            <View style = {{alignItems: 'center', justifyContent: 'center', marginHorizontal: 20}}>
              <ActivityIndicator style = {{marginTop: 20}} size="large" />
            </View>
        </View>
    </View>
    )
  }
}
