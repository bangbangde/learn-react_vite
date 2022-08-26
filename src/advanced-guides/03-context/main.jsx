/**
 * Context
 * 
 * 在组件数上传递数据，避免通过每层组件的props传递
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContext, themes } from './theme-context';
import Sub from './Sub';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      provider: {
        theme: themes['light'],
        toggleTheme: () => {
          let theme = this.state.theme === 'light' ? 'dark' : 'light';
          this.setState({
            theme,
            provider: {
              ...this.state.provider,
              theme: themes[theme]
            }
          })
        }
      }
    }
  }

  handleSelect = ev => {
    let theme = ev.target.value;
    this.setState({
      theme,
      provider: {
        ...this.state.provider,
        theme: themes[theme]
      }
    })
  }

  render() {

    function consumer(value) {
      return (
        <div>
          <h2>Consumer:</h2>
          {JSON.stringify(value)}
          <button onClick={value.toggleTheme}>toggleTheme</button>
        </div>
      )
    }

    return (
      <ThemeContext.Provider value={this.state.provider}>
        <select value={this.state.theme} onChange={this.handleSelect}>
          {Object.keys(themes).map(v => {
            return (
              <option value={v} key={v}>{v}</option>
            )
          })}
        </select>
        <Sub />
        <ThemeContext.Consumer>
          {consumer}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    )
  }
}

const element = (<Main />);

ReactDOM.createRoot(document.getElementById('root')).render(element);
