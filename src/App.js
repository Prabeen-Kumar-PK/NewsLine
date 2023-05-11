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



export default class App extends Component {
  pageNum = 6;
  render() {

    return (

      <div>
        <Router>
          <Nav />


          <Routes>
            <Route exact path="/" element={<Navigate to="/home" replace={true} />}>
            </Route>
            <Route exact path="/home" element={<News key={"homeN"} country={"in"} category={"home"} pageSize={this.pageNum} query={"india"} />} />
            <Route exact path="/general" element={<News key={"general"} country={"in"} category={"general"} pageSize={this.pageNum} />} />
            <Route exact path="/science" element={<News key={"science"} country={"in"} category={"science"} pageSize={this.pageNum} />} />
            <Route exact path="/health" element={<News key={"health"} country={"in"} category={"health"} pageSize={this.pageNum} />} />
            <Route exact path="/technology" element={<News key={"technology"} country={"in"} category={"technology"} pageSize={this.pageNum} />} />
            <Route exact path="/sports" element={<News key={"sports"} country={"in"} category={"sports"} pageSize={this.pageNum} />} />
            <Route exact path="/entertainment" element={<News key={"entertainment"} country={"in"} category={"entertainment"} pageSize={this.pageNum} />} />
            <Route exact path="/business" element={<News key={"business"} country={"in"} category={"business"} pageSize={this.pageNum} />} />

          </Routes>
        </Router>
      </div>
    )
  }
}

