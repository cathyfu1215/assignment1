import React from 'react';
import { Text } from 'react-native';
import Card from '../components/Card';
import { View } from 'react-native';
import {TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import MyButton from '../components/MyButton';

function Start(props) {
    const [isChecked, setChecked] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const [nameValid,setNameValid] = useState(false);
    const [emailValid,setEmailValid] = useState(false);
    /* 
    reset button: clear all text inputs and uncheck the checkbox 
    */
    function handleReset(){
        setInputName('');
        setInputEmail('');
        setChecked(false);
    }

    /* 
     start button: go to the next screen
     Note: I choose to validate the name and email before enabling the start button
     */
    function handleStart(){
            props.setHasUser(true);
    }

    /*
    I use regex to validate the name
    */
    function validateName(){
        const regex = /^[^\d]{2,}$/;
        if(inputName && regex.test(inputName)){
            setErrorName('');
            setNameValid(true);
        }
        else{
            setErrorName('Invalid name!');
        }
    }

    /*
    I use regex to validate the email, if the email is valid, I clear the error message and return true
    */
    function validateEmail(){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(inputEmail && regex.test(inputEmail)){
            setErrorEmail('');
            setEmailValid(true);
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
              <MyButton  onPress={handleStart} title="Start" disabled ={(!isChecked) || (!nameValid) || (!emailValid)}/>
              </View>
         </Card>
    </View>
  )
}

export default Start
