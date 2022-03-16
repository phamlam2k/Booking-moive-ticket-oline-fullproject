import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "todoUser",
    initialState: null,
    reducers: {
        addUser(state, action){
            return action.payload
        }
    }
})

const  {reducer, actions} = user
export const { addUser } = actions
export default reducer