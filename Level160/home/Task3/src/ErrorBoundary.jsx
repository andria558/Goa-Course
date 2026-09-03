import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, ticketId: null };
  }

  static getDerivedStateFromError(error) {
    // Generate unique ticket ID using timestamp + random
    const ticketId = `TICKET-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    return { hasError: true, ticketId };
  }

  componentDidCatch(error, errorInfo) {
    // Send error + ticketId to backend logs
    fetch("/api/log-error", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ticketId: this.state.ticketId,
        error: error.toString(),
        info: errorInfo
      })
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2>Oops! Something went wrong.</h2>
          <p>
            Please contact support with this ID:{" "}
            <strong>{this.state.ticketId}</strong>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
