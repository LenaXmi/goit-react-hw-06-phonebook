import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import phonebookReducer from "./phonebook/phonebook-reducers";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const rootReducer = combineReducers({
  phonebook: persistReducer(contactsPersistConfig, phonebookReducer),
});

const store = createStore(rootReducer, composeWithDevTools());
const persistor = persistStore(store);
export default { store, persistor };
