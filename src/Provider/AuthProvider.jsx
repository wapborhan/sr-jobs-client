import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./FirebaseConfig.js";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedInUser = { email: userEmail };
      setUser(currentUser);

      if (currentUser) {
        fetch("https://b8a11-server-side-wapborhan.vercel.app/auth", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedInUser),
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        fetch("https://b8a11-server-side-wapborhan.vercel.app/logout", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedInUser),
          credentials: "include",
        })
          .then((res) => {
            res.json();
            console.log(res);
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const updateUser = (updatename, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: updatename,
      photoURL: photo,
    });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const AuthInfo = {
    user,
    createUser,
    loginWithGoogle,
    updateUser,
    loginUser,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
