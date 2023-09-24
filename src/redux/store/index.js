import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import homeReducer from "../reducer/homeReducer";
import albumReducer from "../reducer/AlbumReducer";
import artistReducer from "../reducer/ArtistReducer";
import searchReducer from "../reducer/SearchReducer";
import audioReducer from "../reducer/AudioReducer";
import playListReducer from "../reducer/PlayListReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  home: homeReducer,
  album: albumReducer,
  artist: artistReducer,
  search: searchReducer,
  audio: audioReducer,
  list: playListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
