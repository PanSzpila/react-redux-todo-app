import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  </StrictMode>
);
