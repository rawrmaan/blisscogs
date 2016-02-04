import * as React from 'react';
import TouchArea from './TouchArea';
import WaveformOptionGroup from './WaveformOptionGroup';
import {waveformOptions} from '../config';

class Body extends React.Component<{}, {}> {

	public render(): React.ReactElement<{}> {

		return (
			<div id='body-wrapper'>
				<header className='title'>
					<h1>Theremin</h1>
				</header>
				<section className='oscillator'>
					<h2>Waveform</h2>
					<WaveformOptionGroup options={waveformOptions}/>
				</section>
				<section className='surface'>
					<TouchArea></TouchArea>
				</section>
				<section className='row'>

				</section>
			</div>
		);
	}
}
export default Body;
