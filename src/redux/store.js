import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phonebookReducer from "./phonebook/phonebook-reducers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: "filter",
};

export const store = configureStore({
  reducer: {
    phonebook: persistReducer(contactsPersistConfig, phonebookReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);

//Vanilla redux
// const rootReducer = combineReducers({
//   phonebook: persistReducer(contactsPersistConfig, phonebookReducer),
// });

// const store = createStore(rootReducer, composeWithDevTools());
