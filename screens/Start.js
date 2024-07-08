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

    /* 
    reset button: clear all text inputs and uncheck the checkbox 
    */
    function handleReset(){
        setInputName('');
        setInputEmail('');
        setChecked(false);
    }

    /* 
     start button: go to the next screen if there are no errors
     I choose to use alert to show the error message, this is not required in the assignment
     */
    function handleStart(){
        if(errorName ==='' && errorEmail===''){
            props.setHasUser(true);
        }
        else{
            alert('Please fix the errors in the form!');
        }
    }

    /*
    I use regex to validate the name
    */
    function validateName(){
        const regex = /^[^\d]{2,}$/;
        if(inputName && regex.test(inputName)){
            setErrorName('');
        }
        else{
            setErrorName('Invalid name!');
        }
    }

    /*
    I use regex to validate the email
    */
    function validateEmail(){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(inputEmail && regex.test(inputEmail)){
            setErrorEmail('');
        }
        else{
            setErrorEmail('Invalid email!');
        }
    }
    
  return (
    <View>
         <Text>Welcome</Text>
         <Card>
              <Text>Name</Text>
              <TextInput onChangeText={newText => setInputName(newText)}
                         value={inputName}
                         onBlur={validateName}/>
              <Text>{errorName}</Text>
              <Text>Email</Text>
              <TextInput onChangeText={newText => setInputEmail(newText)}
                         value={inputEmail}
                         onBlur={validateEmail}/>
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
