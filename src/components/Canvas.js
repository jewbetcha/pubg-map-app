import React, { Component } from 'react';

class Canvas extends Component {
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
        this.ctx.lineWidth = 6;
        this.ctx.lineJoin = this.ctx.lineCap = 'square';
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
                ref="canvas" width={1000} height={1000}/>
        );
    }
}

export default Canvas;