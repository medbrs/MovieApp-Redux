import React from 'react';
import './App.css';
import ListMovies from './ListMovies';





class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      newRating : 1
    }
  }


  render(){
    return (
      <div className="App">
       <ListMovies/>
       
      </div>
    );
  }
  }


export default  App;
