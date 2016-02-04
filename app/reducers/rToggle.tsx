import { ACTIONTYPE } from '../Constants/ActionTypes';

interface IToggleState {
	isToggled: boolean;
}

//TODO: Object.assign needs a polyfill

export const Toggle = (state = { isToggled: false }, action): IToggleState => {
	switch (action.type) {
		case ACTIONTYPE.Toggle:
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
