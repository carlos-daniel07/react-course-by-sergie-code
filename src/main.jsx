import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContadorApp } from "./ContadorApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContadorApp />
  </StrictMode>,
);
