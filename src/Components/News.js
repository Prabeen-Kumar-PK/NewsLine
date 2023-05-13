import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from "./Loading";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6,
    query: 'India',
    
  };
  static propTypes = {
    country: PropTypes.string.isRequired,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    query: PropTypes.string,

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
      totalArticles:0
    };
    document.title = `NewsLine - ${this.capitalizef(this.props.category)}`;
  }

  async updateNews() {
    if (this.props.category !== "home") {
      this.props.setProgress(0);
      const apUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(apUrl);
      this.props.setProgress(40);
      this.setState({ loading: true });
      let parsedData = await data.json();
      this.props.setProgress(80);
      console.log(parsedData);
      this.setState({
        a: parsedData.articles,
        loading: false,
        page: this.state.page,
        totalArticles: parsedData.totalResults,
      });
      this.props.setProgress(100);
    } else {
      const apUrl = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
      this.props.setProgress(0);
      this.setState({ loading: true });
      let data = await fetch(apUrl);
      this.props.setProgress(40);
      this.setState({ loading: true });
      let parsedData = await data.json();
      this.props.setProgress(70);
      console.log(parsedData);
      this.setState({
        a: parsedData.articles,
        loading: false,
        page: this.state.page,
        totalArticles: parsedData.totalResults,
      });
      this.props.setProgress(100);
    }

  }

  // Concept of Component DId Mount
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData =async () => {
    this.setState({page:this.state.page +1})
    if (this.props.category !== "home") {
      const apUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;

      this.setState({loading:true})
      let data = await fetch(apUrl);
      
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        a:this.state.a.concat( parsedData.articles),
        loading: false,
        page: this.state.page,
        totalArticles: parsedData.totalResults,
      });
      this.props.setProgress(100);
    } else {
      const apUrl = `https://newsapi.org/v2/everything?q=${this.props.query}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
     
this.setState({loading:true})
      let data = await fetch(apUrl);
      
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        a:this.state.a.concat( parsedData.articles),
        loading: false,
        page: this.state.page,
        totalArticles: parsedData.totalResults,
      });
      this.props.setProgress(100);
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">
            NewsLine - Top {this.capitalizef(this.props.category)} Headlines
          </h1>
          </div>
          {this.state.loading && <Loading />}

          <InfiniteScroll
            dataLength={this.state.a.length}
            next={this.fetchMoreData}
            hasMore={this.state.a.length !== this.totalArticles}
            loader={this.state.loading?<Loading/>:null}
          >

            <div className="container my-3">
            <div className="row">
              {this.state.a.map((element) => {
                return (
                  <div className="col-md-4" key={this.a.forEach(element => {
                    return element.length-1;
                  })}>
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
            </div>
          </InfiniteScroll>
          {/* <div className="d-flex justify-content-between">
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
          </div> */}
        
      </>
    );
  }
}

export default News;

// image
// `https://images.creativemarket.com/0.1.0/ps/3373652/1160/772/m1/fpnw/wm1/breaking_news_1_scr-.jpg?1507354627&s=58989dc4123b369f1b12fda40a5a5207`
