import React from 'react';
import { ThemeContext } from './theme-context';

export default class Sub extends React.Component {
  static contextType = ThemeContext;

  componentDidUpdate() {
    console.log('Sub componentDidUpdate');
  }

  render() {
    return (
      <div>
        <h2>Sub:</h2>
        <div>{JSON.stringify(this.context)}</div>
      </div>
    )
  }
}