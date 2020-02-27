import { createStore } from 'redux'
import cakeReduces from './cake/cakeReducer'

const store = createStore(cakeReduces)

export default store
