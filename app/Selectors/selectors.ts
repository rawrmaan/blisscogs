import {createSelector} from 'reselect'
import * as _ from 'lodash'

import {Release} from '../interfaces'
import {ReleasesState} from '../Reducers/releases'
import {ShelvesState} from '../Reducers/shelves'

const releasesStateSelector = (state) => {
  return state.Releases
}

const shelvesStateSelector = (state) => {
  return state.Shelves
}

export interface ReleasesSelectorProps {
  currentShelf?: string,
  loading?: boolean,
  nextPage?: number,
  releases?: Release[]
}

export const ReleasesSelector = createSelector(
  releasesStateSelector,
  shelvesStateSelector,
  (releasesState: ReleasesState, shelvesState: ShelvesState) => {
    let releasesArray = _.toArray(releasesState.items)

    if (shelvesState.currentShelf) {
      const currentShelfIds = shelvesState.shelves[shelvesState.currentShelf]
      releasesArray = _.filter(releasesArray, (release: Release) => {
        return _.includes(currentShelfIds, release.id)
      })
    } else {
      const allShelvedReleaseIds = _.flatten(_.concat(_.values(shelvesState.shelves)))
      releasesArray = _.filter(releasesArray, (release: Release) => {
        return !_.includes(allShelvedReleaseIds, release.id)
      })
    }

    releasesArray = _.sortBy(releasesArray, 'basic_information.title')

    return {
      currentShelf: shelvesState.currentShelf,
      loading: releasesState.loadingPage !== null,
      nextPage: releasesState.nextPage,
      releases: releasesArray
    }
})

export interface ShelvesSelectorProps extends ShelvesState {}

export const ShelvesSelector = createSelector(
  shelvesStateSelector,
  (shelvesState: ShelvesState) => {
    return shelvesState
  }
)
