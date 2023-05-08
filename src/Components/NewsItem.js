import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl}=this.props
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={imgUrl} className="card-img-top" alt={title}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="norefereer" href={newsUrl} className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}


