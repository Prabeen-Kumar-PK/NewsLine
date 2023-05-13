import React from 'react'
import loading from './images/loading.gif'

const Loading =()=>{

    return (
      <div className='text-center my-3'>
        <img src={loading} alt="Loading...."  />
      </div>
    )
  }

export default Loading;