import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  version: 2,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  //Empty whiteList so we get the new data each time
}
// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
