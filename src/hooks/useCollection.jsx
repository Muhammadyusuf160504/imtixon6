import { useState } from "react";
import { useEffect } from "react";
import { db } from "../firebase/FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
export function useCollection(col, _q) {
  const [documents, setDocuments] = useState(null);

  const q = query(collection(db, col), where(..._q));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      const docs = [];
      snapshot.docs.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        console.log(doc);
      });
      console.log(docs);
      setDocuments(docs);
    });
  }, [col]);

  return { documents };
}

export default useCollection;
