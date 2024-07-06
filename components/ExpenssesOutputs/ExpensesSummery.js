import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles";

function ExpensesSummery({expenses,periodName}){
        const expensesSum = expenses.reduce((sum,expenses)=>{ return sum + expenses.amount},0);
    return(
        <View style={style.container}>
        <Text style={style.periodText}>{periodName}</Text>
        <Text style={style.sumText}>${expensesSum.toFixed(2)}</Text>
    </View>
    )
}
export default ExpensesSummery;

const style = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    periodText:{
        fontSize:12,
        color:GlobalStyles.colors.primary400,
    },
    sumText:{
        fontSize:16,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500
    }
})