import {configureStore,combineReducers} from "@reduxjs/toolkit";
import {iexApi} from "./reducers/iex";

const rootReducer = combineReducers({
    [iexApi.reducerPath]: iexApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(iexApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']