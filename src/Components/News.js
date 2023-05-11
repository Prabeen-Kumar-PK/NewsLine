import React, { Component } from "react";
import NewsItem from "./NewsItem";

import Loading from "./Loading";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6
  }
  static propTypes = {
    country: PropTypes.string.isRequired,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }

  // article variable from sample.json
  a = [];
   
  capitalizef =(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // running constructor
  constructor(props) {
    super(props);
    this.state = {
      a: this.a,
      loading: false,
      page: 1

    };
    document.title=`NewsLine - ${this.capitalizef(this.props.category)}`
  }




  async updateNews() {
    const apUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c9e8b6f27664b8286e21d73ec60ee2a&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(apUrl);
    this.setState({ loading: true })
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      a: parsedData.articles,
      loading: false,
      page: this.state.page,
      totalArticles: parsedData.totalResults

    });
  }


  // Concept of Component DId Mount
  async componentDidMount() {
    this.updateNews();

  }


  handlePrevClick = async () => {
    this.setState({

      loading: false,
      page: this.state.page + 1,
      totalArticles: this.state.totalArticles

    });
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({
      loading: false,
      page: this.state.page + 1,
      totalArticles: this.state.totalArticles

    });
    this.updateNews();
  }



  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">NewsLine - Top {this.capitalizef(this.props.category)} Headlines</h1>
          {this.state.loading && <Loading />}




          <div className="row">
            {!this.state.loading && this.state.a.map((element) => {


              // console.log(element);
              return (

                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={!element.urlToImage ? `https://images.creativemarket.com/0.1.0/ps/3373652/1160/772/m1/fpnw/wm1/breaking_news_1_scr-.jpg?1507354627&s=58989dc4123b369f1b12fda40a5a5207` : element.urlToImage} newsUrl={element.url} Author={!element.author ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} />
                </div>

              )
            })}
          </div>
          <div className="d-flex justify-content-between">

            <button disabled={this.state.page <= 1} className="btn  btn-secondary" onClick={this.handlePrevClick}>&#11160;</button>

            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn  btn-primary" onClick={this.handleNextClick}>&#11162;</button>

          </div>
        </div>
      </div>
    );
  }
}

export default News;
















// image
// `https://images.creativemarket.com/0.1.0/ps/3373652/1160/772/m1/fpnw/wm1/breaking_news_1_scr-.jpg?1507354627&s=58989dc4123b369f1b12fda40a5a5207`