import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right} from 'native-base';
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class MemberHome extends React.Component {

 
  render() {
    return ( 
    <View style = {{
        flex:1,
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
        backgroundColor: 'rgb(255,255,255)',
    }}>
        <Header
            outerContainerStyles={styles.memberHeader}
            innerContainerStyles = {{alignItems: 'center'}}
            leftComponent ={
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberChangeProfile')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-contact' type='ionicon' size = {30} color='white' />
                </Button>
            } 
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
                    marginLeft: -40,
                    marginTop: 35
                }}>HOME</Text>
              }
        />
        <ScrollView
            showsVerticalScrollIndicator = {true}
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
                    }}>ANNOUNCEMENTS</Text>
                    </CardItem>
                    <CardItem style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'black' }}>
                          FBLA is the high school division of Future Business Leaders of America-Phi Beta Lambda, Inc. FBLA helps high school students prepare for careers in business through academic competitions (FBLA Competitive Events), leadership development, and educational programs.
                          {"\n\n"}
                          FBLA members demonstrate their leadership skills through community service projects, fundraising activities, and chapter officer positions.
                          {"\n\n"}
                          FBLA’s National Awards Program, also called competitive events, give students the opportunity to compete against the best-of-the-best in over 60 academic events that cover technology, public speaking, business, finance, management, and more. The top winners take home trophies and cash from sponsored events.
                        </Text>
                    </CardItem>
                </Card>

                <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                    <CardItem header bordered>
                        <Text style={{
                            color: 'black',
                            fontSize: 17,
                            fontWeight: '600',
                            textAlign: 'left',
                            width:'100%',
                    }}>TODAY'S EVENTS</Text>
                    </CardItem>
                    
                    <CardItem style={{ alignItems: 'center' }}>
                        <Body >
                          <Text style={{ fontSize: 15, marginVertical: 5, alignSelf: 'center', fontWeight: '400', color: 'rgb(100,100,100)' }}>
                            There are no events to show today
                          </Text>
                        </Body>
                        
                    </CardItem>
                </Card>
        </View>
        </ScrollView>
    </View>
    
    )
  }
}
