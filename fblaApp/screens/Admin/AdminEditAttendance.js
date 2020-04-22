import React from 'react'
import { View, Dimensions, Text, ScrollView, Linking, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, List, ListItem, Body, Left, Right, Row} from 'native-base';
import TabBarIcon from '../../components/TabBarIcon';
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class AdminEditAttendance extends React.Component {


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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AdminWeeklyMeetings')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-arrow-back' type='ionicon' color='white' />
                </Button>
            } 
           
        >
        </Header>
        <ScrollView
                showsVerticalScrollIndicator={false}
            >
        <View>    
               
        <Card>
          <CardItem  style = {{ justifyContent: 'center', alignItems: 'center',flexDirection: 'column'}}>
            <Text style = {{fontSize: 22, fontWeight:'600', color: 'rgb(50,50,50)', marginTop: 5}}>April 14, 2020</Text>
            <Text style = {{fontSize: 18, marginVertical: 5,fontWeight:'600', color: 'rgb(105,105,105)'}}>FBLA Meeting Attendance</Text>  

              
          </CardItem>
          <CardItem bordered style = {{ justifyContent: 'center', alignItems: 'flex-start',flexDirection: 'row'}}>
            <Left>
                <Text style = {{fontSize: 18, fontWeight:'600', color: 'rgb(25,25,25)', marginTop: 5}}>Name</Text>
            </Left>
            <Right style = {{flexDirection: 'row', marginLeft: 145}}>
                <Text style = {{fontSize: 18, fontWeight:'600', color: 'rgb(25,25,25)', marginTop: 5}}>Present?</Text>
            </Right>
          </CardItem>

          <CardItem bordered style = {{ justifyContent: 'center', alignItems: 'flex-start',flexDirection: 'row'}}>
            <Left>
                <Text style = {{fontSize: 16, fontWeight:'400', color: 'rgb(50,50,50)', marginTop: 5}}>John Doe</Text>
            </Left>
            <Right style = {{flexDirection: 'row', marginLeft: 75}}>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center", marginRight: 20 }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "white" : "white"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={30} />
                </TouchableOpacity>
            </Right>
          </CardItem>

          <CardItem bordered style = {{ justifyContent: 'center', alignItems: 'flex-start',flexDirection: 'row'}}>
            <Left>
                <Text style = {{fontSize: 16, fontWeight:'400', color: 'rgb(50,50,50)', marginTop: 5}}>John Doe</Text>
            </Left>
            <Right style = {{flexDirection: 'row', marginLeft: 75}}>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center", marginRight: 20 }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "white" : "white"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={30} />
                </TouchableOpacity>
            </Right>
          </CardItem>

          <CardItem bordered style = {{ justifyContent: 'center', alignItems: 'flex-start',flexDirection: 'row'}}>
            <Left>
                <Text style = {{fontSize: 16, fontWeight:'400', color: 'rgb(50,50,50)', marginTop: 5}}>John Doe</Text>
            </Left>
            <Right style = {{flexDirection: 'row', marginLeft: 75}}>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center", marginRight: 20 }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "white" : "white"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={30} />
                </TouchableOpacity>
            </Right>
          </CardItem>

          <CardItem bordered style = {{ justifyContent: 'center', alignItems: 'flex-start',flexDirection: 'row'}}>
            <Left>
                <Text style = {{fontSize: 16, fontWeight:'400', color: 'rgb(50,50,50)', marginTop: 5}}>John Doe</Text>
            </Left>
            <Right style = {{flexDirection: 'row', marginLeft: 75}}>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center", marginRight: 20 }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "white" : "white"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={30} />
                </TouchableOpacity>
            </Right>
          </CardItem>

          <CardItem bordered style = {{ justifyContent: 'center', alignItems: 'flex-start',flexDirection: 'row'}}>
            <Left>
                <Text style = {{fontSize: 16, fontWeight:'400', color: 'rgb(50,50,50)', marginTop: 5}}>John Doe</Text>
            </Left>
            <Right style = {{flexDirection: 'row', marginLeft: 75}}>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center", marginRight: 20 }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "white" : "white"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={30} />
                </TouchableOpacity>
            </Right>
          </CardItem>

          <CardItem bordered style = {{ justifyContent: 'center', alignItems: 'flex-start',flexDirection: 'row'}}>
            <Left>
                <Text style = {{fontSize: 16, fontWeight:'400', color: 'rgb(50,50,50)', marginTop: 5}}>John Doe</Text>
            </Left>
            <Right style = {{flexDirection: 'row', marginLeft: 75}}>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center", marginRight: 20 }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "white" : "white"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={30} />
                </TouchableOpacity>
            </Right>
          </CardItem>

          <CardItem bordered style = {{ justifyContent: 'center', alignItems: 'flex-start',flexDirection: 'row'}}>
            <Left>
                <Text style = {{fontSize: 16, fontWeight:'400', color: 'rgb(50,50,50)', marginTop: 5}}>John Doe</Text>
            </Left>
            <Right style = {{flexDirection: 'row', marginLeft: 75}}>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center", marginRight: 20 }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "white" : "white"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 15, alignItems: "center", justifyContent: "center" }}>
                    <Icon type='record' name={'radio-button-unchecked'} color={'' ? "#808080" : "#000"} size={30} />
                </TouchableOpacity>
            </Right>
          </CardItem>
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
                    Save Attendance
                                      </Text>
                </View>
            </TouchableOpacity>
        </View>        

            
        </View>
        </ScrollView>
    </View>
    )
  }
}
