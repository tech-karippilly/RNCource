import { Text, View } from "react-native";
import ExpenssesOutput from "../components/ExpenssesOutputs/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDate } from "../Util/date";
import { getExpenses } from "../Util/http";
import LoadingOverLay from "../components/UI/LoadingOverLay";
import ErroOverLay from "../components/UI/ErrorOverlay";

function RecentExpenses(){
    const expenseCtx = useContext(ExpensesContext)
    const [isFetching ,setIsFetching] = useState(true)
    const [error,setError] = useState()

    useEffect(()=>{
        async  function getExpensses(){
            setIsFetching(true)
            try{
                const expensses = await getExpenses()
                expenseCtx.setExpenses(expensses)
            }catch(error){
                setError('Could not Fetch expensses')
            }
            setIsFetching(false)
            
           
        }
        getExpensses()
    },[])

    const recentExpensses = expenseCtx.expenses.filter((expenses)=>{
        const today = new Date()
        const date7DaysAgo = getDateMinusDate(today,7)
        const date = new Date(expenses.date)
        return date >= date7DaysAgo && date <= today
    })
    function errorHandler(){
        setError(null)
    }
    if (error){
        return <ErroOverLay  message={error} onConfirm={errorHandler}/>
    }
    if (isFetching){
        return <LoadingOverLay/>
    }
return(
    <ExpenssesOutput expenses={recentExpensses} expensesPeriod='Last 7 Days'    fallbackText={'No expensses Registered for last 7 days'}/>
)
}

export default RecentExpenses;