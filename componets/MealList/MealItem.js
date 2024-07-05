import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import MealDetails from "../MealDetails"
import { useNavigation } from '@react-navigation/native';
function MealItem({ title, imageUrl, duration, complexity, affordability,id }) {
    const {navigate} = useNavigation()
    function  handlePress(){
        navigate('MealDetails',{
            mealId:id
        })
    }
    return (
        <View style={style.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}}
            style={({pressed})=>pressed?style.buttonPressed:null}
            onPress={handlePress}
            >
                <View style={style.innerContianer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={style.image} />
                        <Text style={style.title}>{title}</Text>
                    </View>
                   
                </View>
            </Pressable>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
    )
}

export default MealItem

const style = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed:{
        opacity:0.5
    },
    innerContianer:{
        borderRadius: 8,
        overflow:'hidden'
    },
    image: {
        width: '100%',
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
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