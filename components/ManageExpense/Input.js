import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../styles";

function Input({ inputLabel, textInputConfig,styles ,invalid}) {
    let inputStyle = [style.input]

    if (textInputConfig && textInputConfig.multiline){
        inputStyle.push(style.inputMultiline)
    }
    return (
        <View style={[style.inputContainer,styles]}>
            <Text style={[style.lable,!invalid&& style.invalidLable]}>{inputLabel}</Text>
            <TextInput style={[style.input,!invalid&&style.invalidInput,]} {...textInputConfig} />
        </View>
    )
}

export default Input;

const style = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
        
    },
    lable: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    },
    invalidLable:{
        color:GlobalStyles.colors.error500
    },
    invalidInput:{
        backgroundColor:GlobalStyles.colors.error50
    }
})