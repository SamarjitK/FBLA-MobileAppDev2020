import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Dimensions, TextInput, Picker, KeyboardAvoidingView } from 'react-native';
import logo from '../../assets/images/fbla-logo.png';
import { FormInput, FormValidationMessage, SocialIcon, Row, Header, Icon, ButtonGroup, CheckBox } from 'react-native-elements';
import { Form, Item, Input, Label, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class AuthSignUp extends React.Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      
      render () {
        const buttons = ['Member', 'Admin']
        const { selectedIndex } = this.state
      
        return (
            

            <View>
                <Header
                    outerContainerStyles={{ zIndex: 1, height:90}}
                    backgroundColor='rgb(255,255,255)'
                  innerContainerStyles = {{alignItems: 'center'}}
                  leftComponent ={
                  <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AuthDecision')}>
                    <Icon style = {{height:25, width:25}} name = 'ios-arrow-back' type='ionicon' color='black' />
                  </Button>
                  }
                  centerComponent = {
                    <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: 33, marginLeft: -40}}>
                        <Text style = {{fontSize: 25, fontWeight: '700', color: 'rgb(80,80,80)'}}>Join FBLA</Text>
                    </View>
                    
                  }
                  /*
                  centerComponent = {
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        innerContainerStyles = {{padding: 10}}
                        containerStyle={{height: 40, width: 140, marginTop: 40, marginLeft: -35}}
                    />
                    
                  }
                  */
                  containerStyle={{
                    justifyContent: 'space-around',
                  }}
                />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                style = {{marginBottom: 60}}
            >
                <View style={{
                    alignItems: 'center', marginTop: 10, flexDirection: 'row',
                }}>
                    <View style = {{flex: 1, marginLeft: 20}}>
                        <TouchableOpacity>
                            <SocialIcon
                                title='Facebook'
                                style={{ width: SCREEN_WIDTH - 220, borderRadius: 5, height: 50}}
                                button
                                type='facebook'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style = {{flex: 1, marginRight: 20}}>
                        <TouchableOpacity>
                            <SocialIcon
                            title='Google'
                            style={{ width: SCREEN_WIDTH - 220, borderColor: 'rgb(125,125,125)', height:50, borderRadius: 5, backgroundColor: 'rgb(220,220,220)' }}
                            button
                            type='google'
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20
                }}>
                    
                    <View style = {{flex:1, alignItems: 'center', justifyContent: 'center', marginLeft: 20}}>
                        <Text style = {{color: 'rgb(235,235,235)', marginTop: -10}}>_________________  </Text>
                    </View>
                    <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style = {{fontSize: 17, fontWeight: '600', color: 'rgb(90,90,90)'}}>or sign up</Text>
                    </View>
                    <View style = {{flex:1, alignItems: 'center', justifyContent: 'center', marginRight: 20}}>
                        <Text style = {{color: 'rgb(235,235,235)', marginTop: -10}}>  _________________</Text>
                    </View>
                </View>

                <View style = {{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginLeft: 20,
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontSize: 20,
                        marginHorizontal: 9,
                        color: 'rgb(20,20,20)',
                        fontWeight: '700',
                        
                        marginBottom: 10,
                        marginLeft: 19
                    }}>GENERAL
                    </Text>
                    <View style={{
                        marginBottom: 30,
                        width: SCREEN_WIDTH - 55,
                        height: 55,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontSize: 15,
                            marginHorizontal: 9,
                            color: 'rgb(60,60,60)',
                            fontWeight: '600'
                        }}>   FIRST NAME
                        </Text>


                        <FormInput
                            style={{
                                fontSize: 16,
                                marginHorizontal: 10,
                                marginTop: 5,
                                color: 'gray'
                            }}
                            placeholder={''}
                            placeholderTextColor={'gray'}

                        />
                        <FormValidationMessage></FormValidationMessage>
                    </View>

                    <View style={{
                        marginBottom: 30,
                        width: SCREEN_WIDTH - 55,
                        height: 55,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontSize: 15,
                            marginHorizontal: 9,
                            color: 'rgb(60,60,60)',
                            fontWeight: '600'
                        }}>   LAST NAME
                        </Text>


                        <FormInput
                            style={{
                                fontSize: 16,
                                marginHorizontal: 10,
                                marginTop: 5,
                                color: 'gray'
                            }}
                            placeholder={''}
                            placeholderTextColor={'gray'}

                        />
                        <FormValidationMessage></FormValidationMessage>
                    </View>

                    <View style={{
                        marginBottom: 30,
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
                            placeholder={''}
                            placeholderTextColor={'gray'}

                        />
                        <FormValidationMessage></FormValidationMessage>
                    </View>

                    <View style={{
                        marginBottom: 30,
                        width: SCREEN_WIDTH - 55,
                        height: 55,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontSize: 15,
                            marginHorizontal: 9,
                            color: 'rgb(60,60,60)',
                            fontWeight: '600'
                        }}>   GRADE
                        </Text>
                        <FormInput
                            style={{
                                fontSize: 16,
                                marginHorizontal: 10,
                                marginTop: 5,
                                color: 'gray'
                            }}
                            placeholder={''}
                            placeholderTextColor={'gray'}

                        />
                        <FormValidationMessage></FormValidationMessage>
                    </View> 

                    <View style={{
                        marginBottom: 30,
                        width: SCREEN_WIDTH - 55,
                        height: 55,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontSize: 15,
                            marginHorizontal: 9,
                            color: 'rgb(60,60,60)',
                            fontWeight: '600'
                        }}>   T-SHIRT SIZE
                        </Text>


                        <FormInput
                            style={{
                                fontSize: 16,
                                marginHorizontal: 10,
                                marginTop: 5,
                                color: 'gray'
                            }}
                            placeholder={''}
                            placeholderTextColor={'gray'}

                        />
                        <FormValidationMessage></FormValidationMessage>
                    </View>
                    <Text style={{
                        fontSize: 20,
                        marginHorizontal: 9,
                        color: 'rgb(20,20,20)',
                        fontWeight: '700',
                        marginTop: 20,
                        marginBottom: 10,
                        marginLeft: 19
                    }}>PASSWORD
                    </Text>
                    <View style={{
                        marginBottom: 60,
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
                        <Text style={{
                            fontSize: 13,
                            marginTop: 5,
                            marginHorizontal: 9,
                            color: 'rgb(150,150,150)',
                            fontWeight: '400',
                            textAlign: 'left'
                        }}>   
                        
                        <Text>   Must include a symbol or number and have at</Text>
                        {"\n"}
                        <Text>   least 8 characters</Text>
                        </Text>

                        <FormInput
                            style={{
                                fontSize: 16,
                                marginHorizontal: 10,
                                marginTop: 5,
                                color: 'gray'
                            }}
                            placeholder={''}
                            placeholderTextColor={'gray'}
                            secureTextEntry={true}
                        />
                        <FormValidationMessage></FormValidationMessage>
                    </View>

                    <View style={{
                        marginBottom: 20,
                        width: SCREEN_WIDTH - 55,
                        height: 55,
                        borderRadius: 5,
                    }}>
                        <Text style={{
                            fontSize: 15,
                            marginHorizontal: 9,
                            color: 'rgb(60,60,60)',
                            fontWeight: '600'
                        }}>   CONFIRM PASSWORD
                        </Text>


                        <FormInput
                            style={{
                                fontSize: 16,
                                marginHorizontal: 10,
                                marginTop: 5,
                                color: 'gray'
                            }}
                            placeholder={''}
                            placeholderTextColor={'gray'}
                            secureTextEntry={true}
                        />
                        <FormValidationMessage></FormValidationMessage>
                    </View>
                </View>
                <View style = {{marginHorizontal: 30, alignItems: 'center', justifyContent:'center'}}>
                    <CheckBox
                        title='I have read over and agree to the Terms and Conditions'
                        checked={this.state.checked}
                    />
                </View>
                
                <View style = {{alignItems: 'center', justifyContent: 'center'}}>
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
                    Sign up </Text>
                </TouchableOpacity>
                </View>
                <View style = {{
                    alignSelf: 'center',
                    justifyContent: 'center',
                    width: SCREEN_WIDTH - 80,
                    marginTop: 40,
                    marginBottom: 60
                }}>
                        <Text style = {{
                            color: 'rgb(195,195,195)',
                            fontSize: 12,
                            textAlign: 'center'
                        }}>ARE YOU LOOKING TO MANAGE A CHAPTER? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthSignUpAdmin')}>
                            <Text style={{fontWeight: "bold", color: 'rgb(100,100,100)', marginTop: 5, textAlign: 'center', fontSize: 14}} >CREATE YOUR ACCOUNT</Text>
                        </TouchableOpacity>
                </View>
                </KeyboardAwareScrollView>
                </View>
        )
      }
}
