import React from "react";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary", error, errorInfo);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
