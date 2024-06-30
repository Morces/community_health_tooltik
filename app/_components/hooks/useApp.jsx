import { useContext } from "react";

import AppContext from "../context/AppContext";

function useApp() {
  const {
    isSidebarOpen,
    setIsSidebarOpen,
    toggleSidebar,
    errorModal,
    setErrorModal,
    errorMessage,
    setErrorMessage,
    token,
    setToken,
    device,
    setDevice,
  } = useContext(AppContext);

  return {
    isSidebarOpen,
    setIsSidebarOpen,
    toggleSidebar,
    errorModal,
    setErrorModal,
    errorMessage,
    setErrorMessage,
    token,
    setToken,
    device,
    setDevice,
  };
}

export default useApp;
