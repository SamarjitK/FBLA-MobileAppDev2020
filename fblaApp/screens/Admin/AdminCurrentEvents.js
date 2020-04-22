import React from 'react'
import { View, Dimensions, Text, ScrollView, Linking } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, List, ListItem, Body, Right, Row} from 'native-base';
import TabBarIcon from '../../components/TabBarIcon';
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class AdminCurrentEvents extends React.Component {


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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AdminEvents')}>
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
                  width: '100%',
                  fontSize: 20,
                  fontWeight: '600',
                  marginLeft: 5,
                  marginTop: 35
              }}>CURRENT EVENTS</Text>
            }
            rightComponent = {
                <Button transparent style = {{ marginTop: 35, justifyContent: 'flex-start', alignItems: 'center', marginRight: 10}} onPress={() => this.props.navigation.navigate('AdminAddCurrentEvent')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-add-circle-outline' type='ionicon' size = {26} color='white' />
                </Button>
            }
        >
        </Header>
        <ScrollView
                showsVerticalScrollIndicator={false}
            >
        <View>    
               
                
                <View style = {{alignItems:'center'}}>                             
                    <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start', }}>
                    <CardItem bordered>     
                        <Body>
                            <Text style = {{fontWeight:'600', fontSize: 19, color: 'rgb(75,75,75)', marginVertical: 4 }}>Lunch Bake Sale</Text>
                            <Text style = {{fontWeight:'600', fontSize: 15,  color: 'rgb(75,75,75)' }}>April 22nd, 2020  </Text>
                            <Row style = {{alignItems: 'center', width: 500, marginTop: 5}}>
                                <Text style = {{fontWeight:'600', fontSize: 15, color: 'rgb(125,125,125)' }}>Fundraiser  </Text>
                                <Icon name='circle' type='font-awesome' size = {5} color='rgb(150,150,150)' /> 
                                <Text style = {{fontSize: 15, fontWeight: '600', color: 'rgb(125,125,125)'}}>  Cafeteria</Text>
                            </Row>


                        </Body>
                                                        
                    </CardItem>

                        <CardItem style = {{justifyContent: 'center', alignItems: 'flex-start'}}>        
                            <Text style = {{fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
                        </CardItem>

                        <CardItem footer bordered button onPress={() => this.props.navigation.navigate('AdminCurrentEventSignups')}>
                        <Body style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 17, width: 500, fontWeight: '600', color: 'rgb(75,75,75)'}}>View Signups</Text>
                        </Body>
                        <Right>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                            <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                            </View>
                        </Right>
                        </CardItem>
                    </Card>
                    
                    <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start', }}>
                    <CardItem bordered>     
                        <Body>
                            <Text style = {{fontWeight:'600', fontSize: 19, color: 'rgb(75,75,75)', marginVertical: 4 }}>Lunch Bake Sale</Text>
                            <Text style = {{fontWeight:'600', fontSize: 15,  color: 'rgb(75,75,75)' }}>April 22nd, 2020  </Text>
                            <Row style = {{alignItems: 'center', width: 500, marginTop: 5}}>
                                <Text style = {{fontWeight:'600', fontSize: 15, color: 'rgb(125,125,125)' }}>Fundraiser  </Text>
                                <Icon name='circle' type='font-awesome' size = {5} color='rgb(150,150,150)' /> 
                                <Text style = {{fontSize: 15, fontWeight: '600', color: 'rgb(125,125,125)'}}>  Cafeteria</Text>
                            </Row>


                        </Body>
                                                        
                    </CardItem>

                        <CardItem style = {{justifyContent: 'center', alignItems: 'flex-start'}}>        
                            <Text style = {{fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
                        </CardItem>

                        <CardItem footer bordered button onPress={() => this.props.navigation.navigate('AdminCurrentEventSignups')}>
                        <Body style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 17, width: 500, fontWeight: '600', color: 'rgb(75,75,75)'}}>View Signups</Text>
                        </Body>
                        <Right>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                            <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                            </View>
                        </Right>
                        </CardItem>
                    </Card>
                    
                    <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start', }}>
                    <CardItem bordered>     
                        <Body>
                            <Text style = {{fontWeight:'600', fontSize: 19, color: 'rgb(75,75,75)', marginVertical: 4 }}>Lunch Bake Sale</Text>
                            <Text style = {{fontWeight:'600', fontSize: 15,  color: 'rgb(75,75,75)' }}>April 22nd, 2020  </Text>
                            <Row style = {{alignItems: 'center', width: 500, marginTop: 5}}>
                                <Text style = {{fontWeight:'600', fontSize: 15, color: 'rgb(125,125,125)' }}>Fundraiser  </Text>
                                <Icon name='circle' type='font-awesome' size = {5} color='rgb(150,150,150)' /> 
                                <Text style = {{fontSize: 15, fontWeight: '600', color: 'rgb(125,125,125)'}}>  Cafeteria</Text>
                            </Row>


                        </Body>
                                                        
                    </CardItem>

                        <CardItem style = {{justifyContent: 'center', alignItems: 'flex-start'}}>        
                            <Text style = {{fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
                        </CardItem>

                        <CardItem footer bordered button onPress={() => this.props.navigation.navigate('AdminCurrentEventSignups')}>
                        <Body style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 17, width: 500, fontWeight: '600', color: 'rgb(75,75,75)'}}>View Signups</Text>
                        </Body>
                        <Right>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}} >
                            <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                            </View>
                        </Right>
                        </CardItem>
                    </Card>
                    
                    
                </View>    

                
                
                


                

            
        </View>
        </ScrollView>
    </View>
    )
  }
}
