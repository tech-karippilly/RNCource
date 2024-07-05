import { useLayoutEffect } from "react";
import { Button, Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../componets/MealDetails";
import SubTitle from "../componets/MealDetails/SubTitle";
import List from "../componets/MealDetails/List";
import IconButton from "../componets/IconButton";

function MealsDetailsScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    console.log(mealId);

    function headerButtonPressHandler(){
        
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton icon={'star'} color={'white'} onOnPress={headerButtonPressHandler}/>
            }
        })

    }, [navigation, headerButtonPressHandler])
    const selectedMelas = MEALS.find((catagores) => catagores.id === mealId)
    const { title, imageUrl, duration, complexity, affordability } = selectedMelas



    return (
        <ScrollView style={style.rootContainer}>
            <Image source={{ uri: imageUrl }} style={style.image} />
            <Text style={style.title}>{title}</Text>
            <View>
                <MealDetails

                    textStyle={style.detailText}
                    duration={duration} complexity={complexity} affordability={affordability} />
            </View>
            <View style={style.listOuterContainer}>
                <View style={style.listContainer}>
                    <SubTitle>
                        Ingredians
                    </SubTitle>
                    <List data={selectedMelas.ingredients} />
                    <SubTitle>
                        Steps
                    </SubTitle>
                    <List data={selectedMelas.steps} />
                </View>
            </View>
        </ScrollView>

    )
}
export default MealsDetailsScreen;
const style = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitleContianer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        padding: 6,
        margin: 6,
        marginHorizontal: 24,
        marginVertical: 4
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%'
    }
})