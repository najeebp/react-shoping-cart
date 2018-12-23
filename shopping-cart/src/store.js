import { createStore } from 'redux'
import shoppingCart  from './reducers'

const initialState = {}
const store = createStore(shoppingCart, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store