import {applyMiddleware, createStore,compose} from 'redux'
import thunk from "redux-thunk"
import rootReducer from "./../Reducers"
// import storage from "redux-persist/lib/storage"
// import { persistReducer,persistStore } from 'redux-persist'


// const persistConfig={
//   key:"root",
//   Storage:storage,
// }

// const persistedReducer=persistReducer(persistConfig,rootReducer)

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ||compose;


const Store = createStore(rootReducer, {},
  composeEnhancers(applyMiddleware(thunk)))

  // const persistor=persistStore(Store);


export default Store