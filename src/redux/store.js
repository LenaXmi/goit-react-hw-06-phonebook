import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import phonebookReducer from "./phonebook/phonebook-reducers";

const persistConfig = {
  key: "contacts",
  storage,
};

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);
export default { store, persistor };
