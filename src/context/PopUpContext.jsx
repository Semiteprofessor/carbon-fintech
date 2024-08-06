import { createContext, useContext, useMemo, useState } from "react";

const PopUpContext = createContext();

const PopUpProvider = ({ children }) => {
  const [topUp, setTopUp] = useState(false);
  const [send, setSend] = useState(false);
  const [withdraw, setWithdraw] = useState(false);

  return (
    <PopUpContext.Provider
      value={{ topUp, setTopUp, send, setSend, withdraw, setWithdraw }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

const usePopUp = () => {
  const context = useContext(PopUpContext);
  if (!context) {
    throw new Error("usePopUp must be used within a PopUpProvider");
  }
  return context;
};

export { PopUpProvider, usePopUp };
