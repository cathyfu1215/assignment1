import React from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { View } from 'react-native'
import {TextInput } from 'react-native'
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import MyButton from '../components/MyButton'

function Start(props) {
    const [isChecked, setChecked] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    // reset button: clear all text inputs and uncheck the checkbox
    function handleReset(){
        setInputName('');
        setInputEmail('');
        setChecked(false);
    }

    //start button: go to the next screen
    function handleStart(){
        props.setHasUser(true);
    }

    
  return (
    <View>
         <Text>Welcome</Text>
         <Card>
              <Text>Name</Text>
              <TextInput onChangeText={newText => setInputName(newText)}
                         value={inputName}/>
              <Text>{errorName}</Text>
              <Text>Email</Text>
              <TextInput onChangeText={newText => setInputEmail(newText)}
                         value={inputEmail}/>
              <Text>{errorEmail}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Text>I am not a robot</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MyButton  onPress={handleReset} title="Reset"/>
              <MyButton  onPress={handleStart} title="Start" disabled ={!isChecked}/>
              </View>
         </Card>
    </View>
  )
}

export default Start
