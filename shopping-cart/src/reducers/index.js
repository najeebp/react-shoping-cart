import { combineReducers } from "redux"
import shopingCartReducer from './shopingCartReducer'

const shoppingCart = combineReducers({
    carts: shopingCartReducer
})

export default shoppingCart