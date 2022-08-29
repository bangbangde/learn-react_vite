import React, {Profiler, useState} from 'react';
import ReactDOM from 'react-dom/client';

function Nav(props) {
  const [state, setState] = useState(0);
  return (
    <div>
      <div>state:{state}</div>
      <p>{props.status}</p>
    </div>
  )
}

class Comp extends React.Component {

  callback = (...args) => {
    console.log([
      'id', // 发生提交的 Profiler 树的 “id”
      'phase', // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
      'actualDuration', // 本次更新 committed 花费的渲染时间
      'baseDuration', // 估计不使用 memoization 的情况下渲染整棵子树需要的时间
      'startTime', // 本次更新中 React 开始渲染的时间
      'commitTime', // 本次更新中 React committed 的时间
      'interactions' // 属于本次更新的 interactions 的集合
    ].map((k, i) => {
      return `${k}:${args[i]}`
    }));
  }

  render() {
    return (
      <Profiler id="test" onRender={this.callback}>
        <Nav status={1}></Nav>
      </Profiler>
    )
  }
}

const element = (<Comp/>);

ReactDOM.createRoot(document.getElementById('root')).render(element);