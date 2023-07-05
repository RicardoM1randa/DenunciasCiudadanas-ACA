import { useState, useEffect } from "react";

const usePositionScreen = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
};

export default usePositionScreen;
