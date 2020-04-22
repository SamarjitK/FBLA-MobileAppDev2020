import React from 'react'
import { View, Dimensions, Text, ScrollView, Image, Linking } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right} from 'native-base';
import TabBarIcon from '../../components/TabBarIcon';
import officer from '../../assets/images/highschool1.jpg';
import styles from '../../constants/Styles';

import north from '../../assets/images/north.jpg'
import south from '../../assets/images/south.jpg'
import mountain from '../../assets/images/mountain.jpg'
import parli from '../../assets/images/parli.jpg'
import prez from '../../assets/images/prez.jpg'
import west from '../../assets/images/west.jpg'
import east from '../../assets/images/east.jpg'
import treasurer from '../../assets/images/treasurer.jpg'
import secretary from '../../assets/images/secretary.jpg'


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class MemberOfficers extends React.Component {

    constructor () {
        super();
        this.image = (<Image source={officer} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />);
      }
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
                  marginTop: 36
              }}>NATIONAL OFFICERS</Text>
            }
        >
        </Header>
        <ScrollView
            showsVerticalScrollIndicator = {false}
        >
        <View style = {{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15
        }}>
            <View style = {{
                flexDirection: 'row'
            }}>
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={prez} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Travis Johnson</Text>
                        <Text style={styles.officersPosition}>National President</Text>
                        <Text style={styles.officersEmail}>fblapres@fbla.org</Text>
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={secretary} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Margo Boyd</Text>
                        <Text style={styles.officersPosition}>National Secretary</Text>
                        <Text style={styles.officersEmail}>fblasec@fbla.org</Text>
                    </CardItem>
                </Card>
            </View>
            
            <View style = {{
                flexDirection: 'row'
            }}>
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={treasurer} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Vivian Clarke</Text>
                        <Text style={styles.officersPosition}>National Treasurer</Text>
                        <Text style={styles.officersEmail}>fblatres@fbla.org</Text>
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={parli} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Elizabeth Howell</Text>
                        <Text style={styles.officersPosition}>National Parliamentarian</Text>
                        <Text style={styles.officersEmail}>fblaparl@fbla.org</Text>
                    </CardItem>
                </Card>
            </View>

            <View style = {{
                flexDirection: 'row'
            }}>
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={east} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Drew Lojewski</Text>
                        <Text style={styles.officersPosition}>Eastern Region VP</Text>
                        <Text style={styles.officersEmail}>fblaervp@fbla.org</Text>
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={mountain} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Drake Vorderstrasse</Text>
                        <Text style={styles.officersPosition}>Mountain Plains Region VP</Text>
                        <Text style={styles.officersEmail}>fblampvp@fbla.org</Text>
                    </CardItem>
                </Card>
            </View>

            <View style = {{
                flexDirection: 'row'
            }}>
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={north} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Ben Morrison</Text>
                        <Text style={styles.officersPosition}>North Central Region VP</Text>
                        <Text style={styles.officersEmail}>fblancvp@fbla.org</Text>
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={south} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Ethan Ghozali</Text>
                        <Text style={styles.officersPosition}>Southern Region VP</Text>
                        <Text style={styles.officersEmail}>fblasrvp@fbla.org</Text>
                    </CardItem>
                </Card>
            </View>
            <View style = {{
                flexDirection: 'row'
            }}>
                
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={west} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Haneol (John) Lee</Text>
                        <Text style={styles.officersPosition}>Western Region VP</Text>
                        <Text style={styles.officersEmail}>fblawrvp@fbla.org</Text>
                    </CardItem>
                </Card>

                
            </View>
            
        </View>
        </ScrollView>
    </View>
    )
  }
}
