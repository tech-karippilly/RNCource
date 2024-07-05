import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsList from "../componets/MealList/MealsList";
import {useSelector} from 'react-redux'

function FavourateScreen() {
    const favoratesMealsIds = useSelector(state=>state.favorateMeals.ids)
    const favoritesMelas = MEALS.filter((meals) => favoratesMealsIds.includes(meals.id))

    if (favoritesMelas.length === 0) {
        return (<View style={style.rootContainer}>
            <Text style={style.text}>You Have no Favoraties Meals Yet</Text>
        </View>)
    }
    return <MealsList items={favoritesMelas} />

}
export default FavourateScreen;

const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})