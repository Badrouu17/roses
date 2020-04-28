import React from "react";
import StoreProvider from "./global/StoreProvider";
import App from "./routes/App";

const Main = () => {
  return (
    <StoreProvider>
      <App></App>
    </StoreProvider>
  );
};

export default Main;
