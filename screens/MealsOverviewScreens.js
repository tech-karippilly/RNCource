import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../componets/MealItem";
import { useEffect, useLayoutEffect } from "react";

function MealsOverViewScreens({navigation , route}){
    const catId = route.params.catagoriesId;
    const displayMeals = MEALS.filter((mealItem)=>mealItem.categoryIds.indexOf(catId)>=0)

    useLayoutEffect(()=>{
        const selectedCatagories = CATEGORIES.find((catagores)=>catagores.id ===catId)
        navigation.setOptions({
            title:selectedCatagories.title
        })
    },[navigation,catId])
    function renderMealItem(itemData){
        const {title,imageUrl,duration,complexity,affordability} = itemData.item
        const mealItemProps={
            title,
            imageUrl,
            duration,
            complexity,
            affordability:affordability
        }
        function  handlePress(){
            navigation.navigate('MealDetails',{
                mealId:itemData.item.id
            })
        }
        return <MealItem {...mealItemProps} OnPress={handlePress} />
    }
    return(
        <View style={style.container}>
            <FlatList 
            data={displayMeals}
            keyExtractor={(item)=>item.id}
            renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverViewScreens;

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})