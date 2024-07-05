import { FlatList, StyleSheet, View } from "react-native"
import MealItem from "./MealItem"

function  MealsList({items}){
    function renderMealItem(itemData){
        const {id,title,imageUrl,duration,complexity,affordability} = itemData.item
        const mealItemProps={
            id,
            title,
            imageUrl,
            duration,
            complexity,
            affordability:affordability
        }

        return <MealItem {...mealItemProps}  />
    }
    return(
        <View style={style.container}>
            <FlatList 
            data={items}
            keyExtractor={(item)=>item.id}
            renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsList;

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})