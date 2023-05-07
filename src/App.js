 import './App.css';


 import React, { Component } from 'react'
import Nav from './Components/Nav';
import News from './Components/News';
 
 export default class App extends Component {
   render() {
     return (
       <div>
        {/* this is a class based Component */}
        <Nav/>
        <News/>

       </div>
     )
   }
 }
 
