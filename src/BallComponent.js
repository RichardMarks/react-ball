import React, { Component } from 'react';
export class Ball extends Component {
  render() {
    const size = this.props.width;
    const color = this.props.color;
    const ballStyle = {
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: `${size}px`,
      background: `radial-gradient(closest-side at 45% 45%, #FFF, ${color})`,
    };
    const ballClass = `${this.props.hasShadow ? 'shadow' : ''}`;
    return (
      <div id="ball" style={ballStyle} className={ballClass}> 
        <div id="ball-text">{this.props.text}</div>
      </div>
    );
  }
}