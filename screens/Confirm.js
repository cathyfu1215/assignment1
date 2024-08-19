import React from 'react'
import {  View ,Text,Modal, StyleSheet } from 'react-native'
import MyButton from '../components/MyButton'
import { styles } from './styleHelper';

function Confirm(props) {

function handleContinue(){
  props.setHasUser(true);
  props.setModalVisible(false);
}

function handleGoBack(){
  props.setModalVisible(false);
}


  return (
    
    <Modal visible={props.modalVisible} transparent={true}>
    <View style={styles.confirmModal}>
    
      <Text style={styles.confirmText}>Hello {props.name}</Text>
      <Text style={styles.confirmText}>Here is the email that you entered:{props.email}</Text>
      <Text style={styles.confirmText}>If it is not correct, please go back and enter again.</Text>
      <View style={styles.confirmButtonContainer}>
            <MyButton  onPress={handleGoBack} title="Go back"/>
            <MyButton  onPress={handleContinue} title="Continue"/>
      </View>
      
    </View>
    </Modal>
    
    
   
  )
}



export default Confirm

