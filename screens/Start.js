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
import Header from '../components/Header';

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
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
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
         <Header>Welcome</Header>
         <Card>
              <Text style={styles.text}>Name</Text>
              <TextInput onChangeText={newText => setInputName(newText)}
                         value={inputName}
                         onBlur={validateName}/>
              <Text>{errorName}</Text>
              <Text style={styles.text}>Email</Text>
              <TextInput onChangeText={newText => setInputEmail(newText)}
                         value={inputEmail}
                         onBlur={validateEmail}/>
              <Text>{errorEmail}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox value={isChecked} onValueChange={setChecked} />
                <Text style={styles.text}>I am not a robot</Text>
              </View>

              <View style={styles.buttonContainer}>
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
        hint: {
          margin:5,
          fontSize: 15,
          textAlign: 'center'
        },
        note: {
          margin:5,
          color: 'blue',
          fontSize: 10,
          textAlign: 'center'
        },
        text:{
          margin:5,
          fontSize: 20,
        },
        buttonContainer: {
            flexDirection: 'row', 
            alignItems: 'center',
            margin:5,
            padding:5
        },
      });

export default Start
