import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {drawing: false};
    this.draw = this.draw.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.canvas = React.createRef();
   
   
  }
  componentDidMount(){
    this.canvas.current.width = this.canvas.current.clientWidth;
    this.canvas.current.height= this.canvas.current.clientHeight;
  }
  render() {
    return (
        <canvas ref={this.canvas} width="1800" height="1000"className="Canvas"  onMouseMove={this.draw} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}></canvas>
     
    );
  }
  getMousePosition(e){
    let rect = this.canvas.current.getBoundingClientRect();
    console.log(this.canvas.current.style.width)
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }
  onMouseUp(){
    this.setState({drawing: false});
  }
  onMouseDown(){
    this.setState({drawing: true});
    this.ctx = this.canvas.current.getContext("2d");
    this.ctx.lineWidth = 3;
    this.ctx.lineJoin = "round";
    this.ctx.strokeStyle = this.props.color;
    //this.ctx.lineCap = "round";
    this.ctx.beginPath();

  }
  draw(e){
     let pos = this.getMousePosition(e);  
     if (this.state.drawing === true){
        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();
   
   
     }

  }

  
}

export default Canvas;
