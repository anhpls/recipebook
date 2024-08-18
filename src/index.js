import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import ErrorPage from "./pages/ErrorPage";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";

import Landing from "./pages/Landing";
import ContactPage from "./pages/ContactPage";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/recipe/:id" element={<RecipePage />}>
        <Route path="/recipe/:id/ingredients" element={<Ingredients />} />
        <Route path="/recipe/:id/instructions" element={<Instructions />} />
      </Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
