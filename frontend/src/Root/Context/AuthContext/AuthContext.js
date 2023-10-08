import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/FirebaseConfig";

export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //1. CREATE USER WITH EMAIL & PASSWORD
  //  ====================================================
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LOGIN WITH EMAIL & PASSWORD
  //  ====================================================
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GOOGLE LOGIN & REGISTRATION
  //  ====================================================
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // USER INFOR AFTER LOGIN OR REGISTRATION
  //  ====================================================
  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe();
    };
  }, []);

  //   DISPLAY USER INFORMATION
  //  ====================================================
  const updateUserProfile = (name) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //  LOGOUT
  //  ====================================================
  const logout = () => {
    return signOut(auth);
  };

  //  EMAIL VERIFICATION
  //  ====================================================
  const verifyEmail = () => {
    // setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  // FORGET PASSWORD
  //  ====================================================
  const resetPassword = (email) => {
    // setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    createUser,
    signin,
    signInWithGoogle,
    updateUserProfile,
    logout,
    user,
    verifyEmail,
    resetPassword,
    loading,
  };

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
