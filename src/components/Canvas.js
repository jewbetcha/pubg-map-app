import React, { Component } from 'react';

class Canvas extends Component {
    constructor() {
        super();
    
        this.state = {
            isDrawing: false,
            startX: null,
            startY: null,
            endX: null,
            endY: null
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }
    handleMouseUp() {
        this.clearCanvas();
        this.makeLine(this.ctx);
        this.setState({
            isDrawing: false,
            startX: null,
            startY: null,
            endX: null,
            endY: null
        });
    }
    handleMouseDown(e) {
        this.clearCanvas();
        this.setState({
            isDrawing: true,
            startX: e.clientX - this.canvas.left,
            startY: e.clientY - this.canvas.top
        });
        this.ctx.lineJoin = this.ctx.lineCap = 'square';
    }
    handleMouseMove(e) {
        if (this.state.isDrawing) {
            this.setState({
                endX: e.clientX - this.canvas.left,
                endY: e.clientY - this.canvas.top
            });
            this.clearCanvas();
            this.makeLine(this.ctx);
        }
    }
    makeLine(context) {
        context.save();
        context.beginPath();
        context.lineWidth = 4;
        context.strokeStyle = 'white';
        context.fillStyle = 'white';
        context.moveTo(this.state.startX, this.state.startY);
        context.lineTo(this.state.endX, this.state.endY);
        context.closePath();
        context.stroke();
        // Arrowhead
        var radians = Math.atan((this.state.startY - this.state.endY)/(this.state.startX - this.state.endX));
        radians+=((this.state.endX > this.state.startX) ? 90 : -90) * Math.PI/180;
        this.drawArrow(context, this.state.endX, this.state.endY, radians);
        //context.restore();
    }
    drawArrow(context, x, y, rad) {
        context.save();
        context.beginPath();
        context.translate(x, y);
        context.rotate(rad);
        context.moveTo(0,0);
        context.lineTo(15, 35);
        context.lineTo(-15, 35);
        context.closePath();
        context.restore();
        context.fill();
    }
    clearCanvas() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
        this.ctx.beginPath();
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