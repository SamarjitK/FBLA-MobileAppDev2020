import React from 'react'
import { View, Dimensions, Text, Switch, ScrollView, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import { Header, Icon} from 'react-native-elements';
import {Button, Card, CardItem, Body, Right} from 'native-base'
import styles from '../../constants/Styles';

import { FirebaseAuth } from '../../providers/firebase.js';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class MemberSettings extends React.Component {

  handleLogout = () => {
    FirebaseAuth.logout()
    .then(() => this.props.navigation.navigate('AuthLogin') )
    .catch(  error =>
        {alert(error);
        console.log(error);
        });
  }
  onLogOut=()=>{
    Alert.alert(
      //title
      'Logging out?',
      //body
      'Are you sure you want to log out?',
      [
        { text: 'No', style: 'cancel', },
        { text: 'Yes', onPress: () => this.handleLogout(), style: 'cancel' },
        
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
    
  }


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
              }}>SETTINGS</Text>
            }
        />
          <Card>
          <CardItem bordered style = {{ justifyContent: 'center', alignItems: 'center',flexDirection: 'column'}}>
            <Text style = {{fontSize: 24, fontWeight:'600', color: 'rgb(50,50,50)', marginTop: 5}}>Sahil Kancherla</Text>
            <Text style = {{fontSize: 20, fontWeight:'600', color: 'rgb(75,75,75)', marginTop: 5}}>11th Grade</Text>

            <Text style = {{fontSize: 18, marginVertical: 5,fontWeight:'600', color: 'rgb(105,105,105)'}}>Tesla STEM High School - FBLA</Text>  

              
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate('MemberChangeProfile')} >
              <Body style = {{ justifyContent: 'center'}}>
                <Text style = {{fontSize: 15, fontWeight:'600', color: 'rgb(50,50,50)'}}>Change Profile</Text>
              </Body>
              <Right>
              <View style = {{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Icon name = 'ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
              </View>
              </Right>
            </CardItem>
          </Card>

          <Card>
          <CardItem bordered button onPress={() => this.props.navigation.navigate('SettingsQandA')} >
              <Body style = {{ justifyContent: 'center'}}>
                <Text style = {{fontSize: 15, fontWeight:'600', color: 'rgb(50,50,50)'}}>Q and A</Text>
              </Body>
              <Right>
              <View style = {{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Icon name = 'ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
              </View>
              </Right>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate('SettingsQandA')} >
              <Body style = {{ justifyContent: 'center'}}>
                <Text style = {{fontSize: 15, fontWeight:'600', color: 'rgb(50,50,50)'}}>Bug Reporting</Text>
              </Body>
              <Right>
              <View style = {{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Icon name = 'ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
              </View>
              </Right>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate('PlayerOnboarding')} >
              <Body style = {{ justifyContent: 'center'}}>
                <Text style = {{fontSize: 15, fontWeight:'600', color: 'rgb(50,50,50)'}}>Licensing</Text>
              </Body>
              <Right>
              <View style = {{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Icon name = 'ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
              </View>
              </Right>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate('PlayerOnboarding')} >
              <Body style = {{ justifyContent: 'center'}}>
                <Text style = {{fontSize: 15, fontWeight:'600', color: 'rgb(50,50,50)'}}>Terms of Use</Text>
              </Body>
              <Right>
              <View style = {{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Icon name = 'ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
              </View>
              </Right>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate('OnBoardingScreen')} >
              <Body style = {{ justifyContent: 'center'}}>
                <Text style = {{fontSize: 15, fontWeight:'600', color: 'rgb(50,50,50)'}}>Contact Us</Text>
              </Body>
              <Right>
              <View style = {{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Icon name = 'ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
              </View>
              </Right>
            </CardItem>
            <CardItem bordered button onPress={() => this.props.navigation.navigate('AdminTabNavigator')} >
              <Body style = {{ justifyContent: 'center'}}>
                <Text style = {{fontSize: 15, fontWeight:'600', color: 'rgb(50,50,50)'}}>Temp to Admin Tab Navigator</Text>
              </Body>
              <Right>
              <View style = {{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <Icon name = 'ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
              </View>
              </Right>
            </CardItem>
          </Card>
          <View style = {{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() =>this.onLogOut() }>
                <View style = {{
                  width: SCREEN_WIDTH - 120,
                  height: 40,
                  backgroundColor:'rgb(245,245,245)',
                  borderColor: 'rgb(191,47,56)',
                  borderRadius:10,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style = {{
                    color: 'rgb(191,47,56)',
                    fontSize: 15,
                    fontWeight: '600',
                  }}>
                    Log out
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
  }
}