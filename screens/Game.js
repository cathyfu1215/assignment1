import React from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { View } from 'react-native'
import MyButton from '../components/MyButton'
import { useState } from 'react'
import { TextInput,Alert } from 'react-native'
import { Image } from 'react-native'
import { useEffect } from 'react'
import Header from '../components/Header'
import { StyleSheet } from 'react-native'

function Game(props) {

  const [gameState,setGameState] = useState('guessing');// 'guessing', 'guessedWrong','win','lose'

  const [hint, setHint] = useState('');
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');

  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);

  const [textInput, setTextInput] = useState('');

  const [gameOverMessage, setGameOverMessage] = useState('');

  /*
  The timer block
  This block is written by copilot, because I don't know how to use useEffect to set up a timer
   */
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setGameOverMessage('Time is up');

      // if the user has not guessed the number, set the game state to lose when the counter reaches 0
      if(gameState !== 'win'){
      setGameState('lose');
      }
      
    }
  }, [timeLeft]);

  function handleRestart(){
    props.setHasUser(false);
  }

  function handleHint(){
    if(secretNumber <=50){
      setHint('The number is between 1 and 50.See console for the secret number');
    }
    else{
      setHint('The number is between 51 and 100.See console for the secret number');
    }
  }

  function handleSubmitGuess(){
    
    console.log('user guess: ', userGuess);
    if(parseInt(userGuess) == secretNumber){
      setGameState('win');
    }
    else{
      setAttemptsLeft(attemptsLeft - 1);
      if(attemptsLeft === 1){
        setGameOverMessage('You have no more attempts left');
        setGameState('lose');

      }
      else{
        setGameState('guessedWrong');
      }
  }
}

function handleGuessAgain(){
  setGameState('guessing');
  setTextInput('');

}

function handleEndGame(){
  setGameState('lose');
}

function handleNewGame(){
  setSecretNumber(Math.floor(Math.random() * 100) + 1);
  setAttemptsLeft(4);
  setGameState('guessing');
  setTextInput('');
  setTimeLeft(60);
}


  function verifyInput(){
    // if the text cannot be converted to a number
    if(isNaN(textInput)){
      setTextInput('');
      //create an alert that says 'Please enter a number'
      Alert.alert('please enter a number')
    }
    else{
      // if the number is not between 1 and 100
      if(parseInt(textInput) < 1 || parseInt(textInput) > 100){
        setTextInput('');
        //create an alert that says 'Please enter a number between 1 and 100'
        Alert.alert('Please enter a number between 1 and 100');
      }
      else{
        setUserGuess(parseInt(textInput));
        console.log('user guess: ', parseInt(textInput));
      }
    }
  }

  function guessingCard(){
    console.log('secret number: ', secretNumber);
    return (
      <Card>
          <Header>Guess A Number Between 1 & 100</Header>
          <Text style={styles.note}>Note: please hit 'return' on your keyboard after entering the number, because 
            I used onEndEditing to verify the input.
          </Text>
          <TextInput value={textInput} onChangeText={(textInput)=>setTextInput(textInput)}
                      onEndEditing={(textInput)=>verifyInput(textInput)} placeholder='enter your guess'/>
          <Text style={styles.hint}>{hint}</Text>
          <Text style={styles.text}>Attempts left: {attemptsLeft}</Text>
          <Text style={styles.text}>Timer: {timeLeft}</Text>
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
          <Header>Guess Wrong</Header>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MyButton title="Guess Again" onPress={handleGuessAgain}/>
            <MyButton title="End the Game" onPress={handleEndGame}/>
          </View>
        </Card>
    )
  }

  function winCard(){
    return (
      <Card>
          <Header>You Guessed Correct!</Header>
          <Text style={styles.text}>Attempts used: {5-attemptsLeft}</Text>
          <Image style={{width: 100, height:100, alignSelf:'center'}} source={{uri:`https://picsum.photos/id/${secretNumber}/100/100`}}/>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <MyButton title="New Game" onPress={handleNewGame}/>
          </View>
        </Card>
    )
  }

  function loseCard(){
    return (
      <Card>
          <Header>The Game is Over!</Header>
          <Image style={{width: 140, height:140, alignSelf:'center'}} source={require('../assets/sadSmile.jpg')}/>
          <Text style={styles.text}>{gameOverMessage}</Text>
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
    else{
      return (
        <Card>
          <Text>Something went wrong</Text>
        </Card>
      )
    }
  }
  
  return (
    <View style={styles.container}>
        <View style={{alignItems:'flex-end'}}>
          <MyButton title="Restart" onPress={handleRestart}/>
        </View>
        <View>
        {rightCard()}
        </View>
        
    </View>
     
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
 
  },
  hint: {
    margin:5,
    fontSize: 15,
    textAlign: 'center'
  },
  note: {
    margin:5,
    color: 'blue',
    fontSize: 10,
    textAlign: 'center'
  },
  text:{
    margin:5,
    fontSize: 20,


  }
});

export default Game
