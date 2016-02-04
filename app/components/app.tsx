import * as React from 'react';
import { connect } from 'react-redux';

import ToggleButton from './ToggleButton';

function select(state, props) {
	return {
		name: state.name
	};
}

@connect(select)
class App extends React.Component<any, {}> {
	public render(): React.ReactElement<{}> {

		return (
			<div id='body-wrapper'>
				<h1>React, Redux, Typescript & Webpack Boilerplate</h1>
				<p>Toggling this button dispatches actions with Redux</p>
				<ToggleButton/>
			</div>
		);
	}
}
export default App;
