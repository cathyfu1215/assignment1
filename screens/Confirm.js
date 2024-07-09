import React from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { View } from 'react-native'
import MyButton from '../components/MyButton'

function Confirm(props) {

function handleContinue(){
  props.setHasUser(true);
  props.setModalVisible(false);
}

function handleGoBack(){
  props.setModalVisible(false);
}

  return (
    <View>
    
    <Card>
      <Text>Hello {props.name}</Text>
      <Text>Here is the email that you entered:{props.email}</Text>
      <Text>If it is not correct, please go back and enter again.</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MyButton  onPress={handleGoBack} title="Go back"/>
            <MyButton  onPress={handleContinue} title="Continue"/>
      </View>
      
    </Card>
    </View>
   
  )
}

export default Confirm
