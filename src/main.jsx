import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ToastProvider from "./components/ToastProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      <ToastProvider />
    </Provider>
  </StrictMode>
);
