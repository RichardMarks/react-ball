import React, { Component } from 'react';
import './App.css';

import { Ball } from './BallComponent';

class App extends Component {
  constructor() {
    super();
    document.title = 'React-Ball Demo';
    this.state = {
      ballText: '',
      ballWidth: 100,
      ballColor: '#bcaf50',
      ballShadow: false,
      errMessage: null,
    };
    [
      'handleBallTextChange',
      'handleBallWidthChange',
      'handleBallColorChange',
      'handleBallShadowChange',
    ].forEach(k => { this[k] = this[k].bind(this) });
  }
  handleBallTextChange(event) {
    this.setState({
      ballText: event.target.value,
    });
  }
  handleBallWidthChange(event) {
    const val = event.target.value;
    const width = parseInt(val, 10);
    if (width && width >= 100 && width <= 300) {
      this.setState({
        errMessage: null,
        ballWidth: width,
      });
      return;
    }
    if (isNaN(width)) {
      this.setState({
        errMessage: `'${val}' is not a valid number`
      });
    } else {
      this.setState({
        errMessage: `Width must be between 100 and 300`
      });
    }
    
  }
  handleBallColorChange(event) {
    this.setState({
      ballColor: event.target.value,
    });
  }
  handleBallShadowChange(event) {
    console.log(event.target.checked);
    this.setState({
      ballShadow: event.target.checked,
    });
  }
  componentDidMount() {
    this.firstField.focus();
  }
  render() {
    const errMessage = this.state.errMessage;
    let errDisplay = null;
    if (errMessage) {
      errDisplay = (<li>{this.state.errMessage}</li>);
    } else {
      errDisplay = (<li style={{display: 'none'}}></li>);
    }
    return (
      <div id="content">
        <Ball 
          text={this.state.ballText}
          width={this.state.ballWidth}
          color={this.state.ballColor}
          hasShadow={this.state.ballShadow}
          />
        <div className="panel">
          <form>
          <ul>
            <li>
              <label htmlFor="text">Ball Text:</label>
              <input ref={e => { this.firstField = e; }} id="text" placeholder="Text on Ball" type="text" onChange={this.handleBallTextChange} />
            </li>
            <li>
              <label htmlFor="width" style={{ color: errMessage ? 'red' : 'black'}}>Ball Width:</label>
              <input id="width" placeholder="100 - 300" type="text" onChange={this.handleBallWidthChange} />
              <span className="hint">(pixles)</span>
            </li>
            <li>
              <label htmlFor="color">Ball Color:</label>
              <input id="color" type="color" value={this.state.ballColor} onChange={this.handleBallColorChange} />
            </li>
            <li>
              <label htmlFor="shadow">Shadow:</label>
              <input id="shadow" type="checkbox" checked={this.state.ballShadow} onChange={this.handleBallShadowChange} />
            </li>
          </ul>
          </form>
          <ul id="errors">
            {errDisplay}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
