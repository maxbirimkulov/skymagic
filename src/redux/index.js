import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from './reducers/user'
import banners from "./reducers/banners";
import vacancies from "./reducers/vacancies";
import gallery from "./reducers/gallery";
import reviews from "./reducers/reviews";
import sales from "./reducers/sales";
import events from "./reducers/events";



const rootReducer = combineReducers({
    user,
    banners,
    vacancies,
    gallery,
    reviews,
    sales,
    events : events
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
