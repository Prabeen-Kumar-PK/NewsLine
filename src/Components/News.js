import React, { Component } from "react";
import NewsItem from "./NewsItem";

// import PropTypes from 'prop-types'

export class news extends Component {
  //   static propTypes = {

  //   }

  // article variable from sample.json
  a = [ ];

  // running constructor
  constructor() {
    super();
    this.state = {
      a: this.a,
      loading: false
    };
  }



  // Concept of Component DId Mount
  async componentDidMount() {
    let apUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=6c9e8b6f27664b8286e21d73ec60ee2a";

    let data= await fetch(apUrl);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({ 
         a:parsedData.articles

     });

  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center">NewsLine - Top Headlines</h1>
          <div  className="row">
          {this.state.a.map((element) => {
            // console.log(element);
            return (
              
                <div className="col-md-4" key={element.url}>
                  <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={!element.urlToImage?"https://th.bing.com/th/id/OIP.9e2pUa0jt0wfYwFvaKiATgHaFY?pid=ImgDet&rs=1":element.urlToImage} newsUrl={!element.url?"":element.url} />
                </div>
              
            )
          })}
</div>
        </div>
      </div>
    );
  }
}

export default news;
