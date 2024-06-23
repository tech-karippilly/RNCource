import { StyleSheet, Text } from "react-native";
import Colors from "../../constans/Colors";

function Titile({ children }) {
    return (
        <Text style={style.title}>
            {children}
        </Text>
    )
}

export default Titile;

const style = StyleSheet.create({
    title: {
        fontFamily:'open-sans-bold',
        fontSize: 18,
        color:'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 14
    }
})