import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
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
  //update profile
  const manageUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //logout
  const logoutUser = () => {
    return signOut(auth);
  };
  //auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers(null);
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
    manageUserProfile,
    logoutUser,
  };
  console.log("users .....", users);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
