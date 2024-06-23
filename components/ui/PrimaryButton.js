import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constans/Colors";

function PrimaryButtons({ children ,onPress}) {
    function pressHandler() {

    }

    return (
        <View style={style.buttonOuterContainer}>
            <Pressable onPress={onPress} style={({pressed})=> pressed ?[style.pressed,style.buttonInnerContainer]:style.buttonInnerContainer} android_ripple={{ color: Colors.primary600 }}>
                <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButtons;

const style = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow:'hidden'
    },
    buttonInnerContainer: {
        backgroundColor:Colors.primary500,
        
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity:0.75
    }
})