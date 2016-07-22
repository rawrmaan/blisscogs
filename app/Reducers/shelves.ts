import {ReduxAction, Release} from '../interfaces'
import * as _ from 'lodash'

const ADD_SHELF = 'shelves/ADD_SHELF'
const REMOVE_SHELF = 'shelves/REMOVE_SHELF'
const RENAME_SHELF = 'shelves/RENAME_SHELF'

const MOVE_ITEM = 'shelves/MOVE_ITEM'
const REMOVE_ITEM = 'shelves/REMOVE_ITEM'

const SET_CURRENT_SHELF = 'shelves/SET_CURRENT_SHELF'
const SET_CURRENT_GROUPING = 'shelves/SET_CURRENT_GROUPING'

enum ShelfGrouping {
  None,
  Alphabetical,
  Yearly
}

interface ShelfCollection {
  [id: string]: number[]
}

export interface ShelvesState {
  shelves?: ShelfCollection,
  currentShelf?: string,
  currentGrouping?: ShelfGrouping
}

const initialState = {
  shelves: <ShelfCollection>{}
}

// Lots of state mutation in here. Would normally use Immutable.js
export const Shelves = (state: ShelvesState = initialState, action: ReduxAction): ShelvesState => {
  switch (action.type) {
    case ADD_SHELF:
      if (!state.shelves[action.payload.name]) {
        const shelves = Object.assign({}, state.shelves, {[action.payload.name]: []})
        return Object.assign({}, state, {shelves})
      }

      return state

    case REMOVE_SHELF:
      const removedShelves = _.cloneDeep(state.shelves)
      _.unset(removedShelves, action.payload.name)
      return Object.assign({}, state, {
        shelves: removedShelves
      })

    case RENAME_SHELF:
      const renamedState = _.cloneDeep(state)
      renamedState.shelves[action.payload.newName] = state.shelves[action.payload.name]
      delete renamedState.shelves[action.payload.name]

      if (renamedState.currentShelf === action.payload.name) {
        renamedState.currentShelf = action.payload.newName
      }

      return renamedState

    case REMOVE_ITEM:
      const itemRemovedShelves = _.cloneDeep(state.shelves)
      const index = itemRemovedShelves[action.payload.shelfName].indexOf(action.payload.id)
      itemRemovedShelves[action.payload.shelfName].splice(index, 1)
      return Object.assign({}, state, {
        shelves: itemRemovedShelves
      })

    case MOVE_ITEM: 
      const movedShelves = _.cloneDeep(state.shelves)

      if (action.payload.fromShelfName) {
        const fromIndex = movedShelves[action.payload.fromShelfName].indexOf(action.payload.id)
        movedShelves[action.payload.fromShelfName].splice(fromIndex, 1)
      }

      if (!movedShelves[action.payload.toShelfName]) {
        movedShelves[action.payload.toShelfName] = []
      }

      if (!_.includes(movedShelves[action.payload.toShelfName], action.payload.id)) {
        movedShelves[action.payload.toShelfName].push(action.payload.id)
      }

      return Object.assign({}, state, {
        shelves: movedShelves
      })

    case SET_CURRENT_SHELF:
      return Object.assign({}, state, {currentShelf: action.payload.shelfName})

    case SET_CURRENT_SHELF:
      return Object.assign({}, state, {currentGrouping: action.payload.grouping})

    default:
      return state
  }
}

export function addShelf(name: string): ReduxAction {
  return {type: ADD_SHELF, payload: {name}}
}

export function removeShelf(name: string): ReduxAction {
  return {type: REMOVE_SHELF, payload: {name}}
}

export function renameShelf(name: string, newName: string): ReduxAction {
  return {type: RENAME_SHELF, payload: {name, newName}}
}

export function removeItem(shelfName: string, id: number): ReduxAction {
  return {type: REMOVE_ITEM, payload: {shelfName, id}}
}

export function moveItem(fromShelfName: string, toShelfName: string, id: number): ReduxAction {
  return {type: MOVE_ITEM, payload: {fromShelfName, toShelfName, id}}
}

export function setCurrentShelf(shelfName: string): ReduxAction {
  return {type: SET_CURRENT_SHELF, payload: {shelfName}}
}

export function setCurrentGrouping(grouping: string): ReduxAction {
  return {type: SET_CURRENT_GROUPING, payload: {grouping}}
}
