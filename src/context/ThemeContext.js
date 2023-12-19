import { createContext, useReducer } from "react";
export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE-COLOR":
      return { ...state, color: action.payload };
    case "CHANGE-MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  // the children prop represents any children components that this component
  // we are making might wrap in the future so that we can
  //render those children inside those component template

  //we can add custom logic here for flexibility
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#58249c",
    mode: "light",
  });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE-COLOR", payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE-MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children} // holding the app component only but it is insite the custom
      context hook
    </ThemeContext.Provider>
  );
}
