import React from 'react';
import ReactDOM from 'react-dom/client';

class CompA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  render() {
    return (<div>
      <div onClick={() => this.setState({date: new Date()})}>
        <h1 style={{userSelect: 'none'}}>
          CompA: {this.state.date.toLocaleTimeString()}
        </h1>

        {this.props.child}
      </div>
    </div>);
  }
}
class CompB extends React.Component {

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('CompB render')
    return (
      <h2>
        <p>CompB</p>
        <p>{new Date().toLocaleTimeString()}</p>
      </h2>
    )
  }
}

const element = (
  <CompA child={<CompB/>}>
  </CompA>
)

ReactDOM.createRoot(document.getElementById('root')).render(element);