import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, compose, createStore} from "redux";
import allReducers from "../Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["isLogged"] // which reducer want to store
};

const middleware = [thunk];
// if (process.env.NODE_ENV === "development") {
    middleware.push(createLogger());
// }

const pReducer = persistReducer(persistConfig, allReducers);

// default middleware
const store = createStore(
    pReducer,
    // allReducers,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;

export const persistor = persistStore(store);
