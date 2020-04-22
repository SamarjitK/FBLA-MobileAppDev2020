import React from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, List, ListItem, Body, Accordion, Right, Input, Item, Form, Textarea} from 'native-base'
import styles from '../../constants/Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

export default class MemberAddCalendarEvent extends React.Component {

 
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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AdminCurrentEvents')}>
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
              }}>CREATE NEW EVENT</Text>
            }
        >
        </Header>
        
        <KeyboardAwareScrollView
              scrollEnabled = {true}
              extraHeight = {175}
            >
        
        <View style = {{
            justifyContent: 'center',
            alignItems: 'flex-start',
        }}>  

            <View style = {{backgroundColor: 'white', width: SCREEN_WIDTH, marginTop: 20, borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'rgb(220,220,220)'}}>
                <Text style = {{fontSize:16, fontWeight: '500', color: 'rgb(80,80,80)', marginLeft: 20, marginTop: 15, marginBottom: 10}}>Select Event Type:</Text>

                <View style = {{marginLeft: 30, marginBottom: 10}}>
                    <View style = {{flexDirection: 'row', marginVertical: 10, }}>
                        <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                            <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
                        </TouchableOpacity>
                        <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>Fundraiser</Text>
                    </View>
                    <View style = {{flexDirection: 'row', marginVertical: 10}}>
                        <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                            <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
                        </TouchableOpacity>
                        <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>Community Service</Text>
                    </View>
                </View> 
            </View>  

        <View style = {{backgroundColor: 'white', width: SCREEN_WIDTH, marginTop: 20}}>
            <Item>
            </Item>
            <Item style = {{marginLeft: 15}}>
                <Input placeholder="Event Name" placeholderTextColor = 'rgb(200,200,200)' />
            </Item>
            <Item style = {{marginLeft: 15}}>
                <Input  placeholder="Location" placeholderTextColor = 'rgb(200,200,200)'/>
            </Item>
            <Item >
                <Input style = {{marginLeft: 15}} placeholder="Date" placeholderTextColor = 'rgb(200,200,200)' />
            </Item>
        </View>
        
            
            
        </View>
        

        

        <View style = {{backgroundColor: 'white', width: SCREEN_WIDTH,  borderBottomWidth: 1, borderTopWidth: 1, borderColor: 'rgb(220,220,220)', marginTop: 20}}>
            
                <Textarea style = {{marginLeft: 13, marginTop: 8}} rowSpan={5} placeholder="Description..." fontSize = {18} placeholderTextColor = "rgb(200,200,200)" />
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
                    Create Event
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
        
                
       
        </KeyboardAwareScrollView>
    </View>
    )
  }
}
