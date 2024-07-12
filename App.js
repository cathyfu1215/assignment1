import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Start from './screens/Start';
import Game from './screens/Game';
import Background from './components/Background';

export default function App() {
  //for test purpose, set hasUser to true
  const [hasUser, setHasUser] = useState(false);
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
      return <Game setHasUser={setHasUser}/>
    }
    
  }
  
  return (
    
      <SafeAreaView style={styles.container}>
        <Background>
        {rightScreen()}
        </Background>
        <StatusBar style="auto" />
      </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'black',
  },
});
