import React, { useState } from "react";
import { useEffect } from 'react';
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from "./Loading";
import PropTypes from "prop-types";

const News =(props)=> {
  

  // article variable from sample.json
  
 const [articles, setArticles]=useState([])
 const [loading, setLoading]= useState(false)
 const [page, setPage]=useState(1)
 const[totalArticles, setTotalArticles]= useState(0)
//  document.title = `NewsLine - ${capitalizef(props.category)}`;



  const capitalizef = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
    


const updateNews= async ()=> {
    if (props.category !== "home") {
      props.setProgress(0);
      const apUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
     setLoading(true)
      let data = await fetch(apUrl);
      props.setProgress(40);
     setLoading(true)
      let parsedData = await data.json();
      props.setProgress(80);
      console.log(parsedData);
      setArticles(parsedData.articles);
      setLoading(false)
      setPage(page)
      setTotalArticles(parsedData.totalResults)
      props.setProgress(100);
    }
    
    else {
      const apUrl = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
      props.setProgress(0);
     setLoading(true)
      let data = await fetch(apUrl);
      props.setProgress(40);
     setLoading(true)
      let parsedData = await data.json();
      props.setProgress(70);
      console.log(parsedData);
      setArticles(parsedData.articles);
      setLoading(false)
      setPage(page)
      setTotalArticles(parsedData.totalResults)
      props.setProgress(100);
    }

  }

  useEffect(()=>{
    updateNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const fetchMoreData =async () => {
   

    if (props.category !== "home") {
      
      const apUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
      setPage(page+1)
      setLoading(true)
      let data = await fetch(apUrl);
      let parsedData = await data.json();
      console.log(parsedData);
      setArticles(articles.concat(parsedData.articles));
      setLoading(false)
      setPage(page)
      setTotalArticles(parsedData.totalResults)
    }
    
    else {
     
      const apUrl = `https://newsapi.org/v2/everything?q=${props.query}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
      setPage(page+1)
      setLoading(true)
      let data = await fetch(apUrl);
      let parsedData = await data.json();
      console.log(parsedData);
      setArticles(articles.concat(parsedData.articles));
      setLoading(false)
      setPage(page)
      setTotalArticles(parsedData.totalResults)
    }
  };


    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{marginTop:"90px", marginBottom:"10px"}}>
            NewsLine - Top {capitalizef(props.category)} Headlines
          </h1>
          </div>
          {loading ? <Loading />:null}

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalArticles}
            loader={loading?<Loading/>:null}
          >

            <div className="container">
            <div className="row">
              {articles.map((element) => {
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
            </div>
          </InfiniteScroll>
          {/* <div className="d-flex justify-content-between">
            <button
              disabled={state.page <= 1}
              className="btn  btn-secondary"
              onClick={
                (handlePrevClick = async () => {
                  setState({
                    loading: false,
                    page: state.page + 1,
                    totalArticles: state.totalArticles,
                  });
                  updateNews();
                })
              }
            >
              &#11160;
            </button>

            <button
              disabled={
                state.page + 1 >
                Math.ceil(state.totalArticles / props.pageSize)
              }
              className="btn  btn-primary"
              onClick={(handleNextClick = async () => {
                setState({
                  loading: false,
                  page: state.page + 1,
                  totalArticles: state.totalArticles,
                });
                updateNews();
              })
              }
            >
              &#11162;
            </button>
          </div> */}
        
      </>
    );
  }


News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
  query: 'India',
  
};
News.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  query: PropTypes.string,

};
export default News;

// image
// `https://images.creativemarket.com/0.1.0/ps/3373652/1160/772/m1/fpnw/wm1/breaking_news_1_scr-.jpg?1507354627&s=58989dc4123b369f1b12fda40a5a5207`
