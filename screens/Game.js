import React from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { View } from 'react-native'
import MyButton from '../components/MyButton'
import { useState } from 'react'
import { TextInput } from 'react-native-web'

function Game() {
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);

  function handleRestart(){
    console.log('handle restart')
  }

  function handleHint(){
    console.log('handle hint')
  }

  function handleSubmitGuess(){
    console.log('handle submit guess')
  }

  return (
    <View>
        <View style={{alignItems:'flex-end'}}>
          <MyButton title="Restart" onPress={handleRestart}/>
        </View>
        <Card>
          <Text>Guess A Number Between 1 & 100</Text>
          <TextInput placeholder="" />
          <Text>Attempts left: {attemptsLeft}</Text>
          <Text>Timer: {timeLeft}</Text>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MyButton title="Use a Hint" onPress={handleHint}/>
            <MyButton title="Submit guess" onPress={handleSubmitGuess}/>
          </View>
        </Card>
        
    </View>
     
    
  )
}

export default Game
