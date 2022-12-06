import "@fortawesome/fontawesome-free/css/all.min.css";
// import "aos/dist/aos.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
