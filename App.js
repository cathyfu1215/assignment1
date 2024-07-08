import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Start from './screens/Start';
import Game from './screens/Game';
import Confirm from './screens/Confirm';

export default function App() {
  const [hasUser, setHasUser] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  
  const rightScreen = () => {
    // the conditional rendering
    if(hasUser === false && confirmed === false){
      return <Start setHasUser={setHasUser}/>
    }
    
    if(hasUser === true && confirmed === false){
      return <Confirm/>
    }
    if(hasUser === true && confirmed === true){
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
