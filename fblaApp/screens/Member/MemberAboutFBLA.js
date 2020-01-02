import React from 'react'
import { View, Dimensions, Text, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem} from 'native-base';
import styles from '../../constants/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class MemberAboutFBLA extends React.Component {


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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberAbout')}>
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
              }}>ABOUT FBLA</Text>
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
                        fontSize: 13,
                        fontWeight: '400',
                        textAlign: 'left'
                }}>MISSION STATEMENT                                                                      </Text>
                </CardItem>
                <CardItem style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgb(75,75,75)' }}>FBLA inspires and prepares students to become community-minded business leaders in a global society through relevant career preparation and leadership experiences.</Text>
                </CardItem>
            </Card>
            <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                <CardItem header bordered>
                    <Text style={{
                        color: 'black',
                        fontSize: 13,
                        fontWeight: '400',
                        textAlign: 'left'
                }}>FOCUS                                                                                  </Text>
                </CardItem>
                <CardItem style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgb(75,75,75)' }}>
                    Leadership Development — members develop essential soft skills by holding chapter officer positions at the local, state, and national levels; by networking with accomplished business professionals; and by participating in business-focused workshops, seminars, and academic competitions.
                    {"\n\n"}
                    Academic Competitions — members demonstrate their business expertise at high-profile regional, state, and national competitive events. The top students are recognized with trophies and cash awards. 
                    {"\n\n"}
                    Educational Programs — members create career portfolios, enhance their knowledge with world-recognized skills certifications, and have access to select college scholarships. 
                    {"\n\n"}
                    Membership Benefits — members receive exclusive discounts and enhanced benefits for travel, education, and more. 
                    {"\n\n"}
                    Community Service — members work with the March of Dimes to help end premature births by participating in awareness campaigns and the March for Babies fundraiser. 
                    {"\n\n"}
                    Awards & Recognition — members build a portfolio of accomplishments with a wide range of awards programs.</Text>
                </CardItem>
            </Card>
            <Card style={{ width: SCREEN_WIDTH - 20, alignItems: 'flex-start'}}>
                <CardItem header bordered>
                    <Text style={{
                        color: 'black',
                        fontSize: 13,
                        fontWeight: '400',
                        textAlign: 'left'
                }}>GOALS                                                                                  </Text>
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
                }}>CONFERENCES                                                                                  </Text>
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
                }}>FUNDING & ENDORSEMENTS                                                                                  </Text>
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
                }}>SOCIAL MEDIA                                                                                  </Text>
                </CardItem>
                <CardItem style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '600', color: 'rgb(75,75,75)' }}>Will add stuff here</Text>
                </CardItem>
            </Card>
            
        </View>
        </ScrollView>
    </View>
    )
  }
}
