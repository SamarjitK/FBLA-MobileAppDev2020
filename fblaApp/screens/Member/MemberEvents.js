import React from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity, YellowBox } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right, Left, Row} from 'native-base'
import styles from '../../constants/Styles';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])
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
                }}>EVENTS</Text>
              }
            rightComponent = {
                <Button transparent style = {{ marginTop: 35, justifyContent: 'flex-start', alignItems: 'center', marginRight: 10}} onPress={() => this.props.navigation.navigate('MemberAllEvents')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-add-circle-outline' type='ionicon' size = {26} color='white' />
                </Button>
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
                    }}>YOUR COMPETITIVE EVENTS</Text>
                    </Body>
                        <Right style = {{}}>
                            
                            <TouchableOpacity style={{ justifyContent: 'flex-end', marginRight: 5, alignItems: 'flex-end'}} >
                            <Icon name='edit' size = {24} type='fontawesome' color='rgb(150,150,150)' />
                            </TouchableOpacity>
                            
                            
                            
                            
                        </Right>    
                    </CardItem>

                    {/*First event*/}
                    <CardItem bordered>     
                        <Body>
                            <Text style = {{fontWeight:'600', fontSize: 17, color: 'rgb(75,75,75)', marginVertical: 4 }}>Accounting 1 </Text>
                            <Row style = {{alignItems: 'center', width: 500}}>
                                <Text style = {{fontWeight:'600', fontSize: 13, color: 'rgb(125,125,125)' }}>Objective Test  </Text>
                                <Icon name='circle' type='font-awesome' size = {5} color='rgb(150,150,150)' /> 
                                <Text style = {{fontSize: 13, fontWeight: '600', color: 'rgb(125,125,125)'}}>  Individual</Text>
                            </Row>
                        </Body>
                        <Right>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                            <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                            </View>
                            
                        </Right>                                    
                    </CardItem>

                    {/*Second event*/} 
                    <CardItem bordered button onPress={() => this.props.navigation.navigate('MemberMyEventDetails')}>     
                        <Body>
                            <Text style = {{fontWeight:'600', fontSize: 17, width: 500, color: 'rgb(75,75,75)', marginVertical: 4 }}>Digital Video Production</Text>
                            <Row style = {{alignItems: 'center', width: 500}}>
                                <Text style = {{fontWeight:'600', fontSize: 13, color: 'rgb(125,125,125)' }}>Presentation with Equipment  </Text>
                                <Icon name='circle' type='font-awesome' size = {5} color='rgb(150,150,150)' /> 
                                <Text style = {{fontSize: 13, fontWeight: '600', color: 'rgb(125,125,125)'}}>  Team</Text>
                            </Row>
                        </Body>
                        <Right>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                            <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                            </View>
                        </Right>                                    
                    </CardItem>

                    {/*Third event*/}
                    <CardItem bordered>     
                        <Body>
                            <Text style = {{fontWeight:'600', fontSize: 17, width: 500, color: 'rgb(75,75,75)', marginVertical: 4 }}>Public Service Announcement </Text>
                            <Row style = {{alignItems: 'center', width: 500}}>
                                <Text style = {{fontWeight:'600', fontSize: 13, color: 'rgb(125,125,125)' }}>Presentation with Equipment  </Text>
                                <Icon name='circle' type='font-awesome' size = {5} color='rgb(150,150,150)' /> 
                                <Text style = {{fontSize: 13, fontWeight: '600', color: 'rgb(125,125,125)'}}>  Team</Text>
                            </Row>
                        </Body>
                        <Right>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                            <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                            </View>
                        </Right>                                    
                    </CardItem>

                    {/*Fourth event*/}
                    <CardItem bordered>     
                        <Body>
                            <Text style = {{fontWeight:'600', width: 500, fontSize: 17, color: 'rgb(75,75,75)', marginVertical: 4 }}>Mobile Application Development </Text>
                            <Row style = {{alignItems: 'center', width: 500}}>
                                <Text style = {{fontWeight:'600', fontSize: 13, color: 'rgb(125,125,125)' }}>Demonstration  </Text>
                                <Icon name='circle' type='font-awesome' size = {5} color='rgb(150,150,150)' /> 
                                <Text style = {{fontSize: 13, fontWeight: '600', color: 'rgb(125,125,125)'}}>  Team</Text>
                            </Row>
                        </Body>
                        <Right>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                            <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                            </View>
                        </Right>                                    
                    </CardItem>

                    <CardItem footer bordered button onPress={() => this.props.navigation.navigate('MemberAllEvents')}>
                      <Body style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 17, width: 500, fontWeight: '600', color: 'rgb(75,75,75)'}}>View All Competitive Events</Text>
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
                    }}>YOUR CURRENT EVENTS</Text>
                    </Body>
                        <Right style = {{}}>
                            
                            <TouchableOpacity style={{ justifyContent: 'flex-end', marginRight: 5, alignItems: 'flex-end'}} >
                            <Icon name='edit' size = {24} type='fontawesome' color='rgb(150,150,150)' />
                            </TouchableOpacity>
                            
                            
                            
                            
                        </Right>    
                    </CardItem>

                    
                </Card>
                

            
        </View>
        </ScrollView>
    </View>
    )
  }
}
