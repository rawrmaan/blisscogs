import * as React from 'react';
import { connect, Provider } from 'react-redux';

//import { incrementCounter, decrementCounter, addCounter } from '../actions';
//import CounterList from './counter_list';
import Body from './Body';


interface IAppProps {
	store: any;
}

function select(state, props) {
	return {
		name: state.name
	};
}

@connect(select)
class App extends React.Component<any, {}> {
	public render(): React.ReactElement<{}> {

		return (
			<Body/>
		);
	}
}
export default App;
