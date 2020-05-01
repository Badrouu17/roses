import React from "react";
import StoreProvider from "./global/StoreProvider";
import App from "./routes/App";
import { toast } from "react-toastify";

toast.configure();

const Main = () => {
  return (
    <StoreProvider>
      <App></App>
    </StoreProvider>
  );
};

export default Main;
