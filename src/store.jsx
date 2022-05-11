import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers';
 
const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, reducers)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}





// اینجا یه متغیر نوشتیم و گفتیم که برو از طریق ریدیوسر ها یه استور بساز
// const store = createStore(reducers);
// export default store;



