import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../componets/MealList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../componets/MealList/MealsList";

function MealsOverViewScreens({navigation , route}){
    const catId = route.params.catagoriesId;
    const displayMeals = MEALS.filter((mealItem)=>mealItem.categoryIds.indexOf(catId)>=0)

    useLayoutEffect(()=>{
        const selectedCatagories = CATEGORIES.find((catagores)=>catagores.id ===catId)
        navigation.setOptions({
            title:selectedCatagories.title
        })
    },[navigation,catId])

    return(
        <MealsList items={displayMeals}/>
    )
}

export default MealsOverViewScreens;

const style = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})