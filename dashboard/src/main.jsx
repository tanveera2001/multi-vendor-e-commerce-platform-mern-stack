/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </BrowserRouter>,
);
