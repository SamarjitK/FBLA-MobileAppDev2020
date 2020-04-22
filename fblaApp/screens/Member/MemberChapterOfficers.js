import React from 'react'
import { View, Dimensions, Text, ScrollView, Image, Linking, TouchableOpacity} from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right, Row} from 'native-base';
import TabBarIcon from '../../components/TabBarIcon';

import hs1 from '../../assets/images/highschool1.jpg';
import hs2 from '../../assets/images/highschool2.jpg';
import hs3 from '../../assets/images/highschool3.jpg';
import hs4 from '../../assets/images/highschool4.jpg';

import styles from '../../constants/Styles';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class MemberChapterOfficers extends React.Component {

   

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
              }}>CHAPTER OFFICERS</Text>
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
                    <Image source={hs1} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Thomas Crane</Text>
                        <Text style={styles.officersPosition}>President</Text>
                        <Text style={styles.officersEmail}>tcrane@gmail.com</Text>
                   
                       
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={hs4} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Miranda Cox</Text>
                        <Text style={styles.officersPosition}>Vice President</Text>
                        <Text style={styles.officersEmail}>mcox@gmail.com</Text>
                    
                        
                    </CardItem>
                </Card>
            </View>
            
            <View style = {{
                flexDirection: 'row'
            }}>
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={hs2} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Bradyn Kramer</Text>
                        <Text style={styles.officersPosition}>Secretary</Text>
                        <Text style={styles.officersEmail}>bk04@gmail.com</Text>
                    
                        
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                
                <Card style={{width: 150}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly', width: 149, height: 150 }}>
                    <Image source={hs3} style={{
          width: 150,
          height: 150,
          resizeMode: 'contain'
        }} />
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>Pierre Lewis</Text>
                        <Text style={styles.officersPosition}>Treasurer</Text>
                        <Text style={styles.officersEmail}>pierre3@gmail.com</Text>
                    
                       
                    </CardItem>
                </Card>
            </View>

            
            
            
            
                                
                                    
            
        </View>
        </ScrollView>
    </View>
    )
  }
}
