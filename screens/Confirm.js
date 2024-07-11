import React from 'react'
import {  View ,Text,Modal, StyleSheet } from 'react-native'
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
    
    <Modal visible={props.modalVisible} transparent={true}>
    <View style={styles.confirmModal}>
    
      <Text>Hello {props.name}</Text>
      <Text>Here is the email that you entered:{props.email}</Text>
      <Text>If it is not correct, please go back and enter again.</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MyButton  onPress={handleGoBack} title="Go back"/>
            <MyButton  onPress={handleContinue} title="Continue"/>
      </View>
      
    </View>
    </Modal>
    
    
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    padding:10,
    margin:10,
    backgroundColor:'lightblue',
    borderRadius:10,
  },

  confirmModal:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightgrey',
    borderRadius:10,
    height:'50%',
    alignSelf:'center',
    marginTop:'50%',
  },
});

export default Confirm

