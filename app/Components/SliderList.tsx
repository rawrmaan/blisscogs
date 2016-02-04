//import * as React from 'react';
//
//import Slider from './Slider';
//
//interface ISliderListProps {
//	counters: number[];
//	change: (index: number) => void;
//}
//
//class SliderList extends React.Component<ISliderListProps, {}> {
//	public render(): React.ReactElement<{}> {
//		const {increment, decrement}: any = this.props;
//
//
//
//		return (<ul>
//			{this.props.counters.map((value: number, index: number) =>
//			<li key={index}>
//				<Slider
//					index={index}
//					onChange={() => change(index)}
//					value={value}
//				    name={}
//				    min={}
//				    step={}
//				    value={}
//				/>
//				<Slider onChange={() => change(index)} name='volume' min={0} max={1} step={0.01} value={0.6}/>
//				<Slider onChange={() => change(index)} name='delay' min={0} max={0.5} step={0.001} value={0.225}/>
//				<Slider onChange={() => change(index)} name='feedback' min={0} max={0.9} step={0.1} value={0.5}/>
//				<Slider onChange={() => change(index)} name='scuzz' min={0} max={1000} step={1} value={0}/>
//			</li>
//				)}
//		</ul>);
//	}
//}
//export default SliderList;

