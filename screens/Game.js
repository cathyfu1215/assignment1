import React from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { View } from 'react-native'
import MyButton from '../components/MyButton'
import { useState } from 'react'
import { TextInput } from 'react-native-web'

function Game() {

  const [gameState,setGameState] = useState('guessing');// 'guessing', 'guessedWrong','win','lose'

  const [hint, setHint] = useState('');
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');

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

  function guessingCard(){
    return (
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
    )
  }

  function guessedWrongCard(){
    return (
      <Card>
          <Text>Guess Wrong</Text>
          <TextInput placeholder="" />
          <Text>Attempts left: {attemptsLeft}</Text>
          <Text>Timer: {timeLeft}</Text>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MyButton title="Use a Hint" onPress={handleHint}/>
            <MyButton title="Submit guess" onPress={handleSubmitGuess}/>
          </View>
        </Card>
    )
  }

  function winCard(){
    return (
      <Card>
          <Text>You Win!</Text>
          <Text>Attempts left: {attemptsLeft}</Text>
          <Text>Timer: {timeLeft}</Text>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MyButton title="Use a Hint" onPress={handleHint}/>
            <MyButton title="Submit guess" onPress={handleSubmitGuess}/>
          </View>
        </Card>
    )
  }

  function loseCard(){
    return (
      <Card>
          <Text>You Lose!</Text>
          <Text>Attempts left: {attemptsLeft}</Text>
          <Text>Timer: {timeLeft}</Text>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MyButton title="Use a Hint" onPress={handleHint}/>
            <MyButton title="Submit guess" onPress={handleSubmitGuess}/>
          </View>
        </Card>
    )
  }


  function rightCard(){
    if(gameState === 'guessing'){
      return guessingCard();
    }
    if(gameState === 'guessedWrong'){
      return guessedWrongCard();
    }
    if(gameState === 'win'){
      return winCard();
    }
    if(gameState === 'lose'){
      return loseCard();
    }
  }
  
  return (
    <View>
        <View style={{alignItems:'flex-end'}}>
          <MyButton title="Restart" onPress={handleRestart}/>
        </View>
        {rightCard()}
        
    </View>
     
    
  )
}

export default Game
