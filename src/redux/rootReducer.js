import { combineReducers } from "redux"
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import coffeeReducer from "./coffee/coffeReducer"

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  coffee: coffeeReducer
})

export default rootReducer