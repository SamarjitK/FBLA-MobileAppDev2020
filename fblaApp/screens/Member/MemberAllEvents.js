import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, List, ListItem, Body, Accordion, Right} from 'native-base'
import styles from '../../constants/Styles';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



export default class MemberAllEvents extends React.Component {

 
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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberEvents')}>
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
              }}>COMPETITIVE EVENTS</Text>
            }
        >
        </Header>
        
        <ScrollView
                showsVerticalScrollIndicator={false}
            >
        {/*
        <View style = {{
            justifyContent: 'center',
            alignItems: 'center',
        }}>    
              <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                    <CardItem header bordered>
                        <Text style={{
                            color: 'black',
                            fontSize: 13,
                            fontWeight: '400',
                            textAlign: 'left'
                    }}>ALL EVENTS                                                                    </Text>
                    </CardItem>

                    <CardItem style = {{width: '100%'}}>
                        
                    </CardItem>
                </Card>
        </View>
                */}
        <View style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginVertical: 5,
            
        }}>
            <Text style = {{fontSize: 18,textAlign: 'left', fontWeight: '400', color: 'rgb(105,105,105)'}}>Available Events: <Text style = {{color: 'rgb(50,50,50)', fontWeight: '600'}}>71</Text></Text>

        </View>
        <View style = {{backgroundColor: 'white'}}>
        <List>
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>#</Text>
                            </ListItem>                    
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>3-D Animation</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>A</Text>
                            </ListItem>                    
                            <ListItem button onPress={() => this.props.navigation.navigate('MemberEventDetails')}>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Accounting 1</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Accounting 2</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Advertising</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Agribusiness</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>American Enterprise Project</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>B</Text>
                            </ListItem>  
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Banking and Financial Systems</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>

                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Broadcast Journalism</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Business Calculations</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Business Communication</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Business Ethics</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Business Financial Plan</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Business Law</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Business Plan</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>C</Text>
                            </ListItem>  
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Client Service</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Coding and Programming</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Community Service Project</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Computer Applications</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Computer Game & Simulation Programming</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Computer Problem Solving</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Cyber Security</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>D</Text>
                            </ListItem>  
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Database Design & Applications</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem button onPress={() => this.props.navigation.navigate('MemberEventDVP')}>
                                <Body style={{ justifyContent: 'center' }} >
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Digital Video Production</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>E</Text>
                            </ListItem>  
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>E-business</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Economics</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Electronic Career Portfolio</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Emerging Business Isues</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Entrepreneurship</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>F</Text>
                            </ListItem>  
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Future Business Leader</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>G</Text>
                            </ListItem>  
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Global Business</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Graphic Design</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>H</Text>
                            </ListItem>  
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Health Care Administration</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Help Desk</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Hospitality Management</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                            <ListItem itemDivider style = {{backgroundColor: 'rgb(230,230,230)'}}>
                                <Text>I</Text>
                            </ListItem>  
                            <ListItem>
                                <Body style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'rgb(50,50,50)' }}>Impromptu Speaking</Text>
                                </Body>
                                <Right>
                                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} >
                                        <Icon name='ios-arrow-forward' type='ionicon' color='rgb(200,200,200)' />
                                    </View>
                                </Right>
                            </ListItem>
                        </List>
        </View>
        </ScrollView>
    </View>
    )
  }
}
