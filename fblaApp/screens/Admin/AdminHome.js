import React from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right, Row} from 'native-base';
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
                }}>ADMIN HOME</Text>
              }
              rightComponent = {
                <Button transparent style = {{ marginTop: 35, justifyContent: 'flex-start', alignItems: 'center', marginRight: 10}} onPress={() => this.props.navigation.navigate('AdminCreateAnnouncement')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-add-circle-outline' type='ionicon' size = {26} color='white' />
                </Button>
            }
        />
        {/*}
        <View style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 20,
           
            backgroundColor: 'rgb(235,235,235)'
        }}>
            <Text style = {{fontSize: 18,textAlign: 'left', fontWeight: '600', color: 'rgb(75,75,75)'}}>Tesla STEM High School</Text>

        </View>  
    */}
        <ScrollView
            showsVerticalScrollIndicator = {false}
            
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
                    }}>ACTIVE ANNOUNCEMENTS</Text>
                    </CardItem>
                    {/*First announcement*/}
                    <CardItem bordered>     
                        <Body>
                            <Text style = {{fontWeight:'600', fontSize: 17, color: 'rgb(75,75,75)', marginVertical: 4 }}>February 17th, 2020</Text>
                            <Row style = {{alignItems: 'center', width: 500, marginTop: 5}}>
                                <Text style = {{fontWeight:'600', fontSize: 16, color: 'rgb(242,58,58)' }}>Immediate Action Required  </Text>
                                <Icon name='circle' type='font-awesome' size = {5} color='rgb(150,150,150)' /> 
                                <Text style = {{fontSize: 16, fontWeight: '600', color: 'rgb(125,125,125)'}}>  All Members</Text>
                            </Row>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: '400', color: 'black' }}>
                            FBLA is the high school division of Future Business Leaders of America-Phi Beta Lambda, Inc. FBLA helps high school students prepare for careers in business through academic competitions (FBLA Competitive Events), leadership development, and educational programs.
                            {"\n\n"}
                            FBLA members demonstrate their leadership skills through community service projects, fundraising activities, and chapter officer positions.
                            {"\n\n"}
                            FBLA’s National Awards Program, also called competitive events, give students the opportunity to compete against the best-of-the-best in over 60 academic events that cover technology, public speaking, business, finance, management, and more. The top winners take home trophies and cash from sponsored events.
                            </Text>
                            <Row style = {{alignItems: 'center', width: 500, marginTop: 20}}>
                                <TouchableOpacity>
                                <Text style = {{fontWeight:'600', fontSize: 18, color: 'rgb(120,120,120)' }}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {{marginLeft: 270}}>
                                <Icon name='trash' type='font-awesome' size = {25} color='rgb(150,150,150)'  /> 
                                </TouchableOpacity>
                            </Row>
                        </Body>  
                    </CardItem>

                    {/*First announcement*/}
                    <CardItem bordered>     
                        <Body>
                            <Text style = {{fontWeight:'600', fontSize: 17, color: 'rgb(75,75,75)', marginVertical: 4 }}>January 3rd, 2020</Text>
                            <Row style = {{alignItems: 'center', width: 500, marginTop: 5}}>
                                <Text style = {{fontWeight:'600', fontSize: 16, color: 'rgb(253,184,19)' }}>Important  </Text>
                                <Icon name='circle' type='font-awesome' size = {5} color='rgb(150,150,150)' /> 
                                <Text style = {{fontSize: 16, fontWeight: '600', color: 'rgb(125,125,125)'}}>  All Members</Text>
                            </Row>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: '400', color: 'black' }}>
                            FBLA is the high school division of Future Business Leaders of America-Phi Beta Lambda, Inc. FBLA helps high school students prepare for careers in business through academic competitions (FBLA Competitive Events), leadership development, and educational programs.
                            {"\n\n"}
                            FBLA members demonstrate their leadership skills through community service projects, fundraising activities, and chapter officer positions.
                            {"\n\n"}
                            FBLA’s National Awards Program, also called competitive events, give students the opportunity to compete against the best-of-the-best in over 60 academic events that cover technology, public speaking, business, finance, management, and more. The top winners take home trophies and cash from sponsored events.
                            </Text>
                            <Row style = {{alignItems: 'center', width: 500, marginTop: 20}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AdminEditAnnouncement')}>
                                <Text style = {{fontWeight:'600', fontSize: 18, color: 'rgb(120,120,120)' }}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {{marginLeft: 270}}>
                                <Icon name='trash' type='font-awesome' size = {25} color='rgb(150,150,150)'  /> 
                                </TouchableOpacity>
                            </Row>
                        </Body>  
                    </CardItem>

                </Card>

                
        </View>
        </ScrollView>
    </View>
    
    )
  }
}
