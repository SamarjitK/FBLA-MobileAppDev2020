import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native';
import logo from '../../assets/images/fbla-logo.png';
import { FormInput, FormValidationMessage, SocialIcon, Row, Header, Icon } from 'react-native-elements';
import { Form, Item, Input, Label, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class AuthLogin extends React.Component {
    render() {
        return (

        <View>
            <Header

            outerContainerStyles={{ zIndex: 1, height:90, borderBottomColor:'white'}}
            backgroundColor='rgb(255,255,255)'
            innerContainerStyles = {{alignItems: 'center'}}
            leftComponent ={
            <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AuthDecision')}>
              <Icon style = {{height:25, width:25}} name = 'ios-arrow-back' type='ionicon' color='black' />
            </Button>
            }
            containerStyle={{
              justifyContent: 'space-around',
            }}
            />
            <KeyboardAwareScrollView
        //keyboardVerticalOffset = {Header.HEIGHT+20}
        //behavior = "padding"
        extraHeight = {175}
        >
            <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: 16, marginBottom: 60}}>
                <Image source={logo} style={{
                    width: 230,
                    height: 230,

                    resizeMode: 'contain'
                }} />
            </View>

            <View style={{
                flex: 3,
                backgroundColor: 'white'
            }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <View style={{
                        marginBottom: 18,
                        width: SCREEN_WIDTH - 55,
                        height: 55,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontSize: 15,
                            marginHorizontal: 9,
                            color: 'rgb(60,60,60)',
                            fontWeight: '600'
                        }}>   EMAIL
                        </Text>


                        <FormInput
                            style={{
                                fontSize: 16,
                                marginHorizontal: 10,
                                marginTop: 5,
                                color: 'gray'
                            }}
                            placeholder={'Enter email'}
                            placeholderTextColor={'gray'}

                        />
                        <FormValidationMessage></FormValidationMessage>
                    </View>

                    <View style={{
                        marginTop: 20,
                        marginBottom: 18,
                        width: SCREEN_WIDTH - 55,
                        height: 55,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontSize: 15,
                            marginHorizontal: 9,
                            color: 'rgb(60,60,60)',
                            fontWeight: '600'
                        }}>   PASSWORD
                        </Text>
                        <FormInput
                            secureTextEntry={true}
                            style={{
                                fontSize: 16,
                                marginHorizontal: 10,
                                marginTop: 5,
                                color: 'gray'
                            }}
                            placeholder={'Enter password'}
                            placeholderTextColor={'gray'}

                        />
                        <FormValidationMessage></FormValidationMessage>
                    </View>

                    <TouchableOpacity
                        style={{
                            width: SCREEN_WIDTH - 90,
                            height: 45,
                            backgroundColor: 'rgba(0,82,155,0.9999)',
                            justifyContent: 'center',
                            marginTop: 10,
                        }}
                        onPress={() => this.props.navigation.navigate('MemberTabNavigator')}
                    >
                        <Text style={{
                            color: 'rgb(255,255,255)',
                            fontSize: 14,
                            fontWeight: '700',
                            textAlign: 'center'
                        }}>
                        Sign in </Text>
                    </TouchableOpacity>
                    <View style = {{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        width: SCREEN_WIDTH - 80,
                        marginTop: 120,
                        marginBottom: 60
                    }}>
                        <Text style = {{
                            color: 'rgb(195,195,195)',
                            fontSize: 12,
                            textAlign: 'center'
                        }}>
                            <Text>DON'T HAVE AN ACCOUNT? </Text>
                            <Text style={{fontWeight: "bold", color: 'rgb(100,100,100)'}} >CREATE ONE</Text>
                        </Text>
                    </View>
                    
                </View>
                
            </View>
            </KeyboardAwareScrollView>
            </View>
        )
      }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(50,50,50)'
  },
  logoContainer: {
    alignItems: 'center',

    marginTop: 50
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30
  },
  inputText: {
    fontSize: 13,
    marginHorizontal: 9,
    color: 'rgb(150,150,150)',
    fontWeight: '600'

  },
  input: {
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 5,
    color: 'gray'
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'white',
    margin: 10,
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 15,
    marginBottom: 18,
    width: SCREEN_WIDTH - 55,
    height: 55,
    borderRadius: 5,
  },
  btnContainer: {
    width: SCREEN_WIDTH - 90,
    height: 45,
    backgroundColor: 'rgba(100,100,100,0.4)',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnText: {
    color: 'rgb(255,255,255)',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center'
  },
  orLoginWith: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Georgia-Italic'
  },
  forgotPass: {
    color: 'rgb(95,95,95)',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
  space: {
    height: 45
  },
  circle: {
    borderWidth: 3,
    borderColor: 'rgb(95,95,95)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    //backgroundColor:'#fff',
    borderRadius: 50,
    marginTop: 15,
    marginHorizontal: 10
  },
  icon: {
    width: 5,
    height: 5,
  },
  altLogin: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  noAccount: {
    color: 'black',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
});
