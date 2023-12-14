import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";

function useLogout() {
  const [error, setError] = useState();
  const { dispatch } = useGlobalContext();

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((error) => {
        setError("Something went vwrong :(");
      });
  };
  return { logout, error };
}

export default useLogout;
