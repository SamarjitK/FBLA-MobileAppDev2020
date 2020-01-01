import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button} from 'native-base'
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
            outerContainerStyles={{ zIndex: 1, height:90}}
            backgroundColor='rgb(0,82,155)'
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
                    marginTop: 35
                }}>HOME</Text>
              }
        />
        <View style = {{
            justifyContent: 'center',
            alignItems: 'center',
        }}>    
            <Text> MEMBER HOME</Text>
            <Text onPress={() => this.props.navigation.navigate('AuthDecision')}>Click here to go to login</Text>
        </View>
    </View>
    )
  }
}
