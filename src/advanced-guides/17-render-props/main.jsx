/**
 * 术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="data:image/jpeg;base64,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"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

// <Mouse> 组件封装了我们需要的行为...
class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div id="mmc" style={{ height: '300PX', border: '1px solid blue' }} onMouseMove={this.handleMouseMove}>
        <p>{JSON.stringify(this.state)}</p>
        {/*
          使用 `render`prop 动态决定要渲染的内容，
          而不是给出一个 <Mouse> 渲染结果的静态表示
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>移动鼠标!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </>
    );
  }
}

const element = (
  <div>
    <MouseTracker />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);