import React from 'react';
import ReactDOM from 'react-dom/client';

// 目前 React.Fragment 只接受 key 属性
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
        {[0, 1, 2].map(i => (
          <React.Fragment key={i}>
            <td>!</td>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

const element = (
  <table>
    <tbody>
      <tr>
        <Columns />
      </tr>
    </tbody>
  </table>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);