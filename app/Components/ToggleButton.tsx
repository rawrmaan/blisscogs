import * as React from 'react';
import { connect } from 'react-redux';
import { Toggle } from '../Actions/aToggle';

interface IToggleProps {
	isOn?: boolean;
	dispatch?: Function;
}

function select(state: any): any {
	return {
		isOn: state.Toggle.isToggled
	};
}

@connect(select)
class ToggleButton extends React.Component<IToggleProps, {}> {

	public render(): React.ReactElement<{}> {
		const {isOn} = this.props;

		const attrs: any = {
			style: {
				backgroundColor: 'white',
				border: '2px solid black',
				color: (isOn) ? 'green' : 'red',
				fontSize: 40,
			},
		};

		return (
			<div>
				<button { ...attrs }
					onClick={() => this.onButtonClick()}>
					{isOn.toString()}
				</button>
			</div>
		);
	}

	private onButtonClick(): void {
		this.props.dispatch(Toggle());
	}
}
export default ToggleButton;
