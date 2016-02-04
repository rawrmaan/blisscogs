import { ACTION } from '../Constants/Actions';
import { ISliderAction } from '../Actions/aSlider';

export const Slider = (state = {}, action: ISliderAction) => {
	switch (action.type) {
		case ACTION.SliderChange:
			//TODO: change to es7 spread when available
			//return {
			//	...state,
			//	value: action.value
			//}
			return Object.assign({}, state, { value: action.value });
		default:
			return state;
	}
}
