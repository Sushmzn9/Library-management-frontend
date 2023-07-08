import { configureStore } from "@reduxjs/toolkit";
import burrowReducer from "./pages/BurrowHistory/BurrowSlice.js";
import userReducer from "./pages/signup-signin/userSlice";
import bookReducer from "./pages/Books/bookSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const userPresistConfig = {
  key: "userInfo",
  storage,
};

const persistedUserReducer = persistReducer(userPresistConfig, userReducer);
const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    bookInfo: bookReducer,
    burrowInfo: burrowReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
