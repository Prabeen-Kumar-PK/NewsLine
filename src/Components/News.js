import React, { Component } from "react";
import NewsItem from "./NewsItem";

// import PropTypes from 'prop-types'

export class news extends Component {
  //   static propTypes = {

  //   }

  // article variable from sample.json
  a = [];

  // running constructor
  constructor() {
    super();
    this.state = {
      a: this.a,
      loading: false,
      page:1
      
    };
  }



  // Concept of Component DId Mount
  async componentDidMount() {
    let apUrl =`https://newsapi.org/v2/top-headlines?country=in&apiKey=6c9e8b6f27664b8286e21d73ec60ee2a&page=${this.state.page}`;

    let data = await fetch(apUrl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      a: parsedData.articles,
      loading:false,
      page:this.state.page ,
      totalArticles:parsedData.totalResults

    });

  }


   handlePrevClick= async ()=>{
    let apUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6c9e8b6f27664b8286e21d73ec60ee2a&page=${this.state.page-1}`;

    let data = await fetch(apUrl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      a: parsedData.articles,
      loading:false,
      page:this.state.page - 1,
      totalArticles:parsedData.totalResults

    });
  }
  
  handleNextClick= async ()=>{

    if(this.state.page+1>Math.ceil(this.state.totalArticles/20)){

    }else{
      let apUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6c9e8b6f27664b8286e21d73ec60ee2a&page=${this.state.page+1}`;

      let data = await fetch(apUrl);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        a: parsedData.articles,
        loading:false,
        page:this.state.page + 1,
        totalArticles:parsedData.totalResults
  
      });
    }

  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">NewsLine - Top Headlines</h1>
          <div className="row">
            {this.state.a.map((element) => {
              // console.log(element);
              return (

                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={!element.urlToImage ? `https://images.creativemarket.com/0.1.0/ps/3373652/1160/772/m1/fpnw/wm1/breaking_news_1_scr-.jpg?1507354627&s=58989dc4123b369f1b12fda40a5a5207` : element.urlToImage} newsUrl={!element.url ? "" : element.url} />
                </div>

              )
            })}
          </div>
          <div className="d-flex justify-content-between">

            <button disabled={this.state.page<=1} className="btn  btn-secondary" onClick={this.handlePrevClick}>&#11160;</button>

            <button  className="btn  btn-primary" onClick={this.handleNextClick}>&#11162;</button>

          </div>
        </div>
      </div>
    );
  }
}

export default news;
