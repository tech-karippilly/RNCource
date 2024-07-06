import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
function IconButton({ iconName, color, size, OnPress }) {
    console.log(iconName);
    return (<Pressable style={({ pressed }) => pressed && style.pressed} onPress={OnPress}>
        <View style={style.buttonContainer}>
            <Ionicons name={iconName} color={color} size={size} />
        </View>
    </Pressable>)
}

export default IconButton;

const style = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal:8,
        marginVertical:2
    },
    pressed: {
        opacity: 0.25
    }
})