import React from "react";
import ErrorIndicator from "./components/ErrorIndicator";

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <ErrorIndicator /> : this.props.children;
  }
}

export default ErrorBoundary;
