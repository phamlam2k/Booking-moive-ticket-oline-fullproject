import { combineReducers } from "@reduxjs/toolkit";
const { default: userReducer } = require("./user");


const rootReducer: any = combineReducers({
    user: userReducer,
});

export default rootReducer;
