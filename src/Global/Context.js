import { createContext, useState } from "react";
export const ContextProvider = createContext();

const Context = (props) => {
  const [model, setModel] = useState(false);

  const openModal = () => {
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  return (
    <ContextProvider.Provider value={{ model, openModal, closeModel }}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;
