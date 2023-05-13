import './App.css';


import React, { Component } from 'react'
import Nav from './Components/Nav';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageNum = 21;
  apiKey=process.env.REACT_APP_NEWS_API


state={
  progress:0
}

setProgress=(progress)=>{
  this.setState({
    progress:progress
  })
}
  render() {

    return (

      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      height={2}
      />
          <Nav />


          <Routes>
            <Route exact path="/" element={<Navigate to="/home" replace={true} />}>
            </Route>
            <Route exact path="/home" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"home"} country={"in"} category={"home"} pageSize={this.pageNum} query={"india"} />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"general"} country={"in"} category={"general"} pageSize={this.pageNum} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"science"} country={"in"} category={"science"} pageSize={this.pageNum} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"health"} country={"in"} category={"health"} pageSize={this.pageNum} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"technology"} country={"in"} category={"technology"} pageSize={this.pageNum} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"sports"} country={"in"} category={"sports"} pageSize={this.pageNum} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"entertainment"} country={"in"} category={"entertainment"} pageSize={this.pageNum} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"business"} country={"in"} category={"business"} pageSize={this.pageNum} />} />

          </Routes>
        </Router>
      </div>
    )
  }
}

