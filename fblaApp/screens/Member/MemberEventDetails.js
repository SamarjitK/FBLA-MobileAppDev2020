import React from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity} from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right, Left, Accordion, Content} from 'native-base'
import styles from '../../constants/Styles';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const dataArray = [
    { title: "Presentation without Equipment", content: "Lorem ipsum dolor sit amet" },
    { title: "General Performance/Demonstration", content: "Lorem ipsum dolor sit amet" },
    { title: "General", content: "Lorem ipsum dolor sit amet" }
  ];
  
export default class MemberEventDetails extends React.Component {

 /*
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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberAllEvents')}>
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
              }}>ACCOUNTING 1</Text>
            }
        >
        </Header>
        
        <ScrollView
                showsVerticalScrollIndicator={false}
            >
        <View style = {{
            justifyContent: 'center',
            alignItems: 'center',
        }}>    
            

            <TouchableOpacity>
                <View style = {{
                  width: SCREEN_WIDTH - 120,
                  height: 40,
                  borderColor: 'rgb(24,134,45)',
                  borderRadius:10,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text style = {{
                    color: 'rgb(24,134,45)',
                    fontSize: 15,
                    fontWeight: '600',
                  }}>
                    Add Event
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
    )
  }
*/
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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.navigate('MemberAllEvents')}>
                    <Icon style = {{height:30, width:30}} name = 'ios-arrow-back' type='ionicon' color='white' />
                </Button>
            } 
        >
        </Header>
        

      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          <CardItem bordered>
            <Body style = {{alignItems:'center'}}>
              <Text style = {{fontWeight: '500', fontSize:28, alignItems:'center', color: 'rgb(10,10,10)', marginTop: 15}}>Accounting 1</Text>
              <Text style = {{fontWeight: '500', fontSize:16, alignItems:'center', marginTop:6, color: 'rgb(80,80,80)', marginBottom:15 }}>Category - Objective Test</Text>
            </Body>
          </CardItem>
        
          <CardItem bordered>
            <Body>
              <View style = {{flexDirection: 'row'}}>
                <View style = {{flex:1, alignItems: 'center'}}>
                  <Icon name='ios-checkmark-circle-outline' type='ionicon' color = 'rgb(175,175,175)'/>
                </View>
                
                <View style = {{flex:1, alignItems: 'center'}}>
                  <Icon name='ios-information-circle-outline' type='ionicon'  color = 'rgb(175,175,175)'/>                
                </View>
              </View>
              <View style = {{flexDirection: 'row', marginTop: 3}}>
                <View style = {{flex:1, alignItems: 'center'}}>
                  <Text style = {{fontWeight: '600', color:'rgb(175,175,175)'}}>Regional Event</Text>
                </View>
                <View style = {{flex:1, alignItems: 'center'}}>
                  <Text style = {{fontWeight: '600', color:'rgb(175,175,175)'}}>Individual</Text>
                </View>
              </View>
            </Body>
          </CardItem>
          
          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)'}}>Overview</Text>
          </CardItem>
          <CardItem bordered style = {{}}>
            <Body>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>60-minute test administered during the National Leadership Conference (NLC). Participants must not have had more than two (2) semesters or one (1) semester equivalent to a full year in block scheduling in high school accounting instruction.
Objective Test Competencies: Journalizing; Account Classification; Terminology, Concepts, and Practices; Types of Ownership; Posting; Income Statement; Balance Sheet; Worksheet; Bank Reconciliation; Payroll; Depreciation; Manual and Computerized Systems; Ethics 
Skills: The accurate keeping of financial records is an ongoing activity in all types of businesses. This event provides recognition for FBLA members who have an understanding of and skill in basic accounting principles and procedures.</Text>
            </Body>
          </CardItem>
         
          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)'}}>Guidelines</Text>
          </CardItem>
          <CardItem bordered style = {{}}>
            <Body>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>No materials may be brought to the testing site.
Electronic devices must be turned off and out of sight.
No calculators may be brought into the testing site; calculators will be provided.
Bring a writing instrument.</Text>
            </Body>
          </CardItem>

          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)'}}>Finals</Text>
          </CardItem>
          <CardItem bordered style = {{}}>
            <Body>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>N/A</Text>
            </Body>
          </CardItem>

          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)'}}>Timeline</Text>
          </CardItem>
          <CardItem bordered style = {{}}>
            <Body>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>N/A</Text>
            </Body>
          </CardItem>
          
          

          <CardItem bordered >
            <Body style = {{alignItems: 'center'}}>
            <Content>
                <Accordion dataArray={dataArray} style = {{width: SCREEN_WIDTH-50}} headerStyle = {{backgroundColor: 'rgb(245,245,245)'}}contentStyle = {{marginBottom: 5}}/>
            </Content>
            </Body>
          </CardItem>
          
        </Card>

        

        <View style = {{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity>
                <View style = {{
                  width: SCREEN_WIDTH - 120,
                  height: 40,
                  borderColor: 'rgb(24,134,45)',
                  borderRadius:10,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 25,
                }}>
                  <Text style = {{
                    color: 'rgb(24,134,45)',
                    fontSize: 15,
                    fontWeight: '600',
                  }}>
                    Add Event
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  
  );
    }
}
