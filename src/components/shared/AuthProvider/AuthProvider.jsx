import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(auth);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  
  const createUser =(email,password)=>{

    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInUser =(email,password)=>{

    return signInWithEmailAndPassword(auth, email, password)
  }
  
  const authInfo = {
    user,
    createUser,
    signInUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
