import {useState} from "react";
import {useMountEffect} from "./useMountEffect";

export type Screen = "mobile" | "tablet" | "desktop" | undefined;

export const useWindowSize = (): Screen => {
  const [windowSize, setWindowSize] = useState<Screen | undefined>(undefined);

  useMountEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        return setWindowSize("mobile");
      }
      if (window.innerWidth > 576 && window.innerWidth < 1024) {
        return setWindowSize("tablet");
      }
      if (window.innerWidth >= 1024) {
        return setWindowSize("desktop");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
};
