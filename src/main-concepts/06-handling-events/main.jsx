import React from 'react';
import ReacrDOM from 'react-dom/client';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // this.handleClick = this.handleClick.bind(this);
  }

  // 必须是箭头函数
  handleClick = () => {
    this.setState(ps => ({
      isToggleOn: !ps.isToggleOn
    }));
  }

  render() {
    return <div>
      <button onClick={this.handleClick.bind(this)}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  }
}

ReacrDOM.createRoot(document.getElementById('root')).render(<div>
  <Toggle />
</div>)