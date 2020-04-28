import React, { useState, useMemo, useEffect } from "react";
import { storeContext } from "./store";
import {
  getTheTokenFromStorage,
  getTheUserFromStorage,
} from "./../services/auth";

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState({
    isLogged: false,
    user: null,
    token: null,
    roses: null,
    orders: null,
  });

  useEffect(() => {
    const token = getTheTokenFromStorage();
    const isLogged = token ? true : false;
    const user = getTheUserFromStorage();
    setStore({ ...store, isLogged, token, user });
  }, [store.isLogged]);

  const storeValue = useMemo(() => ({ store, setStore }), [store, setStore]);

  return (
    <storeContext.Provider value={storeValue}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
