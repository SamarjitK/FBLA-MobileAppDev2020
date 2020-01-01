import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Dimensions, TextInput, Picker, KeyboardAvoidingView } from 'react-native';
import logo from '../../assets/images/fbla-logo.png';
import { FormInput, FormValidationMessage, SocialIcon, Row, Header, Icon, ButtonGroup, CheckBox } from 'react-native-elements';
import { Form, Item, Input, Label, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Terms extends React.Component {
    
      
      render () {
        return (
            <View>
                <Header
                    outerContainerStyles={{ zIndex: 1, height:90}}
                    backgroundColor='rgb(255,255,255)'
                  innerContainerStyles = {{alignItems: 'center'}}
                  leftComponent ={
                  <Button transparent style = {styles.authBackButton} onPress={() => this.props.navigation.navigate('AuthDecision')}>
                    <Icon style = {{height:25, width:25}} name = 'ios-arrow-back' type='ionicon' color='rgb(80,80,80)' />
                  </Button>
                  }
                  centerComponent = {
                    <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: 37, marginLeft: -40}}>
                        <Text style = {{fontSize: 20, fontWeight: '600', color: 'rgb(80,80,80)'}}>Terms and Conditions</Text>
                    </View>
                  }
                  containerStyle={{
                    justifyContent: 'space-around',
                  }}
                />

                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    style = {{marginBottom: 60}}
                >
                    <Text>Put terms and conditions here</Text>
                </KeyboardAwareScrollView>
            </View>
        )
      }
}
