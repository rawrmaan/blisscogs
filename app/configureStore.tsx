import { createStore, applyMiddleware, compose } from 'redux';
import Logger from './Middleware/Logger';
import rootReducer from './Reducers/root';
import promiseMiddleware from 'redux-promise-middleware'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'

declare const module: IHotModule;
interface IHotModule {
	hot?: { accept: (path: string, callback: () => void) => void };
};

// HTML5 Local Storage
const reducer = storage.reducer(rootReducer)
const engine = createEngine('blisscogs')
const storageMiddleware = storage.createMiddleware(engine)
const storageLoader = storage.createLoader(engine)

// Apply middleware
const middleware = [promiseMiddleware(), Logger, storageMiddleware]

const enhancer = compose(
	applyMiddleware(...middleware)
)

// Create the store
export default function configureStore() {
	const store = createStore(reducer, {}, enhancer)
	storageLoader(store) // Load HTML5 Local Storage data

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./Reducers/root', () => {
			const nextRootReducer = require('./Reducers/root').default;
			store.replaceReducer(nextRootReducer);
		});
	}
	return store;
}
