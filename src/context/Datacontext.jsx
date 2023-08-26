import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  name: "boody",
  age: 26,
  startCount: 0,
  theme: "light",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };

    case "INCREASE":
      return { ...state, startCount: action.newValue };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const changeName = () => {
    dispatch({ type: "CHANGE_NAME", newValue: "ali" });
  };
  const toggleTheme=()=>{
    dispatch({
      type:"CHANGE_THEME",newValue: firstState.theme === "light" ? "dark" : "light"
    })
  }
  const greyTheme=()=>{
    dispatch({
      type:"CHANGE_THEME",newValue:"grey"
    })
  }
  const pinkTheme=()=>{
    dispatch({
      type:"CHANGE_THEME",newValue:"pink"
    })
  }
  const changeAge=()=>{
    dispatch({
      type:"CHANGE_AGE",newValue:30
    })
  }
  const counter=()=>{
    dispatch({
      type:"INCREASE",newValue:firstState.startCount+1
    })
  }
  return (
    <ThemeContexttt.Provider value={{ ...firstState, changeName ,toggleTheme,greyTheme,pinkTheme,changeAge,counter}}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
