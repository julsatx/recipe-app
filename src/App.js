import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props); 
      this.state = {
        meal: ""
      }
    }
    componentDidMount(){
      const url = 'https://www.themealdb.com/api/json/v1/1/latest.php';
      axios.get(URL)
      .then(res => {
        const meal = res.data.meals; //mealdata
        if(typeof meal ==='object'){
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  
  render() {
    return (
      <div className="App">
       <h1>HIIII</h1>

      </div>
    );
  }
}

export default App;
