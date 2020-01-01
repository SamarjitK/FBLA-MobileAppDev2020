import { StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

  export default StyleSheet.create({
    container: {
      flex: 1, 
    },
    authBackButton:{
      justifyContent: 'flex-start',
      alignItems: 'center',
      width:55,
      marginLeft: 10,
      marginTop: 40
    }

  });
    