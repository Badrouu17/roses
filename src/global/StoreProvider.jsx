import React, { useState, useMemo } from "react";
import { storeContext } from "./store";

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({
    isLogged: false,
    user: null,
    roses: null,
    orders: null,
  });

  const storeValue = useMemo(() => ({ store, setStore }), [store, setStore]);

  return (
    <storeContext.Provider value={storeValue}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
