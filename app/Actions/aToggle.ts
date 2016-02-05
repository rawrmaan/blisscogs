import { ActionType, TOGGLE } from '../Constants/ActionTypes';

export interface IToggleAction {
	//TODO: Change to string enums when available
	//type: ACTIONTYPE;
	type: ActionType;
}

export function Toggle(): IToggleAction {
	return {
		type: TOGGLE
	};
}
