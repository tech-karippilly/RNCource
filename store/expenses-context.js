import { createContext, useReducer } from "react";


const DUMMY_EXPENSES =[
    {
        id:'e1',
        description:'A shoe',
        amount:59.99,
        date: new Date('2024-05-19')
    },
    {
        id:'e2',
        description:'A Touser',
        amount:59,
        date: new Date('2024-05-20')
    },
    {
        id:'e3',
        description:'A Touser',
        amount:110,
        date: new Date('2024-07-02')
    }
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deletExpense: ({ id }) => { },
    updateExpense: (id, { description, amount, date }) => { }
})

function expenseReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() +Math.random().toString()
            return[{...action.payload,id:id},...state,]
            
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expenses)=>expenses.id === action.payload.id)
            const updatableExpense = state[updatableExpenseIndex];
            const updateItem = {...updatableExpense,...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex]=updateItem
            return updatedExpenses
        case 'DELETE':
            return state.filter((expenses)=>expenses.id  !== action.payload)
       
        default:
            return state;
      
    }

}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expenseReducer,DUMMY_EXPENSES)
    function addExpens(expensData) {
        dispatch({ type: 'ADD', payload: expensData })
    }
    function deletExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }
    function updateExpense(id, expensData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expensData } })
    }
    const value = {
        expenses:expensesState,
        addExpense:addExpens,
        deletExpense:deletExpense,
        updateExpense:updateExpense
    }
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;