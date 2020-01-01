import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem} from 'native-base'
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class MemberChangeProfile extends React.Component {

 
  render() {
    return ( 
    <View style = {{
        flex:1,
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
        backgroundColor: 'rgb(255,255,255)',
    }}>
        <Header
            outerContainerStyles={{ zIndex: 1, height:90}}
            backgroundColor='rgb(0,82,155)'
            innerContainerStyles = {{alignItems: 'center'}}
            leftComponent ={
                <Button transparent style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberHome')}>
                    <Icon style = {{height:25, width:25}} name = 'ios-arrow-back' type='ionicon' color='white' />
                    <Text style = {{fontSize:18, color:'white', fontWeight: '600'}}>  Cancel</Text>
                </Button>
            } 
            rightComponent ={
                <Button transparent style = {{ justifyContent: 'center', alignItems: 'center', marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberHome')}>
                    <Text style = {{fontSize:18, color:'white', fontWeight: '600'}}>Save</Text>
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
                <Card style={{ width: SCREEN_WIDTH-20, alignItems: 'flex-start'}}>
                    <CardItem header bordered>
                        <Text style={{
                            color: 'rgb(125,125,125)',
                            fontSize: 11,
                            fontWeight: '700',
                            textAlign: 'left'
                    }}>YOUR EVENTS                                                                                   </Text>
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
