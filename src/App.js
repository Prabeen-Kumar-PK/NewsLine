import './App.css';


import React, { useState } from 'react'
import Nav from './Components/Nav';
import News from './Components/News';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


const  App =()=> {
 const pageNum = 21;
 const apiKey=process.env.REACT_APP_NEWS_API

const [progress, setProgress]=useState(0)




    return (

      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      height={2}
      />
          <Nav />


          <Routes>
            <Route exact path="/" element={<Navigate to="/home" replace={true} />}>
            </Route>
            <Route exact path="/home" element={<News setProgress={setProgress} apiKey={apiKey} key={"home"} country={"in"} category={"home"} pageSize={pageNum} query={"india"} />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} country={"in"} category={"general"} pageSize={pageNum} />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={"science"} country={"in"} category={"science"} pageSize={pageNum} />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={"health"} country={"in"} category={"health"} pageSize={pageNum} />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} country={"in"} category={"technology"} pageSize={pageNum} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} country={"in"} category={"sports"} pageSize={pageNum} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} country={"in"} category={"entertainment"} pageSize={pageNum} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} country={"in"} category={"business"} pageSize={pageNum} />} />

          </Routes>
        </Router>
      </div>
    )
  }

export default App;

