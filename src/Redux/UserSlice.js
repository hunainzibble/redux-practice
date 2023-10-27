import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
    names: '',
    val: '',
}

export const userSlice = createSlice({
    name: 'select by Month',
    initialState,
    reducers: {
        clg: (state) => {
            state.value = 'jjjj'
        },
        changeval: (state, action) => {
            state.val = action.payload
        },
        names: (state, action) => {
            state.names = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { clg, changeval, names } = userSlice.actions

export default userSlice.reducer