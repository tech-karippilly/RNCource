import { StyleSheet, Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability,containerStyle,textStyle }) {
    return (
        <View style={[style.details,containerStyle]}>
            <Text style={[style.detailsItem,textStyle]}>{duration}m</Text>
            <Text style={[style.detailsItem,textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[style.detailsItem,textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}
export default MealDetails;

const style = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})