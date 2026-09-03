import React from "react";

class FormErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Form crashed:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>უსაფრთხოების წესების დარღვევა! ეს სახელი აკრძალულია.</p>
          <button onClick={this.handleReset}>ხელახლა სცადეთ</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default FormErrorBoundary;
