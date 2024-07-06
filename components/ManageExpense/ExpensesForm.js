import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormatedDate } from "../../Util/date";
import { GlobalStyles } from "../styles";

function ExpesesFrom({onSubmit,onCancel,buttonText,defaultValues}) {
    const [input,setInput] = useState({
        amount:{value:defaultValues?defaultValues.amount.toString() :'',isValid:true},
        date:{value:defaultValues?getFormatedDate(defaultValues.date):'',isValid:true},
        description:{value:defaultValues?defaultValues.description:'',isValid:true}
    })
    function inputChangeHandeler(inputIdentifier,enterdValue){
        setInput((previousValues)=>{
            return{
                ...previousValues,
                [inputIdentifier]:{value:enterdValue,isValid:true}
            }
        })
    }
    function onSubmitHandler(){
   
        const expenseData={
            amount:+input.amount.value,
            date:new Date(input.date.value),
            description:input.description.value
        }
        const amoutIsValid = !isNaN(expenseData.amount) && expenseData.amount >0
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const description = expenseData.description.trim().length >0;

        if (!amoutIsValid ||  !dateIsValid || !description){
        //    Alert.alert("In Valid Input ","Please Check yout Input values")
        console.log("dateIsValid",dateIsValid);
        console.log("description",description);
        console.log("amoutIsValid",amoutIsValid);
        setInput((currnetInputs)=>{
            return{
                amount:{value:currnetInputs.amount.value ,isValid:amoutIsValid},
                description:{value:currnetInputs.description.value,isValid:description},
                date:{value:currnetInputs.date.value,isValid:dateIsValid}
            }
        })
            return;
        }
        onSubmit(expenseData)
    }
    const formIsInvalid =  !input.amount.isValid && !input.date.isValid &&  !input.description.isValid
    return (
        <View style={style.form}>
            <Text style={style.title}>Your Expenses</Text>
            <View style={style.inputRow}>
                <Input inputLabel="Amount"
                    styles={style.rowInput}
                    invalid={input.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandeler.bind(this,'amount'),
                        value:input.amount.value
                    }} 
                    
                    />
                <Input inputLabel="Date"
                    styles={style.rowInput}
                    invalid={input.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangeHandeler.bind(this,'date'),
                        value:input.date.value
                    }}
                />
               
               
            </View>

            <Input inputLabel="Description"
            invalid={input.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandeler.bind(this,'description'),
                    value:input.description.value
                }}
            />
             {formIsInvalid && <Text style={style.errorText}> InValid Input Values </Text>}
            <View style={style.buttonsContainer}>
                <Button styles={style.buttons} mode='flat' OnPress={onCancel}>Cancel  </Button>
                <Button styles={style.buttons} OnPress={onSubmitHandler}>{buttonText}</Button>
            </View>
        </View>
    )
}

export default ExpesesFrom;

const style = StyleSheet.create({
    form:{
        marginTop:40,
        
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginVertical:24,
        textAlign:'center',

    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        minWidth: 120,
        marginHorizontal: 8
    }
    ,errorText:{
        textAlign:'center',
        color:GlobalStyles.colors.error500,
        margin:8,
    }
})