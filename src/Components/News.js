import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import PropTypes from 'prop-types'

export class news extends Component {
  //   static propTypes = {

  //   }

  // article variable from sample.json
  a = [
    {
      source: {
        id: "google-news-ca",
        name: "Google News (Canada)",
      },
      author: "The Weather Network",
      title:
        "Out-of-control wildfire forces northern Alberta residents from their homes - The Weather Network",
      description: null,
      url: "https://news.google.com/rss/articles/CBMigwFodHRwczovL3d3dy50aGV3ZWF0aGVybmV0d29yay5jb20vZW4vbmV3cy93ZWF0aGVyL3NldmVyZS9vdXQtb2YtY29udHJvbC13aWxkZmlyZS1mb3JjZXMtbm9ydGhlcm4tYWxiZXJ0YS1yZXNpZGVudHMtZnJvbS10aGVpci1ob21lc9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2023-05-05T13:19:00+00:00",
      content: null,
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Sarah Chaney Cambon",
      title:
        "Jobs Report to Show How Labor Market Weathered Bank Failures, High Interest Rates",
      description:
        "Labor Department to release April’s hiring data and unemployment rate Friday",
      url: "https://www.wsj.com/articles/april-jobs-report-unemployment-rate-economy-growth-2023-a500d302",
      urlToImage: "https://images.wsj.net/im-775926/social",
      publishedAt: "2023-05-05T09:30:00Z",
      content: null,
    },
    {
      source: {
        id: "google-news-au",
        name: "Google News (Australia)",
      },
      author: "9 News Australia",
      title:
        "Early taste of winter weather forecasted for Sydney this weekend | 9 News Australia - 9 News Australia",
      description: null,
      url: "https://news.google.com/rss/articles/CCAiC2V1TjJKemhLZ3VnmAEB?oc=5",
      urlToImage: null,
      publishedAt: "2023-05-05T08:45:01+00:00",
      content: null,
    },
  ];

  // running constructor
  constructor() {
    super();
    this.state = {
      a: this.a,
      loading: false
    };
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
                  <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
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
