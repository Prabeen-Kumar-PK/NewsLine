import React  from 'react'

const NewsItem =(props)=> {
  


    let { title, description, imgUrl, Author, date, newsUrl} = props


    return (
      <div className='my-3'>

        <div className="card" >

          <img src={imgUrl} className="card-img-top" alt={title} />

          

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h6 className="card-text"><small className="text-muted">By {Author} on {new Date(date).toGMTString()}</small></h6>

            {/* <div className='d-flex position-absolute justify-content-end  ' style={{right:0}}>
           <span className=" badge rounded-pill bg-danger" style={{zIndex:1, left:"86%", top:5}}>
              {source}
            </span>
           </div> */}

            <a rel="norefereer" href={newsUrl} className="btn btn-primary" style={{backgroundColor:"#070A52"}} >Read More</a>
          </div>

        </div>

      </div>
    )
  }

export default NewsItem

