import React from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { View } from 'react-native'
import {TextInput } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import MyButton from '../components/MyButton'

function Start() {
    const [isChecked, setChecked] = useState(false);
    
  return (
    <View>
         <Text>Welcome</Text>
         <Card>
              <Text>Name</Text>
              <TextInput placeholder=""/>
              <Text>Email</Text>
              <TextInput placeholder=""/>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Text>I am not a robot</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MyButton  onPress={() => console.log('Reset button pressed')} title="Reset"/>
              <MyButton  onPress={() => console.log('Start button pressed')} title="Start" disabled ={!isChecked}/>
              </View>
         </Card>
    </View>
  )
}

export default Start
