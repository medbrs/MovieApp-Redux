import { createStore } from 'redux'
import Reducers from './reducers';



const store = createStore(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());




export default store;