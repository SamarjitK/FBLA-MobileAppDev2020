import React from 'react'
import { View, Dimensions, Text, ScrollView, Linking } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right} from 'native-base';
import TabBarIcon from '../../components/TabBarIcon';
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class AdminWeeklyMeetings extends React.Component {


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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AdminEventDetails')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-arrow-back' type='ionicon' color='white' />
                </Button>
            } 
           
        >
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
        
        <Card>
                    <CardItem footer bordered>
                      <Body style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                      <Text style = {{fontSize: 18,textAlign: 'left', fontWeight: '400', color: 'rgb(105,105,105)'}}>Total Signups: <Text style = {{color: 'rgb(50,50,50)', fontWeight: '600'}}>2</Text></Text>
                      </Body>
                      
                    </CardItem>    

          <CardItem bordered>
            <Body style = {{alignItems:'center'}}>
              <Text style = {{fontWeight: '500', fontSize:26, alignItems:'center', color: 'rgb(10,10,10)', marginTop: 15}}>Business Financial Plan</Text>
              <Text style = {{fontWeight: '500', fontSize:16, alignItems:'center', textAlign: 'center', marginTop:6, color: 'rgb(80,80,80)', marginBottom:15 }}>Category - Prejudged Projects and Presentation</Text>
            </Body>
          </CardItem>
          <CardItem bordered style = {{marginTop: 12, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style = {{fontSize:17, marginBottom: 10, fontWeight: '500', color: 'rgb(50,50,50)', alignSelf: 'flex-start'}}>Team 1</Text>

            <Text style = {{fontSize:15, marginBottom: 10, fontWeight: '500', color: 'rgb(80,80,80)'}}>Team</Text>
            
              <Text style = {{fontSize: 14, marginBottom: 5, textAlign: 'left', color: 'rgb(105,105,105)'}}>1) Sahil Kancherla</Text>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>2) Samarjit Kaushik</Text>
              <Text style = {{fontSize:15, marginBottom: 10, fontWeight: '500', color: 'rgb(80,80,80)'}}>Notes:</Text>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

            
          </CardItem>
          <CardItem bordered style = {{marginTop: 12, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style = {{fontSize:17, marginBottom: 10, fontWeight: '500', color: 'rgb(50,50,50)', alignSelf: 'flex-start'}}>Team 2</Text>

            <Text style = {{fontSize:15, marginBottom: 10, fontWeight: '500', color: 'rgb(80,80,80)'}}>Individual</Text>
            
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>1) Sahil Kancherla</Text>
              <Text style = {{fontSize:15, marginBottom: 10, fontWeight: '500', color: 'rgb(80,80,80)'}}>Notes:</Text>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>None</Text>
            
          </CardItem>
          </Card>
        </ScrollView>
    </View>
    )
  }
}
