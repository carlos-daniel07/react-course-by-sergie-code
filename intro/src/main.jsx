import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContadorApp } from "./ContadorApp";
import ListadoApp from "./ListadoApp";
import UsersApp from "./components/UsersApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ContadorApp value={0} /> */}
    {/* <ListadoApp /> */}
    <UsersApp />
  </StrictMode>,
);
