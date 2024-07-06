import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles";

function Button({children,OnPress,mode,styles}){
return(
    <View style={styles}>
        <Pressable style={({pressed})=>pressed&& style.pressed} onPress={OnPress}>
            <View style={[style.button,mode==='flat'&& style.flatStyle]}>
                <Text style={[style.buttonText ,mode==='flat'&& style.flatText]}>{children}</Text>
            </View>
        </Pressable>
    </View>
)
}

export default Button;

const style = StyleSheet.create({
    button:{
        borderRadius:4,
        padding:8,
        backgroundColor:GlobalStyles.colors.primary500,
    },
    flatStyle:{
        backgroundColor:'transparent',

    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    flatText:{
        color:GlobalStyles.colors.primary200,

    },
    pressed:{
        opacity:0.75,
        backgroundColor:GlobalStyles.colors.primary100,
        borderRadius:4
    }
})