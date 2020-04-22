import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem} from 'native-base';
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class SettingsQandA extends React.Component {


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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberSettings')}>
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
                  marginTop: 35
              }}>Q & A</Text>
            }
        >
        </Header>
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
                        fontSize: 20,
                        fontWeight: '600',
                        textAlign: 'left'
                }}>This is the first question.                                                                   </Text>
                </CardItem>
                <CardItem style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgb(75,75,75)' }}> this is the first answer, I have no idea what to put</Text>
                </CardItem>
            </Card>
            <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                <CardItem header bordered>
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: '600',
                        textAlign: 'left'
                }}>Like what sort of questions should these be?                                                                                  </Text>
                </CardItem>
                <CardItem style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgb(75,75,75)' }}>
                    I'd imagine its things that people are confused about relating to the app</Text>
                </CardItem>
            </Card>
            <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                <CardItem header bordered>
                    <Text style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: '600',
                        textAlign: 'left'
                }}>Should we talk about how to use the app, or general information about it?                                                                                </Text>
                </CardItem>
                <CardItem style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgb(75,75,75)' }}>
                    Maybe like how to make a new account, stuff like that idk.</Text>
                </CardItem>
            </Card>


        </View>
        </ScrollView>
    </View>
    )
  }
}
