import { createStore, applyMiddleware } from 'redux'
import Logger from './Middleware/Logger'
//import * as reducers from './Reducers/root'
import {Reducers} from './Reducers/root'

// List all middleware functions
const middleware = [
	Logger,
]

// Create the store
export default function(data) {
	var finalCreateStore = applyMiddleware(...middleware)(createStore);
	var store = finalCreateStore(Reducers, data);
	return store;
}
