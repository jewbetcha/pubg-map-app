import React, { Component } from 'react';
//import Immutable from 'immutable';
import './App.css';

class CanvasComponent extends Component {
    constructor() {
        super();
    
        this.state = {
            isDrawing: false
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }
    handleMouseUp() {
        this.setState({
            isDrawing: false
        });
    }
    handleMouseDown(e) {
        this.setState({
            isDrawing: true
        });
        this.ctx.lineWidth = 10;
        this.ctx.lineJoin = this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = 'white';
        this.ctx.moveTo(e.clientX - this.canvas.left, e.clientY - this.canvas.top);
    }
    handleMouseMove(e) {
        
        if (this.state.isDrawing) {
            this.ctx.lineTo(e.clientX - this.canvas.left, e.clientY - this.canvas.top);
            this.ctx.stroke();
        }
    }

    componentDidMount() {
        this.getContext();
        console.log(this.ctx);
    }
    getContext() {
        this.ctx = this.refs.canvas.getContext('2d');
        this.canvas = this.refs.canvas.getBoundingClientRect();
    }
    render() {
        return (
            <canvas
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseMove={this.handleMouseMove}
                ref="canvas" width={900} height={900}/>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <CanvasComponent />
      </div>
    );
  }
}

export default App;
