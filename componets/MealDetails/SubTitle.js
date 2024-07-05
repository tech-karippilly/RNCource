import { StyleSheet, Text, View } from "react-native";

function SubTitle({children}){

    return(
        <View style={style.subTitleContianer}>
        <Text style={style.subTitle}>{children}</Text>
    </View>
    )
}

export default SubTitle;

const style = StyleSheet.create({
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
        marginHorizontal:12,
        marginVertical:4    
    }
})