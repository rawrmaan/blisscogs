import {ReduxAction, ReduxActionAPIResponse, Release} from '../interfaces'
import createPromiseActionType from '../createPromiseActionType'
import * as axios from 'axios'
import * as _ from 'lodash'

const api = axios.create({baseURL: '/api/'})

const LOAD_RELEASES = createPromiseActionType('releases/LOAD_RELEASES')

interface ReleasesObject {
	[id: number]: Release
}

export interface ReleasesState {
  items: ReleasesObject,
  nextPage: number,
  loadingPage?: number
}

const initialState = {
	items: <ReleasesObject>{},
	nextPage: 1
}

export const Releases = (state: ReleasesState = initialState, action: ReduxActionAPIResponse): ReleasesState => {
	switch (action.type) {
		case LOAD_RELEASES.pending:
			return _.assign({}, state, {
				loadingPage: action.meta.page
			}) as ReleasesState

		case LOAD_RELEASES.fulfilled: 
			return _.assign({}, state, {
				items: _.assign(state.items, _.keyBy(action.payload.data.items, 'id')),
				nextPage: action.payload.data.nextPage,
				loadingPage: null
			}) as ReleasesState

		default:
			return state
	}
};

export function loadReleases(page: number): ReduxAction {
	console.error(new Error('wat'))
	return {
		type: LOAD_RELEASES.type,
		payload: {
			promise: api.get(`releases/${page}`)
		},
		meta: {
			page
		}
	}
}
