import { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from "react-native";

function GoalInput(props) {
    const [entereGoalText, setEnteredGoalText] = useState('')
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler() {
        props.AddGoals(entereGoalText)
        setEnteredGoalText('')
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/goal.png')}style={styles.image}   />
                <TextInput
                    value={entereGoalText}
                    style={styles.textInput}
                    placeholder='Your Course Goal !'
                    onChangeText={(goalInputHandler)}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
                    </View>
                    <View style={styles.buttons}>
                        <Button title='Cancel' onPress={props.closeModel}  color='#f31282'/>
                    </View>
                </View>

            </View>
        </Modal>

    )
}
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding:16,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor:'#311b6b'
    },
    image:{
        width:100,
        height:100,
        margin:20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        width: '100%',
        marginRight: 8,
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:16
    },
    buttons:{
        width:100,
        marginHorizontal:8
    }
})