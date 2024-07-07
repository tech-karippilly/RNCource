import { Text, View } from "react-native";
import ExpenssesOutput from "../components/ExpenssesOutputs/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getExpenses } from "../Util/http";

function AllExpenses(){
    // const ExpenssesCtx = useContext(ExpensesContext)
    const [fetchExpensses ,setFetchExpensses] = useState([])

    useEffect(()=>{
        async  function getExpensses(){
           const expensses = await getExpenses()
           console.log(expensses);
           setFetchExpensses(expensses)
        }
        getExpensses()
    },[])
    
return(<ExpenssesOutput expenses={fetchExpensses} expensesPeriod="Total"
fallbackText={'No Expensses Registerd'}
/>
)
}

export default AllExpenses;