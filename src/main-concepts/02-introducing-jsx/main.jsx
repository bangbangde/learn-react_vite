import React from "react";
import ReactDOM from 'react-dom/client';
import avatar from '../../assets/react.svg';

const name = 'Josh Perez';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatar
};

function getGreeting(user) {
  if (user) {
    return <span>Hello, {formatName(user)}!</span>;
  }
  return <span>Hello, Stranger.</span>;
}

const element = (
<h1>
  <img src={user.avatar} alt="react logo" />
  <a href="https://www.reactjs.org" target="_blank">{getGreeting()}</a>
</h1>
);

const element2 = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');

ReactDOM.createRoot(document.getElementById('root')).render(element2);