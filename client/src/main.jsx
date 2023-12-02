import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary.jsx";
// import  { Component } from "react";
// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("Component error:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Something went wrong.</div>;
//     }

//     return this.props.children;
//   }
// }
// <ErrorBoundary></ErrorBoundary>
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
