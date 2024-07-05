import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Titile from "../components/ui/Title";
import Colors from "../constans/Colors";
import PrimaryButtons from "../components/ui/PrimaryButton";

function GameOver({roundsNumber,userNumber,onStartNewGame}) {
    const {width,height} = useWindowDimensions();
    let imagesize =300

    if (width <380){
        imagesize=150
    }
    if (height <400) imagesize=80

    const imgStyle = {
        width:imagesize,
        height:imagesize,
        borderRadius:imagesize /2
    }
    return (
        <ScrollView style={style.screen}>
        <View style={style.rootContainer}>
            <Titile>GAME OVER!</Titile>
            <View style={[style.imageContainer,imgStyle]}>
                <Image source={require('../assets/Images/success.png')}  />
            </View >
            <Text style={style.summeryText}>Your phone needed <Text style={style.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={style.highlight}>{userNumber}</Text>.</Text>
            <PrimaryButtons onPress={onStartNewGame}>Start New Game</PrimaryButtons>
        </View>
        </ScrollView>
    )
}

export default GameOver;



const style = StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summeryText:{
        fontFamily:'open-sans',
        fontSize:21,
        textAlign:'center',
        marginBottom:24
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500   
    }
})