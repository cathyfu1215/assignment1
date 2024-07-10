import React from 'react';
import { Text } from 'react-native';
import Card from '../components/Card';
import { View } from 'react-native';
import {TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import MyButton from '../components/MyButton';
import { StyleSheet } from 'react-native';
import Confirm from './Confirm';

function Start(props) {
    const [isChecked, setChecked] = useState(false);
    
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const [nameValid,setNameValid] = useState(false);
    const [emailValid,setEmailValid] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    /* 
    reset button: clear all text inputs and uncheck the checkbox 
    */
    function handleReset(){
        setInputName('');
        setInputEmail('');
        setChecked(false);
    }

    /* 
     start button:if everything is valid, go to the next screen, 
           otherwise show an error message below invalid fields
     */
    function handleStart(){
        if(nameValid && emailValid){
            props.setName(inputName);
            props.setEmail(inputEmail);
            setModalVisible(true);
        }
        else{
            if(!nameValid){
                setErrorName('Invalid name!');
            }
            if(!emailValid){
                setErrorEmail('Invalid email!');
            }
        }
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
    I use regex to validate the email, if the email is valid, 
    I clear the error message and return true
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

    function setModalNotVisible(){
        setModalVisible(false);
    }

  return (
    <View style={styles.container}>
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
         
        <Confirm name={props.name} email={props.email} setHasUser={props.setHasUser}
                setModalVisible={setModalNotVisible} modalVisible={modalVisible}/>
       
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
    });

export default Start
