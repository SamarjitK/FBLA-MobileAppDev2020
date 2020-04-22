import React from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right, Left, Row} from 'native-base'
import styles from '../../constants/Styles';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class MemberEvents extends React.Component {

 
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
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: '600',
                    marginTop: 35
                }}>ADMIN EVENTS</Text>
              }
           
        />
        
        <ScrollView
                showsVerticalScrollIndicator={false}
            >
        <View style = {{
            justifyContent: 'center',
            alignItems: 'center',
        }}>    
                
                <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start', }}>
                    <CardItem header bordered style = {{justifyContent: 'center'}}>
                    <Body>
                    <Text style={{
                            color: 'black',
                            marginTop: 3,
                            fontSize: 17,
                            fontWeight: '600',
                            textAlign: 'left',
                            width:500,
                    }}>COMPETITIVE EVENTS</Text>
                    </Body>
                       
                    </CardItem>

                    

                    <CardItem footer bordered button onPress={() => this.props.navigation.navigate('AdminAllEvents')}>
                      <Body style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 17, width: 300, fontWeight: '600', color: 'rgb(75,75,75)'}}>Competitive Events Breakdown</Text>
                      </Body>
                      <Right>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                        
                          <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                        </View>
                      </Right>
                    </CardItem>
                </Card>

                <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start', }}>
                    <CardItem header bordered style = {{justifyContent: 'center'}}>
                    <Body>
                    <Text style={{
                            color: 'black',
                            marginTop: 3,
                            fontSize: 17,
                            fontWeight: '600',
                            textAlign: 'left',
                            width:500,
                    }}>WEEKLY MEETINGS</Text>
                    </Body>
                       
                    </CardItem>

                    

                    <CardItem footer bordered button onPress={() => this.props.navigation.navigate('AdminWeeklyMeetings')}>
                      <Body style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 17, width: 300, fontWeight: '600', color: 'rgb(75,75,75)'}}>Manage Meetings</Text>
                      </Body>
                      <Right>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                        
                          <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                        </View>
                      </Right>
                    </CardItem>
                </Card>

                <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start', }}>
                    <CardItem header bordered style = {{justifyContent: 'center'}}>
                    <Body>
                    <Text style={{
                            color: 'black',
                            marginTop: 3,
                            fontSize: 17,
                            fontWeight: '600',
                            textAlign: 'left',
                            width:500,
                    }}>CURRENT EVENTS</Text>
                    </Body>
                      
                    </CardItem>

                    <CardItem footer bordered button onPress={() => this.props.navigation.navigate('AdminCurrentEvents')}>
                      <Body style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 17, width: 300, fontWeight: '600', color: 'rgb(75,75,75)'}}>View Current Events</Text>
                      </Body>
                      <Right>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                        
                          <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                        </View>
                      </Right>
                    </CardItem>

                    
                </Card>
                
                
            
        </View>
        </ScrollView>
    </View>
    )
  }
}
