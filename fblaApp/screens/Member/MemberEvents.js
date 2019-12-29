import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem} from 'native-base'
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
            outerContainerStyles={{ zIndex: 1, height:90}}
            backgroundColor='rgb(0,82,155)'
            innerContainerStyles = {{alignItems: 'center'}}
            leftComponent ={
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('AuthDecision')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-contact' type='ionicon' size = {30} color='white' />
                </Button>
            } 
        />
        <View style = {{
            justifyContent: 'center',
            alignItems: 'center',
        }}>    
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                    <CardItem header bordered>
                        <Text style={{
                            color: 'black',
                            fontSize: 13,
                            fontWeight: '400',
                            textAlign: 'left'
                    }}>YOUR EVENTS                                                                   </Text>
                    </CardItem>
                    <CardItem style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'rgb(75,75,75)' }}>Will add stuff here</Text>
                    </CardItem>
                </Card>
                <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                    <CardItem header bordered>
                        <Text style={{
                            color: 'black',
                            fontSize: 13,
                            fontWeight: '400',
                            textAlign: 'left'
                    }}>ALL EVENTS                                                                    </Text>
                    </CardItem>
                    <CardItem style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: 'rgb(75,75,75)' }}>Will add stuff here</Text>
                    </CardItem>
                </Card>

            </ScrollView>
        </View>
    </View>
    )
  }
}
