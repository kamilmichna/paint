import React, { Component } from 'react';
import './NavBelt.css';

class NavBelt extends Component {
  constructor(props){
      super(props);
      this.onGetColor = this.onGetColor.bind(this);
  }
  render() {
    return (
        <aside className="NavBelt">
            <button onClick={this.onClear}>Clear</button>
            <ul>
                <li><button colortoset='red' onClick={this.onGetColor}>RED</button></li>
                <li><button colortoset='green' onClick={this.onGetColor}>GREEN</button></li>
                <li><button colortoset='blue' onClick={this.onGetColor}>BLUE</button></li>
                <li><button colortoset='yellow' onClick={this.onGetColor}>YELLOW</button></li>
                <li><button colortoset='black' onClick={this.onGetColor}>BLACK</button></li>
            </ul>
        </aside>
     
    );
  }
  onClear(){
      const canvas = document.querySelector('.Canvas');
      canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
  }
  onGetColor(e){
        this.props.getColor(e.target.getAttribute('colortoset'));
     
  }
}

export default NavBelt;
