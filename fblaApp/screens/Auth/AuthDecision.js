import React from 'react'
import { View, TouchableOpacity, Text, Dimensions, Image } from 'react-native'
import logo from '../../assets/images/fbla-logo.png'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class AuthDecision extends React.Component {

  render() {
    return (
    <View style = {{
      flex:1,
      width:SCREEN_WIDTH,
      height:SCREEN_HEIGHT,
      justifyContent: 'center',
      backgroundColor: 'rgb(255,255,255)'
    }}>
        <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: 50, marginBottom: 100}}>
            <Image source={logo} style={{
                width: 230,
                height: 230,
                marginBottom: 90,
                resizeMode: 'contain'
            }} />

            <TouchableOpacity onPress={() => this.props.navigation.navigate('MemberTabNavigator')}>
                <View style = {{
                  width: SCREEN_WIDTH - 80,
                  height: 60,
                  backgroundColor: 'rgb(0,82,155)',
                  marginBottom: 15,
                  borderRadius:20,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style = {{
                    color: 'rgb(255,255,255)',
                    fontSize: 20,

                  }}>
                    Create an Account
                  </Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLogin')}>
                <View style = {{
                  width: SCREEN_WIDTH - 80,
                  height: 60,
                  backgroundColor:'rgb(255,255,255)',
                  borderColor: 'rgb(0,82,155)',
                  borderRadius:20,
                  borderWidth: 2,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style = {{
                    color: 'rgb(0,82,155)',
                    fontSize: 20,

                  }}>
                    Login
                  </Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style = {{
            alignSelf: 'center',
            justifyContent: 'center',
            width: SCREEN_WIDTH - 80,
            marginTop: 60
          }}>
            <Text style = {{
              color: 'rgb(195,195,195)',
              fontSize: 14,
              textAlign: 'center'
             }}>

              <Text>By tapping on any of the above fields you are accepting our </Text>
              <Text style={{fontWeight: "bold", color: 'rgb(100,100,100)'}}>Terms and Conditions</Text>
            </Text>
          </View>


    </View>
    )
  }
}
