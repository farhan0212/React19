import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AlertButton from "./button/AlertButton.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <AlertButton text="Pencet disini kaka" message="hallo" />
  </StrictMode>
);
