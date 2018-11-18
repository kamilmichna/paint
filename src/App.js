import React, { Component } from 'react';
import './App.css';

//components import
import Canvas from './Canvas';
import NavBelt from './NavBelt';

class App extends Component {
  constructor(props){
    super(props);
    this.getColor = this.getColor.bind(this);
    this.state = {color: "red"}
  }
  render() {
    return (
        <div className="App">
            <Canvas color={this.state.color}></Canvas>
            <NavBelt getColor={this.getColor}/>
        </div>
     
    );
  }
  componentDidMount(){
    document.title = "Paint in React - my first app"
  }
  getColor(canvasColor){
      this.setState({color: canvasColor})
      console.log(this.state)
  }
}

export default App;
