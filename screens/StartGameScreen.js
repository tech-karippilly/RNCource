import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButtons from '../components/ui/PrimaryButton';
import Colors from '../constans/Colors';
import Titile from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScrenn({ onConfirmNumber }) {
    const [enteredValue, setEnteredValue] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredValue(enteredText)

    }
    function resetInputHandler() {
        setEnteredValue('')
    }
    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredValue)

        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be a number  between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }

        onConfirmNumber(choosenNumber)
    }
    return (
        <View style={styles.rootContianer}>
            <Titile>Guess My Number
            </Titile>
            <Card >
                <InstructionText>Enter a Number</InstructionText>
            
            <TextInput style={styles.numberInput} maxLength={2}
                keyboardType='number-pad'
                autoCapitalize={false}
                autoCorrect={false}
                value={enteredValue}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButtons onPress={resetInputHandler}>Reset</PrimaryButtons>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButtons onPress={confirmInputHandler}>Confirm</PrimaryButtons>
                </View>
            </View>
            </Card>

        </View>
    )
}

export default StartGameScrenn;


const styles = StyleSheet.create({
    rootContianer: {
        flex: 1,
        marginTop: 100,
        alignItems:'center'
    },


    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});