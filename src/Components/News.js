import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import PropTypes from 'prop-types'

export class news extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div>
        <h1>This is a news component.</h1>
        <NewsItem/>
      </div>
    )
  }
}

export default news
