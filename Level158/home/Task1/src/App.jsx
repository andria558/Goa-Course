import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>რაღაც შეფერხდა</h1>;
    }
    return this.props.children;
  }
}



class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState(({ count }) => {
      if (count + 1 === 5) {
        throw new Error("Counter crashed at 5!");
      }
      return { count: count + 1 };
    });
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
  );
}
