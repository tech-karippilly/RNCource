import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../styles";

function  LoadingOverLay(){
return(
    <View style={style.container}>
        <ActivityIndicator size='large' color='white'/>
    </View>
)
}
export default LoadingOverLay;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    }
})