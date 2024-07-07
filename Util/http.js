import axios from 'axios'
 const baseUrl = 'https://react-native-cource-6f24e-default-rtdb.firebaseio.commm/'

export  async function storeExpense(expenseData){
const response =await axios.post(baseUrl+'expenses.json',
expenseData
)
const id = response.data.name
return id
}
export async  function getExpenses(){
   const response = await axios.get(baseUrl+'expenses.json')
    const expenses = []
    for (const key in response.data){
        const expensObj={
            id:key,
            amount:response.data[key].amount,
            date:response.data[key].date,
            description:response.data[key].description,
        }
        expenses.push(expensObj)
    }
    return expenses
}

export async function updateExpensses(id,expensData){
   return await axios.put(baseUrl+`expenses/${id}.json`,expensData)
}

export async function deleteExpensses(id){
    return axios.delete(baseUrl+`expenses/${id}.json`)
}