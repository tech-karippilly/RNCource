import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../components/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpesesFrom from "../components/ManageExpense/ExpensesForm";

function ManageExpenses({ navigation, route }) {
    const expenseCtx = useContext(ExpensesContext)
    const expenseId = route.params?.expenseId
    const isEdited = !!expenseId
    const selectedExpenses = expenseCtx.expenses.find((expenses)=>expenses.id ===expenseId )
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdited ? 'Edit Expenses' : 'Add Expenses'
        })
    }, [navigation, isEdited])
    function deleteExpensesHandler() {
        expenseCtx.deletExpense(expenseId)
        navigation.goBack()
    }
    function cancelHandler() {
        navigation.goBack()
    }
    function confrimHandler(expenseData) {
        if (isEdited) {
            expenseCtx.updateExpense(
                expenseId,
                expenseData
            )
        } else {
            expenseCtx.addExpense(expenseData)
        }
        navigation.goBack()
    }
    return (
        <View style={style.container}>
            <ExpesesFrom defaultValues={selectedExpenses} onSubmit={confrimHandler} onCancel={cancelHandler} buttonText={isEdited ? 'Update' : 'Add'}/>
            
            {isEdited &&
                <View style={style.deleteContainer}>
                    <IconButton iconName={'trash'} color={GlobalStyles.colors.error500} size={36} OnPress={deleteExpensesHandler} />
                </View>
            }
        </View>
    )
}

export default ManageExpenses;

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        minWidth: 120,
        marginHorizontal: 8
    }
})