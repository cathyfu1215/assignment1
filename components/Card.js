import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'

function Card(props) {
  return (
    <View>
         <Text>I am a card</Text>
         {props.children}
    </View>
     
  )
}

export default Card
