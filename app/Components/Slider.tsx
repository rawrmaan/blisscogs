import * as React from 'react';

interface ISliderProps {
	index: number;
	name: string;
	min: number;
	max: number;
	onChange: () => void;
	step: number;
	value: number;
}

const COLORS: string[] = ['blue', 'green', 'red'];

class Slider extends React.Component<ISliderProps, {}> {
	public render(): React.ReactElement<{}> {

		const style: {} = {
			color: COLORS[this.props.index % COLORS.length]
		};

		const {name, min, max, step, value, onChange}: any = this.props;

		return (
			<div>
				<p style={style}>{name}</p>
				<input onChange={onChange}
				       name={name}
				       type='range'
				       min={min}
				       max={max}
				       step={step}
				       value={value}/>
				<span>{value}</span>
			</div>
		);
	}
}
export default Slider;
