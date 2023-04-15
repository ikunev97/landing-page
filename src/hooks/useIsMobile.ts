import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const checkForDevice = () => window.innerWidth < 1024;

  const [isMobile, setIsMobile] = useState(checkForDevice());

  useEffect(() => {
    const handlePageResized = () => {
      setIsMobile(checkForDevice());
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handlePageResized);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handlePageResized);
      }
    };
  }, [isMobile]);

  return {
    isMobile,
  };
};
