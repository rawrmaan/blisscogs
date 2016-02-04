import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
	Store,
	compose,
	//createStore,
	bindActionCreators,
	combineReducers
} from 'redux';

import {
	connect,
	Provider
} from 'react-redux';

//import { Action } from 'redux-actions';

import createStore from './CreateStore'

import App from './Components/App';

//Initialize app with start data
const initialState = {};

const store: any = createStore(initialState);





//import { counterApp } from './reducers/reducers';

//interface IHotModule {
//	hot?: { accept: (path: string, callback: () => void) => void };
//}
//
//
//declare const module: IHotModule;
//
//function configureStore(): Store {
//	const store: Store = createStore(counterApp);
//
//	if (module.hot) {
//		module.hot.accept('./reducers', () => {
//			const nextRootReducer: any = require('./reducers/reducers').counterApp;
//			store.replaceReducer(nextRootReducer);
//		});
//	}
//
//	return store;
//}
//
//const store: Store = configureStore();

class Main extends React.Component<{}, {}> {
	public render(): React.ReactElement<Provider> {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));
