import React from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { View } from 'react-native'

function Confirm(props) {
  return (
    <View>
    
    <Card>
    {props.children}
    </Card>
    </View>
   
  )
}

export default Confirm
