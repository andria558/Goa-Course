import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, showWarning: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);

    setTimeout(() => {
      this.setState({ showWarning: true });
    }, 3000);
  }

  render() {
    if (this.state.hasError) {
      return this.state.showWarning ? (
        <h2 style={{ color: "red" }}>⚠️ მოხდა შეცდომა!</h2>
      ) : (
        <h2>მიმდინარეობს შემოწმება...</h2>
      );
    }

    return this.props.children;
  }
}

function BugyComponent() {
  throw new Error("Test error!");
}

const App = () => {
  return (
    <ErrorBoundary>
      <BugyComponent />
    </ErrorBoundary>
  );
}

export default App;