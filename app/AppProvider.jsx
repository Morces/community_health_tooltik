"use client";

import { useState, useMemo } from "react";
import AppContext from "./_components/context/AppContext";
import { SessionProvider } from "next-auth/react";

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error!");
  const [token, setToken] = useState("");
  const [device, setDevice] = useState("lg");
  const [user, setUser] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      toggleSidebar,
    }),
    [
      isSidebarOpen,
      errorModal,
      errorMessage,
      token,
      device,
      user,
      toggleSidebar,
    ]
  );

  return (
    <SessionProvider>
      <AppContext.Provider
        value={{
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
          toggleSidebar,
        }}
      >
        {children}
      </AppContext.Provider>
    </SessionProvider>
  );
}
