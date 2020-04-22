import React from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, List, ListItem, Body, Accordion, Right, Input, Item, Form, Textarea} from 'native-base'
import styles from '../../constants/Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import * as ImagePicker from 'expo-image-picker';
import profilepic from '../../assets/images/profilepic.png'




const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



export default class AdminAddMeetings extends React.Component {

    constructor () {
        super();
        this.image = (<Image source={profilepic} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />);
      }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
    
        console.log(result);
    
        
    };

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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AdminChapterOfficers')}>
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
              }}>ADD OFFICER</Text>
            }
        >
        </Header>
        
        <KeyboardAwareScrollView
              scrollEnabled = {false}
              extraHeight = {175}
            >
        <View style = {{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style = {{
                justifyContent: 'center',
                alignItems: 'center',
                //backgroundColor: 'white',
                
                width: 250,
                height: 210
            }}>    
                <TouchableOpacity style={{alignSelf: 'center', backgroundColor: '#ccc',  }} onPress={() => { this._pickImage() }} >
                    {this.image}
                </TouchableOpacity>
                
            </View>
        </View>

        <View style = {{
            justifyContent: 'center',
            alignItems: 'flex-start',
        }}>    
        <View style = {{backgroundColor: 'white', width: SCREEN_WIDTH, marginTop: 10}}>
            <Item>
            </Item>
            <Item style = {{marginLeft: 15}}>
                <Input placeholder="Full Name" placeholderTextColor = 'rgb(200,200,200)' />
            </Item>
            <Item style = {{marginLeft: 15}}>
                <Input  placeholder="Position" placeholderTextColor = 'rgb(200,200,200)'/>
            </Item>
            <Item >
                <Input style = {{marginLeft: 15}} placeholder="Email" placeholderTextColor = 'rgb(200,200,200)' />
            </Item>
        </View>
        
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
                    Add Officer
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
        
                
       
        </KeyboardAwareScrollView>
    </View>
    )
  }
}
