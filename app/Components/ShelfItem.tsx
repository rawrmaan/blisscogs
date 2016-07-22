import * as React from 'react'
import * as _ from 'lodash'
import * as classnames from 'classnames'

import {DropTarget} from 'react-dnd'
import {ReleaseItem} from '../Constants/ItemType'

interface ShelfItemProps {
  canDrop?: boolean,
  connectDropTarget?: Function,
  shelfName: string,
  isEditing: boolean,
  isOver?: boolean,
  isSelected: boolean,
  moveItem: (toShelfName: string, id: string) => any,
  removeShelf: Function,
  renameShelf: Function,
  selectShelf: Function,
  shelfItemCount: number,
  toggleRename: Function
}

const shelfTarget = {
  canDrop(props: ShelfItemProps) {
    return !props.isSelected
  },

  drop(props: ShelfItemProps, monitor, component) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    props.moveItem(props.shelfName, item.id)
  }
}

function collect(connect, monitor) {
  return {
    canDrop: monitor.canDrop(),
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    itemType: monitor.getItemType()
  };
}

class ShelfItem extends React.Component<ShelfItemProps, {}> {
  constructor(props) {
    super(props)

    this.handleInputKeyPress = this.handleInputKeyPress.bind(this)
  }

  handleInputKeyPress(shelfName: string, e) {
    if (e.key === 'Enter') {
      this.props.toggleRename(null)
      this.props.renameShelf(shelfName, e.target.value)
    }
  }

  render() {
    const {
      canDrop,
      connectDropTarget,
      shelfItemCount,
      shelfName,
      isEditing,
      isOver,
      isSelected
    } = this.props

    const cn = classnames as any // Ugh cmon typescript...
    const className = cn.default({
      selected: isSelected,
      over: isOver,
      droppable: canDrop && !isOver
    })

    let titleComponent: string | JSX.Element = (
      <span>{shelfName} <span className="count">{shelfItemCount}</span></span>
    )

    if (isEditing) {
      titleComponent =
        <input
          type="text"
          onKeyPress={this.handleInputKeyPress.bind(null, shelfName)}
        />
    }

    return (
      connectDropTarget(
        <li className={className}>
          <div className="shelf-item">
            <div className="title" onClick={this.props.selectShelf.bind(null, shelfName)}>
              {titleComponent}
            </div>
            <div className="actions">
              <img src="./rename.png" onClick={this.props.toggleRename.bind(null, shelfName)} />
              <img src="./delete.png" onClick={this.props.removeShelf.bind(null, shelfName)} />
            </div>
          </div>
        </li>
      )
    )
  }
}

export default DropTarget(ReleaseItem, shelfTarget, collect)(ShelfItem)
