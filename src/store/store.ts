import {combineReducers, createStore} from "redux";
import {mainReducer} from "./mainReducer/mainReducer";

const rootReducer = combineReducers({
    main: mainReducer
})

export const store = createStore(rootReducer)

export interface Action<T, P>{
    type: T,
    payload: P
}

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch