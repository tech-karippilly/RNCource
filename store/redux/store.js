import {configureStore} from '@reduxjs/toolkit'
import favorateSlice from './favorates'


export const store = configureStore({
    reducer:{
        favorateMeals:favorateSlice
    }
})

