import {ACTIONTYPE} from '../Constants/ActionTypes';

export interface IToggleAction {
	//TODO: Change to string enums when available
	//type: ACTIONTYPE;
	type: string;
}

export function Toggle(): IToggleAction {
	return {
		type: ACTIONTYPE[ACTIONTYPE.Toggle]
	};
}
