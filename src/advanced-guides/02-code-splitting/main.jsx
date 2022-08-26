import React, {Suspense, startTransition} from 'react';
import ReactDOM from 'react-dom/client';

const Comp1 = React.lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./Comp')), 3000)));
const Comp2 = React.lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./Comp')), 3000)));

const Element = () => {
  const [tab, setTab] = React.useState(true);

  // 声明setTab 不是一个紧急更新，会在新组件加载完成后再移除老的 dom
  function handleTabSelect() {
    startTransition(() => {
      setTab(!tab);
    });
  }

  return <div>
    <button onClick={handleTabSelect}>{tab + ''}</button>
    <Suspense fallback={<p>loading...</p>}>
      {tab ? <Comp1 data={'A'} /> : <Comp2 data={'B'} /> }
    </Suspense>
  </div>
};

ReactDOM.createRoot(document.getElementById('root')).render(<Element/>);