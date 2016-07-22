import * as React from 'react'
import * as _ from 'lodash'
import {DragSource} from 'react-dnd'

import {Release} from '../interfaces'
import {ReleaseItem} from '../Constants/ItemType'

interface ReleaseTileProps {
  release: Release,
  removeItem: Function,
  connectDragSource?: any,
  isDragging?: boolean
}

const releaseSource = {
  beginDrag(props: ReleaseTileProps) {
    return {id: props.release.id}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class ReleaseTile extends React.Component<ReleaseTileProps, any> {
  stringifyArray(array: any[]) {
    return _.map(array, 'name').join(', ')
  }

  render() {
    const {connectDragSource, release} = this.props

    const style = {
      backgroundImage: `url(\'${release.basic_information.thumb}\')`
    }

    let removeElement = <span />
    if (this.props.removeItem) {
      removeElement = (
        <div className="remove" onClick={this.props.removeItem.bind(null, release.id)}>
          Remove
        </div>
      )
    }

    return (
      connectDragSource(
        <div className="release">
          <div className="preview-image" style={style}>
          </div>
          <div className="title">
            {release.basic_information.title}
          </div>
          <div>
            {this.stringifyArray(release.basic_information.artists)}
          </div>
          <div className="sub-meta">
            {release.basic_information.year} ·&nbsp;
            {this.stringifyArray(release.basic_information.formats)}
          </div>
          <div className="sub-meta">
            {this.stringifyArray(release.basic_information.labels)}
          </div>
          {removeElement}
        </div>
      )
    )
  }
}

export default DragSource(ReleaseItem, releaseSource, collect)(ReleaseTile)