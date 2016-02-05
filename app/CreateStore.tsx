import { createStore, applyMiddleware } from 'redux';
import Logger from './Middleware/Logger';
import {Reducers} from 'reducers_/root';

interface IHotModule {
	hot?: { accept: (path: string, callback: () => void) => void };
};

declare const module: IHotModule;

// List all middleware functions
const middleware = [
	Logger
];

// Create the store
export default function(data) {
	const finalCreateStore = applyMiddleware(...middleware)(createStore);
	const store = finalCreateStore(Reducers, data);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./Reducers/root', () => {
			const nextRootReducer = require('./reducers_/root').Reducers;
			store.replaceReducer(nextRootReducer);
		});
	}
	return store;
}
