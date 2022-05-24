import { combineReducers } from "redux";
import { mrpReducer } from "./mrp-reducer";

export const rootReducer = combineReducers({
    mrp: mrpReducer,
})

export type RootState = ReturnType<typeof rootReducer>