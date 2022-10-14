import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const LogInContext = createContext();

export const LogInContextProvider = (props) => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState();

  const registerNewUser = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        // ...
        updateProfile(auth.currentUser, {
          displayName: username,
          // photoURL: "https://example.com/jane-q-user/profile.jpg",
        });
        // .then(() => {
        //   // Profile updated!
        //   // ...
        // })
        // .catch((error) => {
        //   // An error occurred
        //   // ...
        // });
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMessage(error.message);
        console.log(error);
      });
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        return true;
        //can add navigate functiin here and move context provider inside router
        // rewrite this to async function
        // ...
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
        return false;
      });
  };

  // const logInSwitch = () => {
  //   setLoggedIn(!loggedIn);
  //   console.log(loggedIn);
  // };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log(auth);
        console.log(user);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        setUser(user);
        console.log(user);
        console.log(auth);
      } else {
        setUser(null);
        // User is signed out
        // ...
      }
    });
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <LogInContext.Provider
      value={{ logIn, registerNewUser, user, logOut, errorMessage }}
    >
      {props.children}
    </LogInContext.Provider>
  );
};
