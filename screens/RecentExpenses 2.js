import { Text, View } from "react-native";
import ExpenssesOutput from "../components/ExpenssesOutputs/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDate } from "../Util/date";

function RecentExpenses(){
    const expenseCtx = useContext(ExpensesContext)
    const recentExpensses = expenseCtx.expenses.filter((expenses)=>{
        const today = new Date()
        const date7DaysAgo =getDateMinusDate(today,7)
        return (expenses.date >date7DaysAgo) && (expenses.date <= today)
    })
    
return(
    <ExpenssesOutput expenses={recentExpensses} expensesPeriod='Last 7 Days'    fallbackText={'No expensses Registered for last 7 days'}/>
)
}

export default RecentExpenses;