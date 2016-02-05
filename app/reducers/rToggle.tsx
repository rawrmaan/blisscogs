import { TOGGLE } from '../Constants/ActionTypes';

interface IToggleState {
	isToggled: boolean;
}

//TODO: Object.assign needs a polyfill

export const Toggle = (state = { isToggled: false }, action): IToggleState => {
	switch (action.type) {
		case TOGGLE:
			//TODO: USe es7 spread when available in typescript
			//return {
			//	...state,
			//	isToggled: !state.isToggled,
			//}
			return Object.assign({}, state, { isToggled: !state.isToggled });
		default:
			return state;
	}
};
