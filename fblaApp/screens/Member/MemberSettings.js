import React from 'react'
import { View, Dimensions, Text, Switch, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, Icon} from 'react-native-elements';
import {Button, Card, CardItem, Body, Right} from 'native-base'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class MemberSettings extends React.Component {

 
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
          <CardItem bordered button onPress={() => this.props.navigation.navigate('PlayerOnboarding')} >
              <Body style = {{ justifyContent: 'center'}}>
                <Text style = {{fontSize: 15, fontWeight:'600', color: 'rgb(50,50,50)'}}>Q and A</Text>
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
            <CardItem bordered button onPress={() => this.props.navigation.navigate('PlayerOnboarding')} >
              <Body style = {{ justifyContent: 'center'}}>
                <Text style = {{fontSize: 15, fontWeight:'600', color: 'rgb(50,50,50)'}}>Contact Us</Text>
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthLogin')}>
                <View style = {{
                  width: SCREEN_WIDTH - 120,
                  height: 40,
                  backgroundColor:'rgb(255,255,255)',
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
