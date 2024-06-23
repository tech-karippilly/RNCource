import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constans/Colors";

function NumberContainer({children}){
    return(
        <View style={style.container}>
            <Text style={style.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const style = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.accent500,
        padding:24,
        margin:24, 
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:Colors.accent500,
        fontSize:36,
        fontFamily:'open-sans-bold'
    }
})