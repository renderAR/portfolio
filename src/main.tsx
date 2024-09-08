import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/layout/App.tsx";
import "./app/layout/index.css";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./app/context/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename='/portfolio'>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
