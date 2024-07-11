import React from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { View } from 'react-native'
import MyButton from '../components/MyButton'
import { useState } from 'react'
import { TextInput } from 'react-native'

function Game(props) {

  const [gameState,setGameState] = useState('guessing');// 'guessing', 'guessedWrong','win','lose'

  const [hint, setHint] = useState('');
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');

  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);

  const [textInput, setTextInput] = useState('');


  function handleRestart(){
    console.log('handle restart')

  }

  function handleHint(){
    console.log('handle hint')
  }

  function handleSubmitGuess(){
    console.log('handle submit guess')
  }


  function verifyInput(){
    // if the text cannot be converted to a number
    if(isNaN(textInput)){
      setTextInput('');
      //create an alert that says 'Please enter a number'
      alert('please enter a number')
    }
    else{
      // if the number is not between 1 and 100
      if(parseInt(textInput) < 1 || parseInt(textInput) > 100){
        setTextInput('');
        //create an alert that says 'Please enter a number between 1 and 100'
        alert('Please enter a number between 1 and 100');
      }
      else{
        setUserGuess(parseInt(textInput));
        console.log('user guess: ', parseInt(textInput));
      }
    }
  }

  function guessingCard(){
    return (
      <Card>
          <Text>Guess A Number Between 1 & 100</Text>
          <TextInput value={textInput} onChangeText={(textInput)=>setTextInput(textInput)}
                      onEndEditing={(textInput)=>verifyInput(textInput)} placeholder='enter your guess'/>
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
