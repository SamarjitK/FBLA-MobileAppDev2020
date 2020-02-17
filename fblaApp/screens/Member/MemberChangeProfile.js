import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon, FormInput, FormValidationMessage, } from 'react-native-elements';
import {Button, Card, CardItem} from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class MemberChangeProfile extends React.Component {

 
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
            

            <View style = {{marginBottom: 100}}>
                <Header
                outerContainerStyles={styles.memberHeader}
                innerContainerStyles = {{alignItems: 'center'}}
                leftComponent ={
                <Button transparent style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberHome')}>
                    <Icon style = {{height:25, width:25}} name = 'ios-arrow-back' type='ionicon' color='white' />
                    

                </Button>
                } 
                leftComponent ={
                    <Button transparent style = {styles.authBackButton} onPress={() => this.props.navigation.navigate('MemberHome')}>
                      <Icon style = {{height:25, width:25}} name = 'ios-arrow-back' type='ionicon' color='white' />
                    </Button>
                }
                centerComponent = {
                    <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: 37, marginLeft: -35}}>
                        <Text style = {{fontSize: 20, fontWeight: '700', color: 'white'}}>Edit Profile</Text>
                    </View>      
                }
                rightComponent ={
                  <Button transparent style = {{ justifyContent: 'center', alignItems: 'center', marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberHome')}>
                      <Text style = {{fontSize:18, color:'white', fontWeight: '500'}}>Save</Text>
                  </Button>
                  } 
                
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                extraHeight = {100}
                
            >
                
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
                        }}>   CHAPTER NAME
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
                        }}>   OLD PASSWORD
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
                        }}>   NEW PASSWORD
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
                        }}>   CONFIRM NEW PASSWORD
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
                
                
                <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                
                </View>
                </KeyboardAwareScrollView>
                </View>
        )
      }
}
