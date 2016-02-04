import { createStore, applyMiddleware } from 'redux';
import Logger from './Middleware/Logger';
import {Reducers} from './Reducers/root';

// List all middleware functions
const middleware = [
	Logger
];

// Create the store
export default function(data) {
	const finalCreateStore = applyMiddleware(...middleware)(createStore);
	const store = finalCreateStore(Reducers, data);
	return store;
}
