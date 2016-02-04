import { ACTION } from '../Constants/Actions';
import { IToggleAction } from '../Actions/aToggle';

//TODO: Object.assign needs a polyfill

export const Toggle = (state = { isToggled: false }, action): any => {
	switch (action.type) {
		case ACTION.Toggle:
			//TODO: USe es7 spread when available in typescript
			//return {
			//	...state,
			//	isToggled: !state.isToggled,
			//}
			return Object.assign({}, state, { isToggled: !state.isToggled });
		default:
			return state;
	}
}
