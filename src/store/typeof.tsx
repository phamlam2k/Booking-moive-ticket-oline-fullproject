import store from "."
import rootReducer from "../reducer"

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>