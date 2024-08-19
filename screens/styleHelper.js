import { StyleSheet } from 'react-native';

/*I learned about this from Gemini */

export const colors = {
  primary: '#007AFF',
  secondary: '#FFC107',
  textPrimary: '#333',
  textSecondary: '#666',
  white: '#fff',
  black: '#000',
  lightpink: '#FFC0CB',
  lightblue: '#ADD8E6',
  grey: '#ccc',
  blue: '#0000FF',
};


export const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        justifyContent: 'center',
     
      },
      hint: {
        margin:5,
        fontSize: 15,
        textAlign: 'center'
      },
      note: {
        margin:5,
        color: 'blue',
        fontSize: 10,
        textAlign: 'center'
      },
      text:{
        margin:5,
        fontSize: 20,
      },
      appContainer: {
        flex: 1,
        borderColor: 'black',
      },
      card:{
        padding:20,
        margin:20,
        backgroundColor:'rgba(255,255,255,0.8)',
        borderRadius:10,
        alignContent:'center',
        alignSelf:'center',
        boxShadow: '5px 10px',
      },
      startContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
   
    startButtonContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        margin:5,
        padding:5
    },
    backgroundContainer: {
        flex: 1,
      },
    headerText:{
        color: 'darkblue', 
        fontSize:20, 
        fontWeight:'bold' , 
        margin:5 , 
        padding: 5
    },
    buttonText:{
        color: 'white',
        fontWeight:'bold'
    },
    confirmModal:{
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'rgba(255,255,255,0.9)',
        borderRadius:10,
        height:'50%',
        alignSelf:'center',
        marginTop:'50%',
        padding:10,
        
      },
      confirmText:{
        color:'black',
        fontSize:15,
        margin:5,
        fontWeight:'bold'
      },
      confirmButtonContainer:{
         flexDirection: 'row', 
         alignItems: 'center' 
      },
      textInputStyle:{
        borderWidth:1, 
        borderBlockEndColor:colors.black, 
        borderLeftColor:'rgba(255,255,255,0.8)',
        borderRightColor:'rgba(255,255,255,0.8)',
        borderTopColor:'rgba(255,255,255,0.8)',
        height:40,
        margin:10,
      }

});