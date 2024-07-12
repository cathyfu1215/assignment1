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

  card:{
    padding:20,
    margin:20,
    backgroundColor:'lightblue',
    borderRadius:10,
    alignContent:'center',
    alignSelf:'center',
    boxShadow: '5px 10px',
  }
});


export default Card
