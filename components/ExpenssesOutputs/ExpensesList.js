import { FlatList, Text } from "react-native";
import ExpensesItem from "./ExpensesItem";

function renderExpensesItem(itemData) {
    return (<ExpensesItem {...itemData.item} />)
}

function ExpensesList({ expenssesList }) {
    return (
        <FlatList data={expenssesList} keyExtractor={(expenses) => expenses.id} renderItem={renderExpensesItem} />
    )
}
export default ExpensesList;

