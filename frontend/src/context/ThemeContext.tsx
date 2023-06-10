import React, { createContext, useState } from "react";
import { contextType } from "../utills/customType";

export const ThemeContext = createContext<contextType>({
  theme: false,
  setTheme: () => {},
});
export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(false);
  if (theme) {
    document.body.setAttribute("class", "dark");
  } else {
    document.body.setAttribute("class", "light");
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
