import * as React from 'react'
import {Release} from '../interfaces'

import {removeItem} from '../Reducers/shelves'

import ReleaseTile from './ReleaseTile'

interface ReleasesProps {
  currentShelf: string,
  releases: Release[],
  removeItem: Function,
  loading: boolean
}

export default class Releases extends React.Component<ReleasesProps, any> {
  getLoading() {
    let className = 'loading-wrapper'
    if (!this.props.loading) className += ' done'

    return ( 
      <div className={className}>
        <div className="loading">
          <div>
            <img src="./loading.gif" />
          </div>
          <div>
            LOADING YOUR BLISS...
          </div>
        </div>
      </div>
    )
  }

  getReleases() {
    return this.props.releases.map((release) => {
      let removeItemAction: Function = () => {}
      if (this.props.currentShelf) {
        removeItemAction = this.props.removeItem
      }

      return (
        <ReleaseTile
          key={release.id}
          release={release}
          removeItem={removeItemAction}
         />
      )
    })
  }

  render() {
    return (
      <div id="releases">
        {this.getLoading()}
        {this.getReleases()}
      </div>
    )
  }
}