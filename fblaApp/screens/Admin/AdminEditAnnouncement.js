import React from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, List, ListItem, Body, Accordion, Right, Input, Item, Form, Textarea} from 'native-base'
import styles from '../../constants/Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



export default class AdminEditAnnouncement extends React.Component {

 
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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AdminHome')}>
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
                 
                  fontSize: 18,
                  fontWeight: '600',
                  marginLeft: -40,
                  marginTop: 36
              }}>EDIT ANNOUNCEMENT</Text>
            }
        >
        </Header>
        
        <KeyboardAwareScrollView
              
              extraHeight = {175}
              showsVerticalScrollIndicator = {false}
            >
        
        <Card>
          
          
          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:16, fontWeight: '500', color: 'rgb(80,80,80)'}}>Edit Recipients</Text>
          </CardItem>

          <CardItem bordered style = {{}}>
            <Body style = {{marginLeft: 10}}>
            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>9th Grade Members</Text>
            </View>

            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>10th Grade Members</Text>
            </View>

            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>11th Grade Members</Text>
            </View>

            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>12th Grade Members</Text>
            </View>

            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>Chapter Officers</Text>
            </View>

            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>All Members</Text>
            </View>
            
            </Body>
          </CardItem>

          <CardItem style = {{marginTop: 12, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style = {{fontSize:16, fontWeight: '500', color: 'rgb(80,80,80)'}}>Edit Announcement Urgency</Text>
          </CardItem>

          <CardItem bordered style = {{}}>
            <Body style = {{marginLeft: 10}}>
            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>FYI <Text style = {{color: 'rgb(150,150,150)'}}>(Green)</Text></Text>
            </View>
            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>Important <Text style = {{color: 'rgb(150,150,150)'}}>(Yellow)</Text></Text>
            </View>

            <View style = {{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={25} />
            </TouchableOpacity>
            <Text style = {{fontSize: 18,textAlign: 'left', color: 'rgb(50,50,50)'}}>Immediate Action Required <Text style = {{color: 'rgb(150,150,150)'}}>(Red)</Text></Text>
            </View>
            
            </Body>
          </CardItem>

          <CardItem bordered style = {{marginTop: 12, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style = {{fontSize:16, marginBottom: 12, fontWeight: '500', color: 'rgb(80,80,80)'}}>Edit Announcement</Text>

          </CardItem>
            <Textarea bordered style = {{borderTopColor: 'white', borderLeftColor: 'white', borderRightColor: 'white',borderBottomColor: 'rgb(225,225,225)', marginTop: 8}} rowSpan={8} placeholder="Write announcement here..." fontSize = {18} placeholderTextColor = "rgb(200,200,200)" />

          
        </Card>
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
                    Save Announcement
                                      </Text>
                </View>
            </TouchableOpacity>
        </View>
        
                
       
        </KeyboardAwareScrollView>
    </View>
    )
  }
}
