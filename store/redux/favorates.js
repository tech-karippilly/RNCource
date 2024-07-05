import {createSlice} from '@reduxjs/toolkit'


const initialState={
    ids:[]
}
const favorateSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{
        addFavorates:(state,action)=>{
            state.ids.push(action.payload.id)
        },
        removeFavaorate:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})

export const addFavirotes = favorateSlice.actions.addFavorates;
export const removeFavaorate = favorateSlice.actions.removeFavaorate;
export default favorateSlice.reducer;
