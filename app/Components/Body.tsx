import * as React from 'react';
import ToggleButton from './ToggleButton';

class Body extends React.Component<{}, {}> {

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
export default Body;
