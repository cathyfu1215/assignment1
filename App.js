import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Start from './screens/Start';
import Game from './screens/Game';


export default function App() {
  // for testing purposes, I set hasUser to true
  const [hasUser, setHasUser] = useState(true);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  
  const rightScreen = () => {
    // the conditional rendering
    if(hasUser === false){
      return <Start name = {name} email={email}
                    setName={setName} setEmail={setEmail}
                    setHasUser={setHasUser}/>
    }
    
    else{
      return <Game/>
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
