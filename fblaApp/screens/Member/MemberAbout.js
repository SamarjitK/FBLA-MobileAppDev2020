import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem} from 'native-base'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class MemberAbout extends React.Component {


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
            centerComponent = {
              <Text style={{
                  color: 'white',
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  width: '100%',
                  fontSize: 20,
                  fontWeight: '600',
              }}>ABOUT</Text>
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
            {/* <Text>MEMBER ABOUT</Text>
            <Text>About FBLA</Text>
            <Text onPress={() => this.props.navigation.navigate('AuthDecision')}>Click here to go to login</Text>
            */}
                <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                    <CardItem header bordered>
                        <Text style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: '600',
                            textAlign: 'left',
                            width:'100%',
                    }}>ABOUT FBLA</Text>
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
                            fontSize: 20,
                            fontWeight: '600',
                            textAlign: 'left',
                            width:'100%',
                    }}>ABOUT THIS CHAPTER</Text>
                    </CardItem>
                    <CardItem style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'black' }}>
                          idek if we need this tbh - we can make this editable by admin
                        </Text>
                    </CardItem>
                </Card>
                <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                    <CardItem header bordered>
                        <Text style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: '600',
                            textAlign: 'left',
                            width:'100%',
                    }}>CHAPTER OFFICER TEAM</Text>
                    </CardItem>
                    <CardItem style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'black' }}>
                          Will add stuff here
                        </Text>
                    </CardItem>
                </Card>
        </View>
        </ScrollView>
    </View>
    )
  }
}
