import * as React from 'react'
import { connect } from 'react-redux'

import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import {ReleasesSelector, ReleasesSelectorProps} from '../Selectors/selectors'
import * as ReleaseActions from '../Reducers/releases'
import * as ShelfActions from '../Reducers/shelves'

import Releases from './Releases'
import Shelves from './Shelves'

interface AppProps extends ReleasesSelectorProps {
	dispatch?: Function
}

class App extends React.Component<AppProps, {}> {
  constructor(props) {
    super(props)
    

    this.removeItem = this.removeItem.bind(this)
  }

	componentDidMount() {
		if (this.props.releases.length === 0) {
			console.log('mount load')
			this.loadReleases(1)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (!this.props.currentShelf &&
				!prevProps.currentShelf &&
				this.props.nextPage &&
				prevProps.releases.length < this.props.releases.length) {
			console.log('update load')
			this.loadReleases(this.props.nextPage)
		}
	}

	loadReleases(page: number) {
		this.props.dispatch(ReleaseActions.loadReleases(page))
	}

	removeItem(id: number) {
		this.props.dispatch(ShelfActions.removeItem(this.props.currentShelf, id))
	}

	render() {
		return (
			<div id="body-wrapper">
				<div id="top-nav">
					<div id="logo">
						<img src="/logo.png" />
					</div>
				</div>
				<div id="left-pane">
					<Shelves />
				</div>
				<div id="right-pane">
					<Releases
						currentShelf={this.props.currentShelf}
						loading={this.props.loading}
						releases={this.props.releases}
						removeItem={this.removeItem}
					/>
				</div>
			</div>
		)
	}
}

export default connect(ReleasesSelector)(
	DragDropContext(HTML5Backend)(App)
)
