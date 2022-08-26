import React from 'react';
import ReactDOM from 'react-dom/client';

// key 不会被作为 prop 传递给子组件
function ListItem(props) {
  return <p>
    <span>{JSON.stringify(props)}</span>
  </p>
}

const listData = [1,2,3,4]

const element = (
  <div>
    {listData.map((item, index) => {
      return <ListItem key={'k-' + index} data={item} />
    })}
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);