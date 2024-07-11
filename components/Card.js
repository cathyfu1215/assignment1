import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

function Card(props) {
  return (
    <View style={styles.card}>
         {props.children}
    </View>
     
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    padding:20,
    margin:20,
    backgroundColor:'lightblue',
    borderRadius:10,
    alignContent:'center',
    alignSelf:'center',
  }
});


export default Card
