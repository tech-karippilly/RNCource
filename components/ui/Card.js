import { StyleSheet, View } from "react-native"
import Colors from "../../constans/Colors"

function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
})