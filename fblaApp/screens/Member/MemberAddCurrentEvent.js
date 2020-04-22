import React from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, List, ListItem, Body, Accordion, Right, Input, Item, Form, Textarea, Row} from 'native-base'
import styles from '../../constants/Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

export default class MemberAddCurrentEvent extends React.Component {

 
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
            leftComponent ={
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberCurrentEvents')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-arrow-back' type='ionicon' color='white' />
                </Button>
            } 
            centerComponent = {
              <Text style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  justifyContent: 'center',
                 
                  fontSize: 20,
                  fontWeight: '600',
                  marginLeft: -40,
                  marginTop: 36
              }}>ADD EVENT</Text>
            }
        >
        </Header>
        
        <KeyboardAwareScrollView
              scrollEnabled = {true}
              extraHeight = {175}
            >
        <Card>
          
          <CardItem>
            <Body style = {{alignItems: 'center', justifyContent: 'center'}}>
              
              <Text style = {{fontWeight: '600', fontSize:26, alignItems:'center', color: 'rgb(50,50,50)', marginTop: 10}}>Lunch Bake Sale</Text>
              <Text style = {{fontWeight: '500', fontSize:18, alignItems:'center', textAlign: 'center', marginTop:6, color: 'rgb(80,80,80)' , marginBottom: 10}}>April 22nd, 2020</Text>
            </Body>
          </CardItem>
        </Card>
        <View style = {{
            justifyContent: 'center',
            alignItems: 'flex-start',
        }}>    
        <View style = {{backgroundColor: 'white', width: SCREEN_WIDTH, marginTop: 20, borderBottomWidth: 1, borderColor: 'rgb(220,220,220)'}}>
            <Item>
            </Item>
            <Item style = {{marginLeft: 15}}>
              <Text style = {{fontSize: 18, fontWeight: '500', marginVertical: 10, padding:6, color: 'rgb(80,80,80)'}}>Event Type</Text>
              <Right>
                <Text style = {{fontSize: 18, fontWeight: '500', marginRight: 20, color: 'rgb(125,125,125)'}}>  Fundraiser</Text>
              </Right>
            </Item>
            <Item style = {{marginLeft: 15, borderBottomWidth: 0 }}>
              <Text style = {{fontSize: 18, fontWeight: '500', marginVertical: 10, padding:6, color: 'rgb(80,80,80)'}}>Location</Text>
              <Right>
                <Text style = {{fontSize: 18, fontWeight: '500', marginRight: 20, color: 'rgb(125,125,125)'}}>  Cafeteria</Text>
              </Right>
            </Item>
        </View>
        
        </View>

        <View style = {{backgroundColor: 'white', width: SCREEN_WIDTH,  marginTop: 20, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'rgb(220,220,220)' }}>
          <Text style = {{marginLeft: 21, fontSize: 18, fontWeight: '500', marginTop: 15, color: 'rgb(80,80,80)'}}>Description</Text>

          <Text style = {{margin: 21, marginTop: 8, fontSize: 16, color: 'rgb(105,105,105)'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
        </View>

        <View style = {{alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity>
                <View style = {{
                  width: SCREEN_WIDTH - 120,
                  height: 40,
                  borderColor: 'rgb(24,134,45)',
                  borderRadius:10,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 25,
                }}>
                  <Text style = {{
                    color: 'rgb(24,134,45)',
                    fontSize: 15,
                    fontWeight: '600',
                  }}>
                    Confirm Event
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
        
                
       
        </KeyboardAwareScrollView>
    </View>
    )
  }
}
