// import { deleteDoc, doc } from "firebase/firestore";
// import { getDocs } from "firebase/firestore";
// import useCollection from "../hooks/useCollection";
// import { db } from "../firebase/firebaseConfig";
// import useCollection from "../hooks/useCollection";
import { useGlobalContext } from "../hooks/useGlobalContext";
import CreateNewRecipe from "./CreateNewRecipe";
function Home() {
  const { user } = useGlobalContext();

  // <CreateNewRecipe userId={user.uid} />;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
