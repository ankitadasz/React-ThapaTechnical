import { createContext, use } from "react";
export const userInfo = createContext();
export const UserProvider = ({ children }) => {
  const userName = "Ankita";
  const userAge = 20;
  return (
    <userInfo.Provider value={{ userName, userAge }}>
      {" "}
      {children}{" "}
    </userInfo.Provider>
  );
};
export const useHook = () => {
  const context = use(userInfo);
  if(context===undefined){
    throw new Error("component must be wrapped inside provider");
    
  }
    
  return context;
};
