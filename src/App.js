import './App.css';


import React, { Component } from 'react'
import Nav from './Components/Nav';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      // pageNumber=5
      <div>
        {/* this is a class based Component */}
        <Router>
          <Nav />

          {/* <News  country={"in"} category={"science"} pageSize={9}/> */}

          <Routes>
            <Route exact path="/home" element={<News key={"home"} country={"in"} category={"general"} pageSize={9} />} />
            <Route exact path="/general" element={<News key={"general"} country={"in"} category={"general"} pageSize={9} />} />
            <Route exact path="/science" element={<News key={"science"} country={"in"} category={"science"} pageSize={9} />} />
            <Route exact path="/health" element={<News key={"health"} country={"in"} category={"health"} pageSize={9} />} />
            <Route exact path="/technology" element={<News key={"technology"} country={"in"} category={"technology"} pageSize={9} />} />
            <Route exact path="/sports" element={<News key={"sports"} country={"in"} category={"sports"} pageSize={9} />} />
            <Route exact path="/entertainment" element={<News key={"entertainment"} country={"in"} category={"entertainment"} pageSize={9} />} />
            <Route exact path="/business" element={<News key={"business"} country={"in"} category={"business"} pageSize={9} />} />

          </Routes>
        </Router>
      </div>
    )
  }
}

