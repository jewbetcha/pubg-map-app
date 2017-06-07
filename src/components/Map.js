import React, { Component } from 'react';
import Konva from 'konva';
import {Layer, Rect, Stage, Group} from 'react-konva';
import map from './map.jpg';
import './Map.css';

class Map extends Component {
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

export default Map;