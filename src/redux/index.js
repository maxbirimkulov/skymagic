import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from './reducers/user'
import banners from "./reducers/banners";


const rootReducer = combineReducers({
    user,
    banners,
});
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:false,
        }),
});

export const persistor = persistStore(store)
export default store
