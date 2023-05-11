import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, Author, date, newsUrl, source } = this.props
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={imgUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <span className="position-absolute    translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:"86%", top:5}}>
              {source}

            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h6 className="card-text"><small className="text-muted">By {Author} on {new Date(date).toGMTString()}</small></h6>
            <a rel="norefereer" href={newsUrl} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}


