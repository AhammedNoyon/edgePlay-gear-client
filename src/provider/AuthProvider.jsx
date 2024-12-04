import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  //provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //create user
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //update profile
  const manageUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //google sign up
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //github sign up
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  //forget password
  const forgetPass = (email) => {
    // console.log(email);
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  //logout
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  //auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
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
    googleSignIn,
    githubSignIn,
    forgetPass,
    logoutUser,
    loading,
    setLoading,
  };
  console.log("users .....", users);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
