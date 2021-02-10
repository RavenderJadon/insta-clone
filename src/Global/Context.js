import { createContext, useState } from "react";
import { auth } from "../components/config";
export const ContextProvider = createContext();

const Context = (props) => {
  const [model, setModel] = useState(false);

  const openModal = () => {
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
  };

  const register = async (user) => {
    const { username, email, password } = user;
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password,);
      response.user.updateProfile({ displayName: username });
      setModel(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const login = async (user) => {
    const { email, password } = user;
    const response = await auth.signInWithEmailAndPassword(email, password);
    console.log("response",response);
    setModel(false);
  }

  return (
    <ContextProvider.Provider value={{ model, openModal, closeModel, register, login }}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;
