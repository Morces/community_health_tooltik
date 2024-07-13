import { useEffect, useState } from "react";

function useDevice() {
  const getDeviceFromWidth = (width) => {
    if (width < 768) {
      return "sm";
    } else if (width >= 768 && width < 992) {
      return "md";
    } else {
      return "lg";
    }
  };

  const [device, setDevice] = useState(getDeviceFromWidth(window.innerWidth));

  const handleResize = () => {
    const width = window.innerWidth;
    setDevice(getDeviceFromWidth(width));
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
