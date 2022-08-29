import React from 'react';
import ReactDOM from 'react-dom/client';

class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<a href={url}>{name}</a>);
  }
}
customElements.define('x-search', XSearch);

class HelloMessage extends React.Component {
  render() {
    return <div>Hello <x-search name={this.props.name}></x-search>!</div>;
  }
}

const element = (
  <div>
    <HelloMessage name="frank" />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);
