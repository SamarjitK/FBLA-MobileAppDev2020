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
        backgroundColor: 'rgb(245,245,245)',
    }}>
        <Header
            outerContainerStyles={styles.memberHeader}
            innerContainerStyles = {{alignItems: 'center'}}
            leftComponent ={
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.goBack()}>
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
              }}>ABOUT FBLA</Text>
            }
        >
        </Header>
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
                <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgb(75,75,75)' }}>
                    Develop competent, aggressive business leadership.
                    {"\n"}Strengthen the confidence of students in themselves and their work.
                    {"\n"}Create more interest in and understanding of American business enterprise.
                    {"\n"}Encourage members in the development of individual projects that contribute to the improvement of home, business, and community.
                    {"\n"}Develop character, prepare for useful citizenship, and foster patriotism.
                    {"\n"}Encourage and practice efficient money management.
                    {"\n"}Encourage scholarship and promote school loyalty.
                    {"\n"}Assist students in the establishment of occupational goals.
                    {"\n"}Facilitate the transition from school to work.

                    </Text>
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
                <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgb(75,75,75)' }}>
                FBLA-PBL organizes conferences for members and advisers. These programs are designed to help members develop their business leadership, networking, career development, and social skills.

                {"\n"}{"\n"}<Text style={{ fontSize: 15, fontWeight: '600', color: 'rgb(50,50,50)' }}>National Leadership Conference (NLC)</Text>
                {"\n"}Packed with workshops and exhibits, the four-day National Leadership Conference is considered the pinnacle of the FBLA and PBL experience. FBLA-PBL has forged partnerships with industry leaders to underwrite competitive events and scholarships for students that achieve national ranking.

                {"\n"}{"\n"}<Text style={{ fontSize: 15, fontWeight: '600', color: 'rgb(50,50,50)' }}>Institute for Leaders (IFL)</Text>
                {"\n"}Held in conjunction with the National Leadership Conference, the Institute for Leaders is a high-energy, intensive, two-day seminar focuses on leadership development that gives young adults an edge in the career marketplace.

                {"\n"}{"\n"}<Text style={{ fontSize: 15, fontWeight: '600', color: 'rgb(50,50,50)' }}>PBL Career Connections Conference</Text>
                {"\n"}October 24-26
                {"\n"}New York City
                {"\n"}New York Marriott East Side

                {"\n"}{"\n"}<Text style={{ fontSize: 15, fontWeight: '600', color: 'rgb(50,50,50)' }}>FBLA National Fall Leadership Conference (NFLC)</Text>
                {"\n"}Each fall, new leaders and advisers from chapters across the nation gather for FBLA National Fall Leadership Conferences designed to foster leadership skills and team-building. The conferences include workshops, seminars, exhibits, and general sessions, as well as ample networking and social events.

                    </Text>
                
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
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'rgb(75,75,75)' }}>
                    FBLA-PBL is funded by membership dues, conference fees, corporate contributions, and grants. FBLA-PBL is recognized by the Association for Career and Technical Education, International Assembly for Collegiate Business Education, National Association of Parliamentarians, National Association of Secondary School Principals, National Business Education Association, and the U.S. Department of Education.
                    </Text>
                </CardItem>
            </Card>
            
            
        </View>
        </ScrollView>
    </View>
    )
  }
}
