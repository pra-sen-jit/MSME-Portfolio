"use client";
import React, { Component } from "react";

export default class AppErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    showDetails: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("💥 ErrorBoundary caught an error:", error, errorInfo);
  }

  toggleDetails = () =>
    this.setState((s) => ({ showDetails: !s.showDetails }));

  render() {
    const { hasError, error, showDetails } = this.state;

    if (!hasError) {
      return this.props.children;
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-extrabold text-red-600 mb-4">
            Something went wrong
          </h1>
          <p className="mb-6 text-gray-700">
            We hit an unexpected error. Sorry about that!
          </p>

          <button
            onClick={this.toggleDetails}
            className="mb-4 px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded"
          >
            {showDetails ? "Hide details" : "Show details"}
          </button>

          {showDetails && (
            <pre className="overflow-auto text-xs bg-gray-100 p-3 rounded h-40">
              {error?.stack}
            </pre>
          )}

          <a
            href="/"
            className="mt-6 inline-block text-blue-600 hover:underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }
}
