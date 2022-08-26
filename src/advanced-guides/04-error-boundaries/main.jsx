/**
 * Error boundaries
 * 
 * 错误边界
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

class ErrorBundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  // static getDerivedStateFromError(error) {
  //   console.log('getDerivedStateFromError:', error);
  //   return {hasError: true};
  // }

  // componentDidCatch(error, errorInfo) {
  //   console.log('componentDidCatch:', error, errorInfo);
  // }

  handleClick = ev => {
    // react 会从头重新加载子组件
    this.setState({
      hasError: false
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Someting went wrong.</h1>
          <button onClick={this.handleClick}>refresh</button>
        </div>
      )
    } else {
      return this.props.children;
    }
  }
}

class Comp extends React.Component {
  constructor(props) {
    super(props);
    console.log('Comp constructor')
    this.state = {
      date: new Date()
    }
  }
  handleClick = ev => {
    this.setState({
      date: ''
    })
  }
  render() {
    debugger
    return (
      <div>
        <h2>runing...</h2>
        <p>{this.state.date.toLocaleTimeString()}</p>
        <button onClick={this.handleClick}>error</button>
      </div>
    )
  }
}

const element = (
<ErrorBundary>
  <Comp/>
</ErrorBundary>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);
