import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="327719927064-isqrtstnfc63k8uaa1qiebm9iji555n7.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
