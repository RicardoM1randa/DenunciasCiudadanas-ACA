import React from "react";
import { HashRouter } from "react-router-dom";
import MainApp from "./routes/MainApp";

export default function App() {
  return (
    <HashRouter>
      <MainApp />
    </HashRouter>
  );
}
