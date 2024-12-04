import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  //create user
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        console.log();
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    users,
    setUsers,
    signUpUser,
    signInUser,
  };
  console.log("users .....", users);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
