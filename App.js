import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Start from './screens/Start';
import Game from './screens/Game';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  
  //for test purpose, I set hasUser to true
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
      return <Game setHasUser={setHasUser}/>
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
    backgroundColor: 'grey',
 
  },
 
});
