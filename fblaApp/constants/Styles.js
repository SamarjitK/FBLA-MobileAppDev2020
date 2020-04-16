import { StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

  export default StyleSheet.create({
    container: {
      flex: 1, 
    },
    memberHeader:{
      zIndex: 1,
      height: 90,
      borderBottomColor: 'rgb(0,82,155)',
      backgroundColor:'rgb(0,82,155)'
    },
    authBackButton:{
      justifyContent: 'flex-start',
      alignItems: 'center',
      width:55,
      marginLeft: 10,
      marginTop: 40
    },
    officersName:{
      color: 'rgb(80,80,80)',
      fontSize: 15,
      fontWeight: '600' 
    },
    officersPosition:{
      color: 'rgb(170,170,170)',
      fontSize: 13,                    
      fontWeight: '400',
      textAlign: 'center'
    }


  });
    