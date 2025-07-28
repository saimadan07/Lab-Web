// src/firebase/firestoreService.ts
import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  DocumentData,
} from "firebase/firestore";

export const fetchCollection = async (colName: string): Promise<DocumentData[]> => {
  const colRef = collection(db, colName);
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const fetchUserHistory = async (userId: string) => {
  const colRef = collection(db, "history");
  const q = query(colRef, where("userId", "==", userId), orderBy("date", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
