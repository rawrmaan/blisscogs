import {ACTION} from '../Constants/Actions';

export interface IToggleAction {
	type: ACTION;
}

export function Toggle(): IToggleAction {
	return {
		type: ACTION.Toggle,
	};
}
