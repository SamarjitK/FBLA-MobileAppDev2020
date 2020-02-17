import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right, Left} from 'native-base'
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
            
                <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                    <CardItem header bordered>
                    <Text style={{
                            color: 'black',
                            fontSize: 17,
                            fontWeight: '600',
                            textAlign: 'left',
                            width:'100%',
                    }}>YOUR EVENTS                                                                   </Text>
                    </CardItem>
                    <CardItem style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'rgb(75,75,75)' }}>Will add stuff here</Text>
                    </CardItem>
                    <CardItem footer bordered button onPress={() => this.props.navigation.navigate('MemberAllEvents')}>
                      <Body style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 17, width: 500, fontWeight: '600', color: 'rgb(50,50,50)'}}>View All Competitive Events</Text>
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
