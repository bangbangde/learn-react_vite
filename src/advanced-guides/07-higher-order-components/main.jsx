/**
 * 高阶组件是参数为组件，返回值为新组件的函数。
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

const HOC = (Comp, handler) => {
  class _ extends React.Component {
    render() {
      // 过滤掉非此 HOC 额外的 props，且不要进行透传
      const { extraProp, ...passThroughProps } = this.props;
    
      // 将 props 注入到被包装的组件中。
      // 通常为 state 的值或者实例方法。
      const injectedProp = handler(extraProp);
    
      // 将 props 传递给被包装组件
      return (
        <WrappedComponent
          injectedProp={injectedProp}
          {...passThroughProps}
        />
      );
    }
  }

  // 需要的话可以在这里使用 React.forwardRef 包一层
  return _;
}

const element = (
  <div>Hello world</div>
)

ReactDOM.createRoot(document.getElementById('root')).render(element);