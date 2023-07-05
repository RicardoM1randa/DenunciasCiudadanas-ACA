import React, { useState, useEffect } from "react";

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (e) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", (e) => {
      mqListener(e);
    });
    return () => {
      darkThemeMq.removeEventListener("change", () => {
        mqListener();
      });
    };
  }, []);
  return isDarkTheme;
};

function useThemeHook() {
  const isDarkTheme = useThemeDetector();
  const [themeColor, setThemeColor] = useState(isDarkTheme ? "dark" : "light");
  useEffect(() => {
    setThemeColor(isDarkTheme ? "dark" : "light"); //Change to "dark" : "light" to apply toogle themes
  }, [isDarkTheme]);
  const theme = {
    palette: {
      mode: themeColor, //Change to themeColor to apply toogle themes
      ...(themeColor === "light"
        ? {
            //principal 471150
            //Secundary F85D0E
            //Text F7EEC7
            //Accent 01E2C9
            primary: {
              main: "#471150",
            },
            secondary: {
              main: "#F85D0E",
            },
            accent: {
              main: "#01E2C9",
            },
            text: {
              main: "#F7EEC7",
              accent: "#01E2C9",
              white: "white",
            },
            background: {
              default: "#000000",
            },
          }
        : {
            //principal 471150
            //Secundary F85D0E
            //Text F7EEC7
            //Accent 01E2C9
            primary: {
              main: "#471150",
            },
            secondary: {
              main: "#F85D0E",
            },
            accent: {
              main: "#01E2C9",
            },
            black: {
              main: "#000000",
            },
            text: {
              main: "#F7EEC7",
              accent: "#01E2C9",
              white: "white",
            },
            background: {
              default: "#000000",
            },
          }),
    },
    typography: {
      fontFamily: ["Normal-Font"].join(","),
    },
  };

  return theme;
}

export { useThemeHook };
