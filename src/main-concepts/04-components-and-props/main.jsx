import React from 'react';
import ReactDOM from 'react-dom/client';

// function components
function Welcom(props) {
  // props.name += '!'; // Object.freeze # 严格模式下报错
  return <h1>Hello, {props.name}</h1>
}

class Welcom2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

const element = (
  <div>
    <Welcom name="Sara" />
    <Welcom2 name="Lucy" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);