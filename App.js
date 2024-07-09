import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Start from './screens/Start';
import Game from './screens/Game';


export default function App() {
  const [hasUser, setHasUser] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  
  
  const rightScreen = () => {
    // the conditional rendering
    if(hasUser === false){
      return <Start setModalVisible={setModalVisible} modalVisible={modalVisible}
                    setName={setName} setEmail={setEmail}
                    setHasUser={setHasUser}/>
    }
    
    /*
      console.log('name:',name);
      console.log('email:',email);
      return <Modal visible={modalVisible} transparent={true}>
                <Confirm name={name} email={email} setHasUser={setHasUser}
                         setConfirmed={setConfirmed} setModalVisible={setModalVisible}/>
            </Modal>
    */
    
    if(hasUser === true){
      return <Game/>
    }
    else{
      // This should never happen
      return <Text>This state is impossible!</Text>
    }
  }
  
  
  return (
    <View style={styles.container}>
      {
        rightScreen()
      }
      
      
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
