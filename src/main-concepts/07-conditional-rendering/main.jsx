import React from "react";
import ReactDOM from "react-dom/client";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>
  } else {
    return <h1>Please sign up.</h1>
  }
}

class RenderFalse extends React.Component {
  componentDidMount() {
    alert('RenderFalse:componentDidMount')
  }
  componentWillUnmount() {
    alert('RenderFalse:componentWillUnmount')
  }

  // 返回 false null undefined "  " (空/空格/tab等字符串)虽然不会渲染dom，单生命周期回调依然正常触发
  render() {
    return "  ";
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn){
      button = <button onClick={this.handleLogoutClick}>Logout</button>
    } else {
      button = <button onClick={this.handleLoginClick}>Login</button>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {isLoggedIn && <RenderFalse />}
      </div>
    )
  }
}

const element = (
  <LoginControl />
)

ReactDOM.createRoot(document.getElementById('root')).render(element);