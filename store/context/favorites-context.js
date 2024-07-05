import { createContext, useState } from "react";

export const FavorateContext = createContext({
    ids:[],
    addFavirotes:(id)=>{},
    removeFavirotes:(id)=>{}
})

function FavriotesProvicerContext ({children}){
    const [favoritesMealIds,setFavoritesIds]=useState([])
    function addFavirotes(id){
        setFavoritesIds((prevState)=>[...prevState,id])
    }
    function removeFavirotes(id){
        setFavoritesIds((prevState)=>prevState.filter((mealId)=>mealId !== id))
    }
    const value={
        ids:favoritesMealIds,
        addFavirotes,
        removeFavirotes
    }
    return <FavorateContext.Provider value={value} >{children}</FavorateContext.Provider>
}

export default FavriotesProvicerContext;