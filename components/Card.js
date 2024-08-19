import React from 'react'
import { View } from 'react-native'
import { styles } from '../screens/styleHelper'

function Card(props) {
  return (
    <View style={styles.card}>
         {props.children}
    </View>
     
  )
}



export default Card
