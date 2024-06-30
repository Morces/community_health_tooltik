import { useEffect, useState } from "react";
import useApp from "./useApp";

function useDevice() {
  const { device, setDevice } = useApp();

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setDevice("sm");
    } else if (width >= 768 && width < 992) {
      setDevice("md");
    } else {
      setDevice("lg");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
}

export default useDevice;
