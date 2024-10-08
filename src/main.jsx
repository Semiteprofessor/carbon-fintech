import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";
import "./index.css";
import ErrorFallback from "./ui/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ErrorBoundary
      fallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    > */}
    <App />
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);
