import { createContext, useContext } from "react";


const AppStateContext = createContext();

export const useAppStateContext = () => {
  const value = useContext(AppStateContext);
  if (!value) {
    throw Error("useAppState should be used inside AppStateContext.Provider");
  }
  return value;
};

export const AppsStateContextProvider = AppStateContext.Provider;
