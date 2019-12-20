//Coment

import { combineReducers } from 'redux'
import reducer1 from './myreducer'
import reducer2 from './myreducer2'
const reducer = combineReducers({ reducer1, reducer2})
export default reducer