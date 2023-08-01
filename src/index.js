import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <p>
        Make european cities blue and north american cities red from CSS in
        React
      </p>

      <ul>
        <li>Sydney</li>
        <li className="european-cities">Paris</li>
        <li className="american-cities">Montreal</li>
        <li className="european-cities">Lisbon</li>
        <li className="american-cities">San Francisco</li>
      </ul>
    </div>
  </StrictMode>
);
