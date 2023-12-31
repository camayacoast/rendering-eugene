import { createStore } from 'redux'
import rootReducer from './reducers'
import middlewares from './middlewares'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
  
export const store = createStore(
        persistedReducer,
        middlewares
    )
    
export const persistor = persistStore(store);