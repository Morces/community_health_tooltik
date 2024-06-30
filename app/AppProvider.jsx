"use client";

import { useState, useMemo } from "react";
import AppContext from "./_components/context/AppContext";

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error!");
  const [token, setToken] = useState("");
  const [device, setDevice] = useState("lg");
  const [user, setUser] = useState({});

  const value = useMemo(
    () => ({
      isSidebarOpen,
      setIsSidebarOpen,
      errorModal,
      setErrorModal,
      errorMessage,
      setErrorMessage,
      token,
      setToken,
      device,
      setDevice,
      user,
      setUser,
    }),
    [isSidebarOpen, errorModal, errorMessage, token, device]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
