import React from 'react'
import { View, Dimensions, Text, ScrollView, Image, Linking } from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right} from 'native-base';
import TabBarIcon from '../../components/TabBarIcon';
import officer from '../../assets/images/tempofficer.jpg';
import styles from '../../constants/Styles';

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
                  marginLeft: -38,
                  marginTop: 35
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
                <Card style={{width: 155}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly' }}>
                        {this.image}
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>John Doe</Text>
                        <Text style={styles.officersPosition}>National President</Text>
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                <Card style={{width: 155}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly' }}>
                        {this.image}
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>John Doe</Text>
                        <Text style={styles.officersPosition}>National Secretary</Text>
                    </CardItem>
                </Card>
            </View>
            
            <View style = {{
                flexDirection: 'row'
            }}>
                <Card style={{width: 155}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly' }}>
                        {this.image}
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>John Doe</Text>
                        <Text style={styles.officersPosition}>National Treasurer</Text>
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                <Card style={{width: 155}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly' }}>
                        {this.image}
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>John Doe</Text>
                        <Text style={styles.officersPosition}>National Parliamentarian</Text>
                    </CardItem>
                </Card>
            </View>

            <View style = {{
                flexDirection: 'row'
            }}>
                <Card style={{width: 155}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly' }}>
                        {this.image}
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>John Doe</Text>
                        <Text style={styles.officersPosition}>Eastern Region Vice President</Text>
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                <Card style={{width: 155}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly' }}>
                        {this.image}
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>John Doe</Text>
                        <Text style={styles.officersPosition}>Mountain Plains Region Vice President</Text>
                    </CardItem>
                </Card>
            </View>

            <View style = {{
                flexDirection: 'row'
            }}>
                <Card style={{width: 155}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly' }}>
                        {this.image}
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>John Doe</Text>
                        <Text style={styles.officersPosition}>North Central Region Vice President</Text>
                    </CardItem>
                </Card>

                <View style = {{width: 15}}></View>

                <Card style={{width: 155}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly' }}>
                        {this.image}
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>John Doe</Text>
                        <Text style={styles.officersPosition}>Southern Region Vice President</Text>
                    </CardItem>
                </Card>
            </View>
            <View style = {{
                flexDirection: 'row'
            }}>
                <Card style={{width: 155}}>
                    <CardItem bordered style={{justifyContent: 'space-evenly' }}>
                        {this.image}
                    </CardItem>
                    <CardItem footer style = {{justifyContent: 'flex-start', flexDirection: 'column'}}>
                        <Text style={styles.officersName}>John Doe</Text>
                        <Text style={styles.officersPosition}>Western Region Vice President</Text>
                    </CardItem>
                </Card>

                
            </View>
            
        </View>
        </ScrollView>
    </View>
    )
  }
}
