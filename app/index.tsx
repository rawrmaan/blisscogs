import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './Components/App';

require('../css/index.less')

class Main extends React.Component<{}, {}> {
	public render(): React.ReactElement<Provider> {
		return (
			<Provider store={configureStore()}>
				<App />
			</Provider>
		);
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));
