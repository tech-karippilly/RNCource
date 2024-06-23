import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScrenn from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constans/Colors';
import GameOver from './screens/GameOverScreen';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [isGameOver,setIsGameOver] = useState(true)
 const [guessRounds,setGuessRounds] =useState(0)

  const [fontLoaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontLoaded){
    return <AppLoading/>
  }

  function pickNunberHandler(pickNumber) {
    setUserNumber(pickNumber)
    setIsGameOver(false)
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0)
  }

  let screen = <StartGameScrenn onConfirmNumber={pickNunberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (isGameOver  && userNumber){
    screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds}  onStartNewGame={startNewGameHandler}/>
  }

  function gameOverHandler(roundsNumber){
    setIsGameOver(true)
    setGuessRounds(roundsNumber)
  }



  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootContainer}>
      <ImageBackground
        imageStyle={styles.backgroudImage}
        source={require('./assets/Images/background.png')} resizeMode='cover' style={styles.rootContainer} >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,

  },
  backgroudImage: {
    opacity: 0.15
  }
});
