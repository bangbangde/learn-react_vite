/**
 * Refs 转发
 */
import React from 'react';
import ReactDOM from  'react-dom/client';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FAncyButton">
    {props.children}
  </button>
));

// HOC 转发 ref
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;
      return <WrappedComponent {...rest} ref={forwardedRef} />;
    }
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }
  const name = WrappedComponent.displayName || WrappedComponent.name || "unknown";
  forwardRef.displayName = `LogProps-${name}`;

  return React.forwardRef(forwardRef);
}

const FancyButtonW = logProps(FancyButton);

class Comp extends React.Component {
  ref = React.createRef();

  constructor(props) {
    super(props);
    console.log('constructor', this.ref);
  }

  componentDidMount() {
    console.log('componentDidMount', this.ref);
  }

  render() {
    return (
      <FancyButtonW ref={this.ref}>Click me!</FancyButtonW>
    )
  }
}

const element = (
  <Comp />
);

ReactDOM.createRoot(document.getElementById('root')).render(element);