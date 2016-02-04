interface IWaveformOption {
	label: string;
	value: number;
}

export const waveformOptions: IWaveformOption[] = [
	{
		label: 'Sine',
		value: 0,
	},
	{
		label: 'Square',
		value: 1,
	},
	{
		label: 'Sawtooth',
		value: 2,
	},
	{
		label: 'Triangle',
		value: 3,
	},
];

interface ISliderSetting {
	max: number;
	min: number;
	name: string;
	step: number;
	value: number;
}

export const sliderSettings: ISliderSetting[] = [
	{
		max: 1,
		min: 0,
		name: 'volume',
		step: 0.01,
		value: 0.6,
	},
	{
		max: 0.5,
		min: 0,
		name: 'delay',
		step: 0.001,
		value: 0.225,
	},
	{
		max: 0.9,
		min: 0,
		name: 'feedback',
		step: 0.1,
		value: 0.5,
	},
	{
		max: 1000,
		min: 0,
		name: 'scuzz',
		step: 1,
		value: 0,
	},
];
