import React from 'react'
import { View, Dimensions, Text, Linking, ScrollView, TouchableOpacity} from 'react-native'
import { Header, Icon } from 'react-native-elements';
import {Button, Card, CardItem, Body, Right, Left, Accordion, Content} from 'native-base'
import styles from '../../constants/Styles';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const dataArray = [
    { title: "Prejudged Projects & Presentation", 
    
    content: 
    <Text style = {{fontSize: 12}}>
    <Text style = {{fontWeight: 'bold'}}>Project Guidelines</Text>
    {"\n"}• Competitors must prepare projects. Advisers and others are not permitted to help.
    {"\n"}• The state chair/adviser must submit all Statements of Assurance and projects electronically by 11:59 p.m. Eastern Time on the second Friday in May.
    {"\n"}• Competitors are expected to follow all applicable copyright laws. Refer to the Format Guide for copyright guidelines.
    {"\n"}• Project content is prejudged before the NLC. The presentation of a project is judged at the NLC.
    {"\n"}• Competitors are responsible for ensuring their project can be shown to judges.
    {"\n"}• Any photographs, texts, trademarks, or names used must be supported by proper documentation and approvals indicated on the site or project.
    {"\n"}• When applicable, the use of templates must be identified.
    {"\n"}• Projects submitted for competition become the property of FBLA‑PBL. These projects may be used for publication and/or reproduced for sale by the national association.
    {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Performance Guidelines</Text>
    {"\n"}• Presentation of the entry must be conducted by competitors who authored the event.
    {"\n"}• Visual aids related to the project may be used; however, no items may be left with the judges or audience.
    {"\n"}• Final performances may be open to conference attendees, space permitting. Finalists may not view other competitors’ performances in their event.
    {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Technology Guidelines</Text>
    {"\n"}• Five (5) minutes will be allowed to set up and remove equipment or presentation items.
    {"\n"}• The following will be provided for the final round of technology presentation events: screen, power, table, and projector. It is up to the final round competitors if they wish to use the provided technology.
    {"\n"}• See the Technology Guidelines under General Performance Event Guidelines for additional guidelines.
    {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Penalty Points Deducted by Judges</Text>
    {"\n"}• Five (5) points are deducted if competitors do not follow the dress code.
    {"\n"}• Five (5) points may be deducted for presentations over the allotted time.
    {"\n"}• Five (5) points may be deducted for not following guidelines.    
    </Text>},

    { title: "General Performance/Demonstration", 
    content:
    <Text style = {{fontSize: 12}}>
      <Text style = {{fontWeight: 'bold'}}>Performance Guidelines</Text>
      {"\n"}• Fifteen (15) competitors/teams—or an equal number from each section in the preliminary round—will advance to the final round. When there are more than five preliminary sections for an event, two competitors/ teams from each section will advance to the final round.

      {"\n"}• In the case of team events, all team competitors are expected to actively participate in the performance/demonstration.

      {"\n"}• Competitors cannot be replaced or substituted for prejudged events with the exception of the chapter events—American Enterprise Project, Community Service Project, Local Chapter Annual Business Report, and Partnership with Business Project.

      {"\n"}• All competitors must comply with the FBLA‑PBL dress code.

      {"\n"}• Prejudged materials and résumés will not be returned.

      {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Technology Guidelines</Text>
      {"\n"}• The following will be provided for the final round of technology presentation/demonstration events that allow viewing: screen, power, table, and projector. It is up to final round competitors to decide if they wish to use the provided technology.
      {"\n"}• Competitors utilizing Apple products or other devices that do not have a VGA port or HDMI will need to provide their own adapters.
      {"\n"}• Internet access will be provided for this event.
      {"\n"}• Internet access may not be WiFi, so competitors should plan appropriately when selecting laptops/tablets on which to present.
      {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Performance Competencies</Text>
      {"\n"}• Demonstrate excellent verbal communication.
      {"\n"}• Display effective decision-making and problem-solving skills.
      {"\n"}• Express self-confidence and poise.
      {"\n"}• Work well as a team when applicable. 
      {"\n"}• Exhibit logic and systematic understanding.
      {"\n"}• Conduct a professional business presentation.
      {"\n"}• Answer questions effectively (when applicable).
      {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Penalty Points Deducted by Judges</Text>
      {"\n"}• Five (5) points are deducted if competitors do not follow the dress code.
      {"\n"}• Five (5) points may be deducted for presentations over the allotted time.
      {"\n"}• Five (5) points may be deducted for not following guidelines.
      {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Audience</Text>
      {"\n"}• Preliminary performances/demonstrations are not open to conference attendees.
      {"\n"}• Final performances/demonstrations may be open to conference attendees, space permitting (with the exception of interview and prep/case events). Finalists may not view other competitors’ performances/demonstrations in their event.
      {"\n"}• Recording performances/demonstrations is prohibited.
      {"\n"}• All electronic devices must be turned off.
      {"\n"}• All attendees must follow the dress code and wear their name badges.
    </Text>
     },
    { title: "General", content: 
    <Text style = {{fontSize: 12}}>
      The general event guidelines below are applicable to all national competitive events. Please review and follow these guidelines when competing at the national level. When competing at the state level, check the state guidelines since they may differ.

      {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Eligibility</Text>
      {"\n"}• Dues: Competitors must have paid FBLA national and state dues by 11:59 p.m. Eastern Time on April 1 of the current school year.
      {"\n"}• NLC Registration: Participants must be registered for the NLC and pay the national conference registration fee in order to participate in competitive events.
      {"\n"}• Deadlines: The state chair, or designee, must register each state competitor on the official online entry forms by 11:59 p.m. Eastern Time on the second Friday in May.
      {"\n"}• Each state may submit four (4) entries in all events except LifeSmarts, Virtual Business Finance Challenge, and Virtual Business Management Challenge.
      {"\n"}• Each competitor can only compete in one (1) individual/ team event and one (1) chapter event.
      {"\n"}• Each competitor must compete in all parts of an event for award eligibility.
      {"\n"}• A team shall consist of two or three members. Exceptions are Parliamentary Procedure which must be a team of four or five members, and LifeSmarts which must be a team of two members.
        All members of a team must consist of individuals from the same chapter.
        {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Repeat Competitors</Text>
        {"\n"}Competitors are not permitted to compete in an event more than once at the NLC unless one of the following circumstances applies:

        {"\n"}{"\n"}• Modified Events: A competitor may compete in the same event when the event is modified. Note, if the only modification is a name change, competitors may not compete in the renamed event.
        {"\n"}• Team Events: One (1) competitor of the team may have competed in the same event at one (1) previous NLC; however, they may not compete more than twice in the event at the national level.
        {"\n"}• Chapter Events: Competitors may compete in a chapter event more than once (American Enterprise Project, Community Service Project, and Partnership with Business Project).
        {"\n"}• Individual Entry: A competitor who competed as an individual entry in a team event at the national level may compete in the same event a second time as part of a team, but not a second time as an individual.
        {"\n"}• Parliamentary Procedure: Two (2) competitors of the team may have competed in this event at a previous NLC; however, they may not compete more than twice at the national level.
        {"\n"}• Pilot Event: Competition in a pilot event does not disqualify a competitor from competing in the same event if it becomes an official competitive event. The participant may compete in another event as well as a pilot event.
        {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Breaking Ties</Text>
        {"\n"}• Objective Tests: Ties are broken by comparing the correct number of answers to the last 10 questions on the exam. If a tie remains, the competitor who completed the test in a shorter amount of time will place higher. If this does not break the tie, answers to the last 20 questions will be reviewed and determine the winner.
        {"\n"}• Objective and Production Tests: The production test scores will be used to break a tie.
        {"\n"}• Objective Tests and Performances: The objective test score will be used to break a tie based on the tie-breaking criteria of objective tests.
        {"\n"}• Reports/Projects and Performances: The report/project scores will be used to break a tie.
        {"\n"}• Performances: Judges must break ties and all judges’ decisions are final.
        {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>National Deadlines</Text>
        {"\n"}• State chair/adviser must register all competitors for NLC competitive events online by 11:59 p.m. Eastern Time on the second Friday in May.
        {"\n"}• All prejudged components (report PDFs, resume/letter of application PDFs, and project URLs) must be received by 11:59 p.m. Eastern Time on the second Friday in May.
        {"\n"}• All URLs and PDFs for prejudged projects and reports will be submitted by the state adviser via the competitive events registration form.
        {"\n"}• All production tests must be received at FBLA-PBL by 11:59 p.m. Eastern Time on the third Friday in May.
        {"\n"}• All production tests must be uploaded online.
        {"\n"}• State chair/adviser may make name changes only (no additional entries) by 11:59 p.m. Eastern Time on the first Friday in June. Competitor drops are the only changes allowed after this date and onsite.
        {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>National Awards</Text>
        The number of competitors will determine the number of winners. The maximum number of winners for each competitive event is 10. Only one (1) award is given to the schools competing in chapter events (American Enterprise Project, Community Service Project, Local Chapter Annual Business Report, and Partnership with Business Project).

        {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Additional Materials</Text>
        {"\n"}Certain events may allow the use of additional materials. Please refer to event guidelines.

        {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Americans with Disabilities Act (ADA)</Text>
        {"\n"}FBLA‑PBL meets the criteria specified in the Americans with Disabilities Act for all participants who submit a special needs form.

        {"\n"}{"\n"}<Text style = {{fontWeight: 'bold'}}>Recording of Presentations</Text>
        {"\n"}No unauthorized audio or video recording devices will be allowed in any competitive event. Participants in the performance events should be aware the national association reserves the right to record any performance for use in study or training materials.  
    </Text>
  }
  ];
  
export default class MemberMyEventDetails extends React.Component {

  openLink=(value)=>{	
    if(value !== undefined && value !=="" && value !== null){	
        Linking.openURL(value);	
    }	
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
                <Button transparent style = {{ justifyContent: 'flex-start', alignItems: 'center', width:55, marginLeft: 10, marginTop: 40}} onPress={() => this.props.navigation.goBack()}>
                    <Icon style = {{height:30, width:30}} name = 'ios-arrow-back' type='ionicon' color='white' />
                </Button>
            } 
        >
        </Header>
        

      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          
          <CardItem bordered>
            <Body style = {{alignItems:'center'}}>
              <Text style = {{fontWeight: '500', fontSize:26, alignItems:'center', color: 'rgb(10,10,10)', marginTop: 15}}>Digital Video Production</Text>
              <Text style = {{fontWeight: '500', fontSize:16, alignItems:'center', textAlign: 'center', marginTop:6, color: 'rgb(80,80,80)', marginBottom:15 }}>Category - Prejudged Projects and Presentation</Text>
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
                  <Text style = {{fontWeight: '600', color:'rgb(175,175,175)'}}>Individual or Team</Text>
                </View>
              </View>
            </Body>
          </CardItem>
          
         

          <CardItem bordered style = {{marginTop: 12, flexDirection: 'column', alignItems: 'flex-start'}}>
            <Text style = {{fontSize:17, marginBottom: 10, fontWeight: '500', color: 'rgb(50,50,50)', textAlign: 'center', alignSelf: 'center'}}>You are competing in this event with a TEAM.</Text>

            <Text style = {{fontSize:15, marginBottom: 10, fontWeight: '500', color: 'rgb(80,80,80)'}}>Team Members</Text>
            
              <Text style = {{fontSize: 14, marginBottom: 5, textAlign: 'left', color: 'rgb(105,105,105)'}}>1) Sahil Kancherla</Text>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>2) Samarjit Kaushik</Text>
              <Text style = {{fontSize: 14, marginBottom: 12, textAlign: 'left', color: 'rgb(150,150,150)'}}>If any of the above information is incorrect, please notify your chapter advisor immediately.</Text>

            
          </CardItem>


          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)'}}>Overview</Text>
          </CardItem>
          <CardItem bordered style = {{}}>
            <Body>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>
                Two (2) parts: a prejudged project and a presentation. Competitors must complete both parts for award eligibility.
          {"\n"}{"\n"}Topic: Create a video promoting a new discount airline. The airline serves the states surrounding the one in which you live. The video should promote the new airline, include a theme/slogan, share information about flight schedules, and describe the frequent flyer program.
          {"\n"}{"\n"}Skills: This event provides recognition to FBLA members who demonstrate the ability to create an effective video to present an idea to a specific audience.

</Text>
            </Body>
          </CardItem>
         
          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)'}}>Guidelines</Text>
          </CardItem>
          <CardItem bordered style = {{}}>
            <Body>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>The production may use any method to capture or create moving images.
The presentation should include sources used to research the topic; development and design process; use of different video techniques; a list of equipment and software used; and copyright information for pictures, music, or other items.
Video may be no longer than two (2) minutes.
The video should be shown to the judges.
</Text>
            </Body>
          </CardItem>

          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)'}}>Finals</Text>
          </CardItem>
          <CardItem bordered style = {{}}>
            <Body>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>Fifteen (15) finalists, or an equal number from each group in the preliminary round, will advance to the final round.</Text>
            </Body>
          </CardItem>

          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)'}}>Timeline</Text>
          </CardItem>
          <CardItem bordered style = {{}}>
            <Body>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>
                <Text style = {{fontWeight: 'bold'}}>Equipment Setup: </Text> 5 min{"\n"}
                <Text style = {{fontWeight: 'bold'}}>Performance: </Text>7 min{"\n"}
                <Text style = {{fontWeight: 'bold'}}>Warning: </Text>6 min{"\n"}
                <Text style = {{fontWeight: 'bold'}}>Time Up: </Text>7 min{"\n"}
                <Text style = {{fontWeight: 'bold'}}>Penalty Over Time: </Text>5 pts{"\n"}
                <Text style = {{fontWeight: 'bold'}}>Q & A: </Text>3 min
              </Text>
            </Body>
          </CardItem>
          
          

          <CardItem bordered >
            <Body style = {{alignItems: 'center'}}>
            <Content>
                <Accordion dataArray={dataArray} style = {{width: SCREEN_WIDTH-50}} headerStyle = {{backgroundColor: 'rgb(245,245,245)'}}contentStyle = {{marginBottom: 5}}/>
            </Content>
            </Body>
          </CardItem>

          <CardItem style = {{marginTop: 12}}>
            <Text style = {{fontSize:15, fontWeight: '500', color: 'rgb(80,80,80)'}}>More Information</Text>
          </CardItem>
          <CardItem bordered >
            <Body>
              <Text style = {{fontSize: 14, marginBottom: 10, textAlign: 'left', color: 'rgb(105,105,105)'}}>Click below to learn more about Digital Video Production.</Text>
              <View style={{ marginTop:8, marginBottom: 10, flexDirection: 'row', alignSelf: 'center' }}>
              <Text style = {{fontSize: 16, fontWeight: '600', textAlign: 'left', color: 'rgb(0,82,155)'}} onPress={ ()=>{ this.openLink('https://www.fbla-pbl.org/competitive-event/digital-video-production/')}}>To FBLA Website  </Text>
                    <Icon name='ios-arrow-forward' type='ionicon' color={'rgb(0,82,155)'} size={20} />
                </View>

            </Body>
            
          </CardItem>
          

          
        </Card>

        

        <View style = {{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity>
                <View style = {{
                  width: SCREEN_WIDTH - 120,
                  height: 40,
                  borderColor: 'rgb(191,47,56)',
                  borderRadius:10,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 25,
                }}>
                  <Text style = {{
                    color: 'rgb(191,47,56)',
                    fontSize: 15,
                    fontWeight: '600',
                  }}>
                    Remove Event
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  
  );
    }
}
