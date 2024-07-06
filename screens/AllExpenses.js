import { Text, View } from "react-native";
import ExpenssesOutput from "../components/ExpenssesOutputs/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses(){
    const ExpenssesCtx = useContext(ExpensesContext)
    console.log(ExpenssesCtx.expenses);
return(<ExpenssesOutput expenses={ExpenssesCtx.expenses} expensesPeriod="Total"
fallbackText={'No Expensses Registerd'}
/>
)
}

export default AllExpenses;