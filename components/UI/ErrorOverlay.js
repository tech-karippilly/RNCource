import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles";
import Button from "./Button";

function  ErroOverLay({message,onConfirm}){
return(
    <View style={style.container}>
        <Text style={[style.text,style.title]}>An Error Occured!!    </Text>
        <Text style={style.text} >{message}</Text>
        <Button OnPress={onConfirm}>Okay</Button>
    </View>
)
}
export default ErroOverLay;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    },
    text:{
        alignItems:'center',
        marginBottom:8,
        color:'white'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
   
})