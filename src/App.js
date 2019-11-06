import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './App.css';

let width = window.innerWidth > 500 ? window.innerWidth : 500;

class App extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth > 500 ? window.innerWidth : 500,
      height: width / 1.62
    }
  }
  /* mandatory */
  mapHandler = (event) => {
    console.log(event.target.dataset.name);
    // console.log(event.target.dataset.abbrev);
  };

  updateDimensions() {
    this.setState({
      width: window.innerWidth > 500 ? window.innerWidth : 500,
      height: width/1.62
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div className="App">
        <USAMap onClick={this.mapHandler} width={this.state.width} height={this.state.height}/>
      </div>
    );
  }
}

export default App;
