import React, { Component } from "react";
import NewsItem from "./NewsItem";

import Loading from "./Loading";
import PropTypes from "prop-types";

export class Home extends Component {
  static defaultProps = {
   query:'India'
  };
  static propTypes = {
    query: PropTypes.string.isRequired
  
  };

  // article variable from sample.json
  a = [];

  capitalizef = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  // running constructor
  constructor(props) {
    super(props);
    this.state = {
      a: this.a,
      loading: false,
      page: 1,
    };
    document.title = `NewsLine - ${this.capitalizef(this.props.query)}`;
  }

  async updateNews() {
    const hoUrl= `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=6c9e8b6f27664b8286e21d73ec60ee2a&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(hoUrl);
    this.setState({ loading: true });
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      a: parsedData.articles,
      loading: false,
      page: this.state.page,
      totalArticles: parsedData.totalResults,
    });
  }

  // Concept of Component DId Mount
  async componentDidMount() {
    this.updateNews();
  }

 
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">
            NewsLine -  {this.capitalizef(this.props.query)} News
          </h1>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading &&
              this.state.a.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imgUrl={
                        !element.urlToImage
                          ? `https://images.creativemarket.com/0.1.0/ps/3373652/1160/772/m1/fpnw/wm1/breaking_news_1_scr-.jpg?1507354627&s=58989dc4123b369f1b12fda40a5a5207`
                          : element.urlToImage
                      }
                      newsUrl={element.url}
                      Author={!element.author ? "Unknown" : element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn  btn-secondary"
              onClick={
                (this.handlePrevClick = async () => {
                  this.setState({
                    loading: false,
                    page: this.state.page + 1,
                    totalArticles: this.state.totalArticles,
                  });
                  this.updateNews();
                })
              }
            >
              &#11160;
            </button>

            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalArticles / this.props.pageSize)
              }
              className="btn  btn-primary"
              onClick={(this.handleNextClick = async () => {
                this.setState({
                  loading: false,
                  page: this.state.page + 1,
                  totalArticles: this.state.totalArticles,
                });
                this.updateNews();
              })
            }
            >
              &#11162;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

// image
// `https://images.creativemarket.com/0.1.0/ps/3373652/1160/772/m1/fpnw/wm1/breaking_news_1_scr-.jpg?1507354627&s=58989dc4123b369f1b12fda40a5a5207`
