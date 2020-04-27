import React, { useState, useMemo } from "react";
import { storeContext } from "./store";

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({});

  const storeValue = useMemo(() => ({ store, setStore }), [store, setStore]);

  return (
    <storeContext.Provider value={storeValue}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
