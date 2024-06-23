import { StyleSheet, Text } from "react-native";
import Colors from "../../constans/Colors";

function InstructionText({ children,styles }) {
    return (
        <Text style={[style.instructionText,styles]}>{children}</Text>
    )
}
export default InstructionText;

const style = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily:'open-sans'
    },
})