// import hooks
import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function useLogin() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { state, dispatch } = useGlobalContext();

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log;
        dispatch({ type: "LOGIN", payload: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };
  return { login, error, user };
}

export default useLogin;
