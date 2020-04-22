import React from 'react'
import { View, Dimensions, Text, Linking, ScrollView, TouchableOpacity, Loader } from 'react-native'
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

export default class MemberAddCompEvent extends React.Component {

    openLink=(value)=>{	
        if(value !== undefined && value !=="" && value !== null){	
            Linking.openURL(value);	
        }	
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
            leftComponent ={
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberEventDVP')}>
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
              }}>ADD COMPETITIVE EVENT</Text>
            }
        >
        </Header>
        
        <KeyboardAwareScrollView
              
              extraHeight = {175}
              showsVerticalScrollIndicator = {false}
            >
        
        <Card>
          <CardItem bordered>
            <Body style = {{alignItems:'center'}}>
              <Text style = {{fontWeight: '500', fontSize:26, alignItems:'center', color: 'rgb(10,10,10)', marginTop: 15}}>Digital Video Production</Text>
              <Text style = {{fontWeight: '500', fontSize:16, alignItems:'center', textAlign: 'center', marginTop:6, color: 'rgb(80,80,80)', marginBottom:15 }}>Category - Prejudged Projects and Presentation</Text>
            </Body>
          </CardItem>
          
          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:16, fontWeight: '500', color: 'rgb(80,80,80)'}}>Step 1 - Select 'Team' or 'Individual'</Text>
          </CardItem>

          <CardItem bordered style = {{}}>
            <Body style = {{marginLeft: 10}}>
            <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-checked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>Team</Text>
            </View>

            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>Individual</Text>
            </View>
            
            </Body>
          </CardItem>
          <CardItem style = {{marginTop: 12, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style = {{fontSize:16, fontWeight: '500', color: 'rgb(80,80,80)'}}>Step 2 - Enter Team Members</Text>
            <Text style = {{fontSize: 14, marginTop: 5, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>If you are working individually, leave the following blanks empty and move on to Step 4.</Text>

          </CardItem>
          <CardItem style = {{flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(105,105,105)'}}>Team Member 1</Text>
            <Item style = {{}}>
                <Input placeholder="Team Member 1 - First Name" placeholderTextColor = 'rgb(200,200,200)' style = {{borderTopColor: 'black'}} />
            </Item>
            <Item style = {{}}>
                <Input placeholder="Team Member 1 - Last Name" placeholderTextColor = 'rgb(200,200,200)' style = {{borderTopColor: 'black'}} />
            </Item>
          </CardItem>
          <CardItem bordered style = {{flexDirection: 'column', alignItems: 'flex-start', }}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(105,105,105)'}}>Team Member 2</Text>

            <Item style = {{}}>
                <Input placeholder="Team Member 2 - First Name" placeholderTextColor = 'rgb(200,200,200)' style = {{borderTopColor: 'black'}} />
            </Item>
            <Item style = {{marginBottom: 10}}>
                <Input placeholder="Team Member 2 - Last Name" placeholderTextColor = 'rgb(200,200,200)' style = {{borderTopColor: 'black'}} />
            </Item>
          </CardItem>
          <CardItem bordered style = {{marginTop: 12, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style = {{fontSize:16, fontWeight: '500', color: 'rgb(80,80,80)'}}>Step 3 - Check Information</Text>
            <Text style = {{fontSize: 14, marginTop: 5, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>If you are working individually, you may ignore this. However, if you are working in a team, make sure that your team members' names are spelled properly. Ensure that ONLY ONE team member fills out this form.</Text>

          </CardItem>
          <CardItem bordered style = {{marginTop: 12, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style = {{fontSize:16, fontWeight: '500', color: 'rgb(80,80,80)'}}>Step 4 - Additional Notes</Text>
            <Text style = {{fontSize: 14, marginTop: 5, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>Is there anything else you would like your chapter officers to know about your addition of this event? </Text>

          </CardItem>
          <Textarea bordered style = {{borderTopColor: 'white', borderLeftColor: 'white', borderRightColor: 'white',borderBottomColor: 'rgb(225,225,225)', marginTop: 8}} rowSpan={5} placeholder="Notes..." fontSize = {18} placeholderTextColor = "rgb(200,200,200)" />

          <CardItem bordered style = {{marginTop: 12, flexDirection: 'column'}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)', alignSelf: 'flex-start'}}>Note - This event is PREJUDGED, which means that some/all aspects of your submission may be due prior to the conference. See the FBLA Website for more information.</Text>
            <View style={{ marginTop:12, marginBottom: 8, flexDirection: 'row' }}>
              <Text style = {{fontSize: 16, fontWeight: '600', textAlign: 'left', color: 'rgb(0,82,155)'}} onPress={ ()=>{ this.openLink('https://www.fbla-pbl.org/competitive-event/digital-video-production/')}}>FBLA Website  </Text>
              <Icon name='ios-arrow-forward' type='ionicon' color={'rgb(0,82,155)'} size={20} />
            </View>
          </CardItem>
        </Card>

        <View style = {{alignItems: 'center', marginTop: 10}}>
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
