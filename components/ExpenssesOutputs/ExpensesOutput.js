import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummery from "./ExpensesSummery";
import { GlobalStyles } from "../styles";

function ExpenssesOutput({expenses, expensesPeriod,fallbackText}){
    let content = <Text style={style.infoText}>{fallbackText}</Text>

    if (expenses.length >0){
        content =<ExpensesList expenssesList={expenses}/>
    }
return(
    <View style={style.container}>
        <ExpensesSummery expenses={expenses} periodName={expensesPeriod}/>
        {content}
    </View>
)
}
export default ExpenssesOutput;

const style = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingBottom:0,
        paddingTop:24,
        backgroundColor:GlobalStyles.colors.primary700
    },
    infoText:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:32
    }
})