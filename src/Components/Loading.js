import React, { Component } from 'react'
import loading from './images/loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="Loading...."  />
      </div>
    )
  }
}
