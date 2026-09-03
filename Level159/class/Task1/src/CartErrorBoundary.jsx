import React from "react";

class CartErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Cart crashed:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    this.props.onReset();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>კალათის ჩატვირთვა ვერ მოხერხდა.</p>
          <button onClick={this.handleReset}>კალათის გასუფთავება (Reset)</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default CartErrorBoundary;
