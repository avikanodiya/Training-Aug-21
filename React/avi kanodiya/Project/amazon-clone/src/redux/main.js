import { getProductsReducers, getCategoryReducers, addCartReducers } from './reducer'
import { combineReducers } from 'redux'

const rootreducers = combineReducers({
    getproductsdata: getProductsReducers,
    getcategorydata: getCategoryReducers,
    addcartdata:addCartReducers
})

export default rootreducers