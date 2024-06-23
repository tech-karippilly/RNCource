import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Titile from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainet";
import PrimaryButtons from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLog";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBountary = 1;
let maxBountry = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const  [guessRounds,setGuessRounds] =useState([initialGuess])
    const guessRoundListLength = guessRounds.length
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRoundListLength)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(()=>{
        minBountary=1,
        maxBountry=100
    },[])

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'grater' && currentGuess > userNumber)) {
            Alert.alert("Dont't lie!", "You Know this is wrong ...", [{ text: 'sorry', style: 'cancel' }])
            return;
        } else {
            if (direction === 'lower') {
                maxBountry = currentGuess - 1;
            } else {
                minBountary = currentGuess + 1;
            }
           
            const newRndNumber = generateRandomBetween(minBountary, maxBountry, currentGuess)
            setCurrentGuess(newRndNumber)
            setGuessRounds((currentState)=>[newRndNumber,...currentState])
        }


    }

    
    return (
        <View style={style.screen}>
            <Titile>
                Opponent's Guess
            </Titile>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <InstructionText styles={style.InstructionText}> Higer or lower ?</InstructionText>

                <View style={style.buttonsContainer}>
                    <View style={style.buttonContainer}>
                        <PrimaryButtons onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color='white'  />
                        </PrimaryButtons>
                    </View>
                    <View style={style.buttonContainer}>
                        <PrimaryButtons onPress={nextGuessHandler.bind(this, 'grater')} >
                        <Ionicons name="add-sharp" size={24} color='white'  />
                        </PrimaryButtons>
                    </View>
                </View>

            </Card>
            <View style={style.listContainer}>
                {/* {guessRounds.map((guessRounds,index)=><Text key={index}>{guessRounds}</Text>)} */}
                <FlatList data={guessRounds}
                renderItem={(itemData)=><GuessLogItem roundNumber={guessRoundListLength -itemData.index} guess={itemData.item}/>}
                keyExtractor={(item)=>item}
                />
            </View>
        </View>
    )
}

export default GameScreen;

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 100,
    },
    InstructionText:{
        marginBottom:12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer:{
        flex:1,
        padding:16
    }

})