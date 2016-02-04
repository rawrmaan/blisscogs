import * as React from 'react';
import { connect } from 'react-redux'
import { Toggle } from '../Actions/aToggle'


interface IWaveformOptions {
	options: IWaveformOption[];
}

interface IWaveformOption {
	value: number;
	label: string;
}

function select(state) {
	return {
		isOn: state.Toggle.isToggled,
	};
}

@connect(select)
class WaveformOptionGroup extends React.Component<any, {}> {

	private onButtonClick() {
		this.props.dispatch(Toggle())
	}

	public render(): React.ReactElement<{}> {
		const {isOn} = this.props;

		const attrs = {
			style: {
				color: (isOn)? 'green' : 'red',
			},
		};

		return (
			<div>
				<h1>Toggle value: {isOn.toString()}</h1>
				<button { ...attrs } onClick={() => this.onButtonClick()}>Get time!</button>
			</div>
		);
	}
}
export default WaveformOptionGroup;
