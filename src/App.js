import React, { Component } from 'react';
import Konva from 'konva';
import {Layer, Rect, Stage, Group} from 'react-konva';
//import Map from './components/Map.js';
import logo from './logo.svg';
import './App.css';

class MyRect extends Component {
  constructor(...args) {
        super(...args);
        this.state = {
            color: 'green'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    }
    render() {
        return (
            <Rect
                x={10} y={10} width={50} height={50}
                fill={this.state.color}
                shadowBlur={10}
                onClick={this.handleClick}
            />
        )
    }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Stage width={700} height={700}>
          <Layer>
              <MyRect />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
