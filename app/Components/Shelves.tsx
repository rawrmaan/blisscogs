import * as React from 'react'
import * as _ from 'lodash'
import { connect } from 'react-redux'

import {ShelvesSelector, ShelvesSelectorProps} from '../Selectors/selectors'
import {
  addShelf,
  moveItem,
  removeShelf,
  renameShelf,
  setCurrentShelf
} from '../Reducers/shelves'

import ShelfItem from './ShelfItem'

interface ShelvesProps extends ShelvesSelectorProps {
  dispatch?: Function
}

interface ShelvesState {
  editingShelfName?: string
}

class Shelves extends React.Component<ShelvesProps, ShelvesState> {
  constructor(props) {
    super(props)

    this.addShelf = this.addShelf.bind(this)
    this.moveItem = this.moveItem.bind(this)
    this.removeShelf = this.removeShelf.bind(this)
    this.renameShelf = this.renameShelf.bind(this)
    this.selectShelf = this.selectShelf.bind(this)
    this.toggleRename = this.toggleRename.bind(this)

    this.state = {editingShelfName: undefined}
  }

  getShelves() {
    return _.map(this.props.shelves, (val, key) => {
      const isSelected = this.props.currentShelf === key
      const isEditing = this.state.editingShelfName === key
      const Shelf = ShelfItem as any

      return (
        <Shelf
          shelfName={key}
          isEditing={isEditing}
          isSelected={isSelected}
          moveItem={this.moveItem}
          removeShelf={this.removeShelf}
          renameShelf={this.renameShelf}
          selectShelf={this.selectShelf}
          shelfItemCount={val && val.length}
          toggleRename={this.toggleRename}
        />
      )
    })
  }

  addShelf() {
    this.props.dispatch(addShelf('New Shelf'))
  }

  moveItem(toShelfName: string, id: number) {
    const fromShelfName = this.props.currentShelf
    this.props.dispatch(moveItem(fromShelfName, toShelfName, id))
  }

  selectShelf(shelfName: string) {
    this.props.dispatch(setCurrentShelf(shelfName))
  }

  removeShelf(shelfName: string) {
    this.props.dispatch(removeShelf(shelfName))
  }

  renameShelf(oldName: string, newName: string) {
    this.props.dispatch(renameShelf(oldName, newName))
  }

  toggleRename(shelfName: string) {
    this.setState({editingShelfName: shelfName})
  }

  render() {
    const allReleasesClassName = this.props.currentShelf ? '' : 'selected'

    return (
      <div id="shelves">
        <ul>
          <li
            className={allReleasesClassName}
            onClick={this.selectShelf.bind(null, null)}
          >
            All Unshelved Releases
          </li>
        </ul>
        <h6>MY SHELVES</h6>
        <ul>
          {this.getShelves()}
        </ul>
        <a className="add" onClick={this.addShelf}>
          + ADD SHELF...
        </a>
      </div>
    )
  }
}

export default connect(ShelvesSelector)(Shelves)
