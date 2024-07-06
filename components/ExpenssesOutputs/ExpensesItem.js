import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles";
import { getFormatedDate } from "../../Util/date";
import {useNavigation} from '@react-navigation/native'

function ExpensesItem({ id,description, amount,date }) {
    const {navigate} = useNavigation()
    function expenssPressHandler(){
        navigate('ManageExpenses',{
            expenseId:id
        })
    }
    return (
        <Pressable style={({pressed})=>pressed&& style.pressed} onPress={expenssPressHandler}>
            <View style={style.expensesItem}>
                <View >
                    <Text style={[style.textBase,style.descriptionText]}>{description}</Text>
                    <Text style={style.textBase}>{getFormatedDate(date)}</Text>
                </View>
                <View style={style.amountContainer}>
                    <Text style={style.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpensesItem;

const style = StyleSheet.create({
    pressed:{
        opacity:0.25
    },
    expensesItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary50,

    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        minWidth:80
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
    }
})