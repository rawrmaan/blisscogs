import {ACTIONTYPE} from '../Constants/ActionTypes';

export interface IToggleAction {
	type: ACTIONTYPE;
}

export function Toggle(): IToggleAction {
	return {
		type: ACTIONTYPE.Toggle
	};
}
