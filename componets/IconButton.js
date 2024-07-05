import {Ionicons} from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
function IconButton({icon,color,OnPress}){

    return<Pressable onPress={OnPress} style={({pressed})=>pressed &&style.pressed}> 
        <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
}

export default IconButton;

const style = StyleSheet.create({
    pressed:{
        opacity:0.7
    }
})